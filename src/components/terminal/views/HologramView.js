import React, { useState } from 'react';
import { Line, Empty } from '../Line';
import { SpecialText } from '../../ui/special-text';
import HologramCube from '../../ui/HologramCube';

const HologramView = () => {
  const [camStatus, setCamStatus] = useState('requesting');

  let d = 0;
  const next = (step = 0.03) => { d += step; return d; };

  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-heading-marker"># </span>
        <SpecialText speed={10} delay={next(0.05)} className="syn-heading">Holographic Face Cube</SpecialText>
      </Line>
      <Empty n={2} />
      <Line n={3}>
        <SpecialText speed={5} delay={next()} className="syn-comment">{'// Volumetric 3D particle hologram — webcam or fallback image'}</SpecialText>
      </Line>
      <Empty n={4} />
      <Line n={5}>
        <SpecialText speed={5} delay={next()} className="syn-comment">
          {camStatus === 'requesting' && '// Requesting camera access...'}
          {camStatus === 'streaming' && '// Camera active — move your face to see it in 3D'}
          {camStatus === 'denied' && '// Camera denied — using fallback image'}
          {camStatus === 'fallback' && '// Rendering fallback image as hologram'}
        </SpecialText>
      </Line>
      <Empty n={6} />

      <div style={{
        width: '100%',
        maxWidth: '650px',
        height: '450px',
        margin: '10px 0',
        border: '1px solid rgba(0, 200, 255, 0.2)',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
      }}>
        <HologramCube onStatusChange={setCamStatus} />
      </div>

      <Empty n={7} />
      <Line n={8}>
        <SpecialText speed={5} delay={next()} className="syn-comment">{'// Drag to rotate — 65k particles, custom GLSL shaders'}</SpecialText>
      </Line>
      <Empty n={9} />
      <Line n={10}>
        <SpecialText speed={5} delay={next()} className="syn-keyword">{'export default '}</SpecialText>
        <SpecialText speed={5} delay={next()} className="syn-function">{'HologramCube'}</SpecialText>
        <SpecialText speed={5} delay={next()}>{';'}</SpecialText>
      </Line>
      <Empty n={11} />
      <Empty n={12} />
    </div>
  );
};

export default HologramView;
