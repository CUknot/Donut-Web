import React, { useEffect, useState } from 'react';

const TorusDonut: React.FC = () => {
  const [output, setOutput] = useState<string>('');
  const screenWidth = 60; // Set screen width
  const screenHeight = 60; // Set screen height

  // Constants
  const thetaSpacing = 0.07;
  const phiSpacing = 0.02;
  const R1 = 1;
  const R2 = 2;
  const K2 = 5;
  const K1 = (screenWidth * K2 * 3) / (8 * (R1 + R2));

  let A = 0;
  let B = 0;

  const renderFrame = () => {
    let b: string[] = Array(screenWidth * screenHeight).fill(' ');
    let bz: number[] = Array(screenWidth * screenHeight).fill(0);

    for (let theta = 0; theta < 2 * Math.PI; theta += thetaSpacing) {
      const costheta = Math.cos(theta);
      const sintheta = Math.sin(theta);

      for (let phi = 0; phi < 2 * Math.PI; phi += phiSpacing) {
        const cosphi = Math.cos(phi);
        const sinphi = Math.sin(phi);

        const circlex = R2 + R1 * costheta;
        const circley = R1 * sintheta;

        const x = circlex * (Math.cos(B) * cosphi + Math.sin(A) * Math.sin(B) * sinphi) - circley * Math.cos(A) * Math.sin(B);
        const y = circlex * (Math.sin(B) * cosphi - Math.sin(A) * Math.cos(B) * sinphi) + circley * Math.cos(A) * Math.cos(B);
        const z = K2 + Math.cos(A) * circlex * sinphi + circley * Math.sin(A);
        const ooz = 1 / z;

        const xp = Math.floor(screenWidth / 2 + K1 * ooz * x);
        const yp = Math.floor(screenHeight / 2 - K1 * ooz * y);

        const L = cosphi * costheta * Math.sin(B) - Math.cos(A) * costheta * sinphi - Math.sin(A) * sintheta + Math.cos(B) * (Math.cos(A) * sintheta - costheta * Math.sin(A) * sinphi);

        if (L > 0) {
          const idx = xp + screenWidth * yp;
          if (ooz > bz[idx]) {
            bz[idx] = ooz;
            const luminanceIndex = Math.floor(L * 8);
            b[idx] = ".,-~:;=!*#$@"[Math.max(0, Math.min(11, luminanceIndex))];
          }
        }
      }
    }

    // Add newlines for display
    let frame = '';
    for (let i = 0; i < screenHeight; i++) {
      frame += b.slice(i * screenWidth, (i + 1) * screenWidth).join('') + '\n';
    }

    setOutput(frame);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      renderFrame();
      A += 0.04;
      B += 0.02;
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <pre
      style={{ fontFamily: 'monospace', lineHeight: '10px' }}
      dangerouslySetInnerHTML={{ __html: output.replace(/\n/g, '<br/>') }}
    />
  );
};

export default TorusDonut;
