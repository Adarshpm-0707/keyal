import React, { useRef, useEffect } from 'react';

const DNAHelix = () => {
  const canvasRef = useRef(null);
  const scrollRef = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let ww, wh;

    const controls = {
      freq: 0.015,
      amp: 110,
      noise: 40,
    };

    const initCanvas = () => {
      ww = canvas.width = window.innerWidth;
      wh = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    // DIRECT ROBUST SCROLL LISTENER
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      // Normalize to 0-1
      scrollRef.current = scrollHeight > 0 ? currentScroll / scrollHeight : 0;
    };

    window.addEventListener('resize', initCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    initCanvas();
    handleScroll(); // Initial check

    const draw = () => {
      // Sensitivity factor: 500 ensures visible motion from the very first pixel of scroll
      const time = scrollRef.current * 500;
      
      // Clear background
      ctx.fillStyle = '#0B1408';
      ctx.fillRect(0, 0, ww, wh);

      // Noise Wave
      ctx.beginPath();
      for (let i = 0; i < ww; i += 1) {
        const deg = i * controls.freq + time / 20;
        const wave = controls.amp * Math.sin(deg);
        const noise = controls.noise * Math.random();
        ctx.lineTo(i, wave + noise + wh / 2);
      }
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
      ctx.stroke();

      // DNA Wave 1
      ctx.beginPath();
      for (let i = 0; i < wh; i += 1) {
        const deg = i * controls.freq + time / 20;
        ctx.lineTo(controls.amp * Math.sin(deg) + ww / 2, i);
      }
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(224, 240, 193, 0.3)';
      ctx.stroke();

      // DNA Wave 2
      ctx.beginPath();
      for (let i = 0; i < wh; i += 1) {
        const deg = i * controls.freq + time / 20;
        ctx.lineTo(-controls.amp * Math.sin(deg) + ww / 2, i);
      }
      ctx.stroke();

      // Connecting Lines
      for (let i = 0; i < wh; i += 20) {
        const deg = i * controls.freq + time / 20;
        const amp = controls.amp * Math.sin(deg);
        const x1 = ww / 2 + amp;
        const x2 = ww / 2 - amp;
        
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(185, 224, 117, 0.2)';
        ctx.moveTo(x1, i);
        ctx.lineTo(x2, i);
        ctx.stroke();

        // Points
        ctx.beginPath();
        ctx.arc(x1, i, 4, 0, Math.PI * 2);
        ctx.arc(x2, i, Math.sin(i + time / 10) + 6, 0, Math.PI * 2);
        ctx.fillStyle = `rgb(${i / 4}, ${i / 2 + 50}, ${100 + i / 1.5})`; 
        ctx.fill();
      }

      // Cursor Visual
      const { x, y } = mousePos.current;
      ctx.strokeStyle = 'rgba(185, 224, 117, 0.15)';
      ctx.beginPath();
      ctx.moveTo(x - 20, y);
      ctx.lineTo(x + 20, y);
      ctx.moveTo(x, y - 20);
      ctx.lineTo(x, y + 20);
      ctx.stroke();

      requestAnimationFrame(draw);
    };

    const animationId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', initCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
};

export default DNAHelix;
