import React, { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

const GRID_W = 64;
const GRID_H = 64;
const GRID_D = 12;
const TOTAL = GRID_W * GRID_H * GRID_D;
const TEX_SIZE = 128;

// Create a 1x1 black placeholder texture so the shader never samples null
const placeholderData = new Uint8Array(4); // [0,0,0,0]
const placeholderTexture = new THREE.DataTexture(placeholderData, 1, 1, THREE.RGBAFormat);
placeholderTexture.needsUpdate = true;

const vertexShader = `
  uniform float uTime;
  uniform sampler2D uBrightnessMap;
  uniform float uBreathScale;
  attribute vec2 aUv;
  attribute float aDepthLayer;
  varying float vBrightness;
  varying float vDepth;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  void main() {
    vec4 texSample = texture2D(uBrightnessMap, aUv);
    float brightness = dot(texSample.rgb, vec3(0.299, 0.587, 0.114));

    float depthNorm = aDepthLayer / ${GRID_D.toFixed(1)};
    float depthFalloff = 1.0 - abs(depthNorm - 0.5) * 1.6;
    depthFalloff = clamp(depthFalloff, 0.0, 1.0);

    float finalBrightness = brightness * depthFalloff;

    float flicker = hash(aUv + uTime * 0.1) * 0.15;
    finalBrightness += flicker * finalBrightness;

    vBrightness = finalBrightness;
    vDepth = depthNorm;

    vec3 pos = position;
    pos.z += (finalBrightness - 0.3) * 0.4;
    pos *= uBreathScale;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    float size = mix(1.0, 4.5, finalBrightness);
    gl_PointSize = size * (200.0 / -mvPosition.z);
  }
`;

const fragmentShader = `
  varying float vBrightness;
  varying float vDepth;
  uniform float uTime;

  void main() {
    vec2 center = gl_PointCoord - 0.5;
    float dist = length(center);
    if (dist > 0.5) discard;

    float alpha = smoothstep(0.5, 0.15, dist);

    vec3 baseColor = mix(
      vec3(0.0, 0.4, 0.7),
      vec3(0.3, 0.9, 1.0),
      vBrightness
    );
    baseColor = mix(baseColor, vec3(0.7, 0.85, 1.0), vBrightness * 0.3);

    float intensityAlpha = smoothstep(0.05, 0.25, vBrightness);

    gl_FragColor = vec4(baseColor * vBrightness * 1.8, alpha * intensityAlpha * 0.85);
  }
`;

function FaceParticles({ brightnessTexture }) {
  const pointsRef = useRef();
  const geometryRef = useRef();
  const materialRef = useRef();

  const { positions, uvs, depths } = useMemo(() => {
    const pos = new Float32Array(TOTAL * 3);
    const uv = new Float32Array(TOTAL * 2);
    const dep = new Float32Array(TOTAL);
    let idx = 0;
    for (let z = 0; z < GRID_D; z++) {
      for (let y = 0; y < GRID_H; y++) {
        for (let x = 0; x < GRID_W; x++) {
          const i3 = idx * 3;
          pos[i3] = (x / (GRID_W - 1) - 0.5) * 2.0;
          pos[i3 + 1] = ((GRID_H - 1 - y) / (GRID_H - 1) - 0.5) * 2.0;
          pos[i3 + 2] = (z / (GRID_D - 1) - 0.5) * 1.2;
          uv[idx * 2] = x / (GRID_W - 1);
          uv[idx * 2 + 1] = 1.0 - y / (GRID_H - 1);
          dep[idx] = z;
          idx++;
        }
      }
    }
    return { positions: pos, uvs: uv, depths: dep };
  }, []);

  // Set up geometry imperatively to avoid R3F bufferAttribute issues
  useEffect(() => {
    if (!geometryRef.current) return;
    const geo = geometryRef.current;
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('aUv', new THREE.BufferAttribute(uvs, 2));
    geo.setAttribute('aDepthLayer', new THREE.BufferAttribute(depths, 1));
  }, [positions, uvs, depths]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uBrightnessMap: { value: placeholderTexture },
    uBreathScale: { value: 1.0 },
  }), []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = t;
      materialRef.current.uniforms.uBreathScale.value = 1.0 + Math.sin(t * 0.8) * 0.02;
      if (brightnessTexture) {
        materialRef.current.uniforms.uBrightnessMap.value = brightnessTexture;
      }
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0025;
      pointsRef.current.rotation.x = Math.sin(t * 0.3) * 0.08;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geometryRef} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene({ brightnessTexture }) {
  return (
    <>
      <FaceParticles brightnessTexture={brightnessTexture} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        dampingFactor={0.05}
        enableDamping
      />
      <EffectComposer>
        <Bloom
          intensity={1.2}
          luminanceThreshold={0.1}
          luminanceSmoothing={0.9}
          radius={0.8}
        />
      </EffectComposer>
    </>
  );
}

