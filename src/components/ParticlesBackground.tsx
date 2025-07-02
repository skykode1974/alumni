'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { type Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: '#ffffff',
        },
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ['#006EFF', '#3388FF', '#00D1FF'], // GenuinAI brand tones
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          size: {
            value: { min: 4, max: 10 }, // 🔸 Larger, variable particle sizes
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            bounce: false,
            outModes: {
              default: 'bounce',
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
}
