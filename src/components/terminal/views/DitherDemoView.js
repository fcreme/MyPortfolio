import React, { useState } from 'react';
import { Line, Empty } from '../Line';
import { DitherShader } from '../../ui/dither-shader';

const DitherDemoView = () => {
  const [ditherMode, setDitherMode] = useState('bayer');
  const [colorMode, setColorMode] = useState('grayscale');
  const [gridSize, setGridSize] = useState(2);

  return (
    <div className="content-view">
      <Line n={1}>
        <span className="syn-heading-marker"># </span>
        <span className="syn-heading">Dither Shader Demo</span>
      </Line>
      <Empty n={2} />
      <Line n={3}>
        <span className="syn-comment">{'// Interactive dithering effect showcase'}</span>
      </Line>
      <Empty n={4} />

      {/* Main Dither Display */}
      <div style={{
        width: '100%',
        maxWidth: '600px',
        height: '400px',
        margin: '20px 0',
        border: '2px solid rgba(0, 255, 0, 0.3)',
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#000'
      }}>
        <DitherShader
          src="/felinn.jpeg"
          gridSize={gridSize}
          ditherMode={ditherMode}
          colorMode={colorMode}
          primaryColor="#000000"
          secondaryColor="#ffffff"
          className="w-full h-full"
        />
      </div>

      <Empty n={5} />

      {/* Controls */}
      <div style={{
        margin: '20px 0',
        padding: '15px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '8px',
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
      }}>
        <Line n={6}>
          <span className="syn-heading-marker">## </span>
          <span className="syn-heading">Controls</span>
        </Line>
        <Empty n={7} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* Dither Mode */}
          <div>
            <label style={{
              color: '#00ff00',
              marginRight: '10px',
              fontSize: '14px'
            }}>
              Dither Mode:
            </label>
            <select
              value={ditherMode}
              onChange={(e) => setDitherMode(e.target.value)}
              style={{
                backgroundColor: '#1a1a1a',
                color: '#00ff00',
                border: '1px solid rgba(0, 255, 0, 0.3)',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              <option value="bayer">Bayer</option>
              <option value="halftone">Halftone</option>
              <option value="noise">Noise</option>
              <option value="crosshatch">Crosshatch</option>
            </select>
          </div>

          {/* Color Mode */}
          <div>
            <label style={{
              color: '#00ff00',
              marginRight: '10px',
              fontSize: '14px'
            }}>
              Color Mode:
            </label>
            <select
              value={colorMode}
              onChange={(e) => setColorMode(e.target.value)}
              style={{
                backgroundColor: '#1a1a1a',
                color: '#00ff00',
                border: '1px solid rgba(0, 255, 0, 0.3)',
                padding: '5px 10px',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              <option value="original">Original</option>
              <option value="grayscale">Grayscale</option>
              <option value="duotone">Duotone</option>
            </select>
          </div>

          {/* Grid Size */}
          <div>
            <label style={{
              color: '#00ff00',
              marginRight: '10px',
              fontSize: '14px'
            }}>
              Grid Size: {gridSize}
            </label>
            <input
              type="range"
              min="2"
              max="12"
              value={gridSize}
              onChange={(e) => setGridSize(parseInt(e.target.value))}
              style={{
                width: '200px',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>
      </div>

      <Empty n={8} />
      <Line n={9}>
        <span className="syn-comment">{'<!-- Try different combinations to see the dithering effects! -->'}</span>
      </Line>
    </div>
  );
};

export default DitherDemoView;