function useWebcam(fallbackSrc) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const textureRef = useRef(null);
  const animFrameRef = useRef(null);
  const [status, setStatus] = useState('requesting');
  const [texture, setTexture] = useState(null);

  const processFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.paused || video.ended) {
      animFrameRef.current = requestAnimationFrame(processFrame);
      return;
    }

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    ctx.drawImage(video, 0, 0, TEX_SIZE, TEX_SIZE);
    const imageData = ctx.getImageData(0, 0, TEX_SIZE, TEX_SIZE);
    const data = new Uint8Array(imageData.data.buffer);

    if (!textureRef.current) {
      textureRef.current = new THREE.DataTexture(data, TEX_SIZE, TEX_SIZE, THREE.RGBAFormat);
      textureRef.current.minFilter = THREE.LinearFilter;
      textureRef.current.magFilter = THREE.LinearFilter;
      setTexture(textureRef.current);
    } else {
      textureRef.current.image.data.set(data);
    }
    textureRef.current.needsUpdate = true;

    animFrameRef.current = requestAnimationFrame(processFrame);
  }, []);

  const loadFallbackImage = useCallback(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(img, 0, 0, TEX_SIZE, TEX_SIZE);
      const imageData = ctx.getImageData(0, 0, TEX_SIZE, TEX_SIZE);
      const data = new Uint8Array(imageData.data.buffer);

      const tex = new THREE.DataTexture(data, TEX_SIZE, TEX_SIZE, THREE.RGBAFormat);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      tex.needsUpdate = true;
      textureRef.current = tex;
      setTexture(tex);
      setStatus('fallback');
    };
    img.src = fallbackSrc;
  }, [fallbackSrc]);

  useEffect(() => {
    canvasRef.current = document.createElement('canvas');
    canvasRef.current.width = TEX_SIZE;
    canvasRef.current.height = TEX_SIZE;

    navigator.mediaDevices
      .getUserMedia({ video: { width: TEX_SIZE, height: TEX_SIZE, facingMode: 'user' } })
      .then((stream) => {
        const video = document.createElement('video');
        video.srcObject = stream;
        video.playsInline = true;
        video.muted = true;
        video.play();
        videoRef.current = video;
        setStatus('streaming');
        animFrameRef.current = requestAnimationFrame(processFrame);
      })
      .catch(() => {
        setStatus('denied');
        loadFallbackImage();
      });

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (videoRef.current && videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
      }
    };
  }, [processFrame, loadFallbackImage]);

  return { status, texture };
}

export default function HologramCube({ onStatusChange }) {
  const fallbackSrc = `${process.env.PUBLIC_URL}/felinn.jpeg`;
  const { status, texture } = useWebcam(fallbackSrc);

  useEffect(() => {
    if (onStatusChange) onStatusChange(status);
  }, [status, onStatusChange]);

  return (
    <Canvas
      camera={{ position: [0, 0, 3.2], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <Scene brightnessTexture={texture} />
    </Canvas>
  );
}
