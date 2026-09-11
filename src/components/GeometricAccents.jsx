import React from 'react';

/**
 * GeometricAccents — Bauhaus palette background accent shapes (#F9BE00 yellow, #5C2E8D purple, #E8392B red)
 * Renders floating geometric shapes in section backgrounds.
 */
export default function GeometricAccents({ variant = 1 }) {
  // Preset shape layouts tailored per section
  const configs = {
    1: [
      { top: '10%', left: '2%', width: 28, height: 28, bg: '#F9BE00', opacity: 0.18, rotate: 45, radius: 4 },
      { top: '15%', right: '3%', width: 20, height: 20, border: '2.5px solid #5C2E8D', opacity: 0.2, radius: '50%' },
      { bottom: '15%', left: '3%', width: 24, height: 24, bg: '#E8392B', opacity: 0.14, radius: '50%' },
      { bottom: '12%', right: '2%', width: 32, height: 32, border: '2.5px solid #F9BE00', opacity: 0.22, radius: 6, rotate: 20 },
    ],
    2: [
      { top: '8%', right: '3%', width: 32, height: 32, bg: '#5C2E8D', opacity: 0.16, rotate: 45, radius: 4 },
      { top: '22%', left: '2%', width: 22, height: 22, bg: '#E8392B', opacity: 0.15, radius: '50%' },
      { bottom: '18%', right: '2%', width: 26, height: 26, border: '2.5px solid #F9BE00', opacity: 0.22, radius: '50%' },
      { bottom: '10%', left: '4%', width: 18, height: 18, bg: '#F9BE00', opacity: 0.18, rotate: 15, radius: 3 },
    ],
    3: [
      { top: '12%', left: '3%', width: 26, height: 26, bg: '#E8392B', opacity: 0.15, rotate: 45, radius: 4 },
      { top: '18%', right: '4%', width: 30, height: 30, bg: '#5C2E8D', opacity: 0.16, radius: '50%' },
      { bottom: '20%', left: '2%', width: 22, height: 22, border: '2px solid #5C2E8D', opacity: 0.2, radius: 4, rotate: 12 },
      { bottom: '14%', right: '3%', width: 36, height: 36, bg: '#F9BE00', opacity: 0.16, rotate: 45, radius: 6 },
    ],
    4: [
      { top: '10%', right: '2%', width: 34, height: 34, bg: '#F9BE00', opacity: 0.18, rotate: 45, radius: 5 },
      { top: '24%', left: '3%', width: 20, height: 20, bg: '#5C2E8D', opacity: 0.16, radius: '50%' },
      { bottom: '22%', right: '4%', width: 24, height: 24, bg: '#E8392B', opacity: 0.14, radius: 4, rotate: 25 },
      { bottom: '12%', left: '2%', width: 28, height: 28, border: '2.5px solid #F9BE00', opacity: 0.22, radius: '50%' },
    ],
    5: [
      { top: '14%', left: '2%', width: 30, height: 30, border: '2.5px solid #F9BE00', opacity: 0.22, radius: '50%' },
      { top: '10%', right: '3%', width: 24, height: 24, bg: '#E8392B', opacity: 0.16, rotate: 45, radius: 4 },
      { bottom: '16%', left: '3%', width: 22, height: 22, bg: '#5C2E8D', opacity: 0.18, radius: '50%' },
      { bottom: '10%', right: '2%', width: 32, height: 32, bg: '#F9BE00', opacity: 0.15, rotate: 45, radius: 6 },
    ],
    6: [
      { top: '12%', right: '3%', width: 30, height: 30, bg: '#F9BE00', opacity: 0.18, rotate: 45, radius: 4 },
      { top: '20%', left: '2%', width: 22, height: 22, bg: '#5C2E8D', opacity: 0.15, radius: 3, rotate: 15 },
      { bottom: '14%', right: '2%', width: 26, height: 26, bg: '#E8392B', opacity: 0.14, radius: '50%' },
      { bottom: '22%', left: '4%', width: 28, height: 28, border: '2.5px solid #5C2E8D', opacity: 0.2, radius: '50%' },
    ],
    7: [
      { top: '10%', left: '3%', width: 26, height: 26, bg: '#5C2E8D', opacity: 0.16, rotate: 45, radius: 4 },
      { top: '16%', right: '2%', width: 32, height: 32, bg: '#F9BE00', opacity: 0.18, radius: '50%' },
      { bottom: '18%', left: '2%', width: 22, height: 22, bg: '#E8392B', opacity: 0.15, rotate: 20, radius: 3 },
      { bottom: '12%', right: '4%', width: 28, height: 28, border: '2.5px solid #F9BE00', opacity: 0.22, radius: 6, rotate: 45 },
    ],
    8: [
      { top: '12%', right: '2%', width: 24, height: 24, bg: '#E8392B', opacity: 0.15, radius: '50%' },
      { top: '22%', left: '3%', width: 32, height: 32, bg: '#F9BE00', opacity: 0.18, rotate: 45, radius: 5 },
      { bottom: '16%', right: '3%', width: 28, height: 28, border: '2.5px solid #5C2E8D', opacity: 0.2, radius: '50%' },
      { bottom: '10%', left: '2%', width: 20, height: 20, bg: '#5C2E8D', opacity: 0.16, rotate: 15, radius: 3 },
    ],
    9: [
      { top: '8%', left: '2%', width: 34, height: 34, bg: '#F9BE00', opacity: 0.18, rotate: 45, radius: 6 },
      { top: '18%', right: '3%', width: 26, height: 26, bg: '#5C2E8D', opacity: 0.16, radius: '50%' },
      { bottom: '20%', left: '3%', width: 22, height: 22, bg: '#E8392B', opacity: 0.14, radius: 3, rotate: 30 },
      { bottom: '12%', right: '2%', width: 30, height: 30, border: '2.5px solid #F9BE00', opacity: 0.22, radius: '50%' },
    ],
  };

  const items = configs[variant] || configs[1];

  return (
    <>
      {items.map((item, i) => (
        <div
          key={i}
          className="geometric-accent-shape"
          style={{
            position: 'absolute',
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
            width: item.width,
            height: item.height,
            background: item.bg || 'transparent',
            border: item.border || 'none',
            opacity: item.opacity,
            borderRadius: item.radius || 0,
            transform: item.rotate ? `rotate(${item.rotate}deg)` : 'none',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      ))}
      <style>{`
        @media (max-width: 768px) {
          .geometric-accent-shape { display: none !important; }
        }
      `}</style>
    </>
  );
}
