import React, { useEffect, useRef } from 'react';

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(108, 117, 125, 0.05)'; // Background color matching the new theme
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // White text with 50% opacity
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = String.fromCharCode(Math.random() * 128);
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      // Create a gradient for fading effect
      const gradient = ctx.createLinearGradient(0, canvas.height - 225, 0, canvas.height - 175);
      gradient.addColorStop(0, 'rgba(108, 117, 125, 1)');
      gradient.addColorStop(1, 'rgba(108, 117, 125, 0)');

      // Apply gradient overlay
      ctx.fillStyle = gradient;
      ctx.fillRect(0, canvas.height - 225, canvas.width, 50);
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0" />;
};

export default MatrixRain;