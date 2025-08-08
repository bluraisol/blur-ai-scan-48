import { useEffect, useRef } from "react";

const NeonNetworkBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    const DPR = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = w * DPR;
    canvas.height = h * DPR;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(DPR, DPR);

    let nodes: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      phase: number;
      pulsePhase: number;
      lineIntensity: number;
    }> = [];

    const NODE_COUNT = Math.round(Math.max(80, (w * h) / 25000)); // Увеличено в 3.6 раза
    const LINE_DISTANCE = Math.min(350, Math.max(200, Math.hypot(w, h) / 4)); // Увеличено расстояние соединений
    const COLOR_BASE = 'rgba(30,190,255,';

    function rand(min: number, max: number) { 
      return Math.random() * (max - min) + min; 
    }

    function initNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.2, 0.2),
          vy: rand(-0.2, 0.2),
          r: rand(1.5, 3.0),
          phase: rand(0, Math.PI * 2),
          pulsePhase: rand(0, Math.PI * 2),
          lineIntensity: rand(0.3, 1.0),
          pulsePhase: rand(0, Math.PI * 2),
          lineIntensity: rand(0.3, 1.0),
        });
      }
    }

    function drawGlow(x: number, y: number, r: number, intensity = 0.12) {
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 8);
      grad.addColorStop(0, COLOR_BASE + (0.45 * intensity) + ')');
      grad.addColorStop(0.25, COLOR_BASE + (0.18 * intensity) + ')');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r * 8, 0, Math.PI * 2);
      ctx.fill();
    }

    let animationId: number;

    function render(time: number) {
      ctx.clearRect(0, 0, w, h);

      // Faint central gradient to emulate depth
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, 'rgba(2,6,23,0.7)');
      g.addColorStop(1, 'rgba(1,2,8,0.85)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Draw connecting lines
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINE_DISTANCE) {
            const baseAlpha = (1 - dist / LINE_DISTANCE) * 0.6;
            const pulseEffect = Math.sin(time * 0.001 + a.pulsePhase) * 0.2 + 0.8;
            const alpha = baseAlpha * pulseEffect * a.lineIntensity * 1.2; // Увеличена яркость
            
            // Основная линия
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = COLOR_BASE + (alpha * 0.8) + ')';
            ctx.lineWidth = 1.2;
            ctx.shadowBlur = 8;
            ctx.shadowColor = 'rgba(30,190,255,' + (alpha * 0.6) + ')';
            ctx.stroke();
            ctx.shadowBlur = 0;
            
            // Дополнительная тонкая линия для большего количества соединений
            if (alpha > 0.3 && Math.random() > 0.5) { // Увеличена вероятность
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = 'rgba(100,220,255,' + (alpha * 0.4) + ')';
              ctx.lineWidth = 0.5;
              ctx.shadowBlur = 15;
              ctx.shadowColor = 'rgba(100,220,255,' + (alpha * 0.5) + ')';
              ctx.stroke();
              ctx.shadowBlur = 0;
            }
            
            // Третья линия для самых ярких соединений
            if (alpha > 0.6 && Math.random() > 0.8) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = 'rgba(150,240,255,' + (alpha * 0.2) + ')';
              ctx.lineWidth = 0.3;
              ctx.shadowBlur = 20;
              ctx.shadowColor = 'rgba(150,240,255,' + (alpha * 0.3) + ')';
              ctx.stroke();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // Draw nodes with glow
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.phase += 0.002 + (n.r * 0.0005);
        n.pulsePhase += 0.001;
        n.x += n.vx + Math.sin(n.phase) * 0.1;
        n.y += n.vy + Math.cos(n.phase) * 0.1;

        // Keep in bounds
        if (n.x < -50) n.x = w + 50;
        if (n.x > w + 50) n.x = -50;
        if (n.y < -50) n.y = h + 50;
        if (n.y > h + 50) n.y = -50;

        // Glow
        drawGlow(n.x, n.y, n.r, 1.0);

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = 'rgba(180,240,255,0.98)';
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        // Tiny halo
        ctx.beginPath();
        ctx.strokeStyle = COLOR_BASE + '0.35)';
        ctx.lineWidth = 1;
        ctx.arc(n.x, n.y, n.r + 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Множественные волновые формы
      ctx.beginPath();
      const t = time * 0.0005;
      for (let x = 0; x < w; x += 10) {
        const y = h * 0.12 + Math.sin((x * 0.02) + t) * (h * 0.03) + Math.cos((x * 0.01) - t * 0.5) * 10;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(60,200,255,0.12)';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 18;
      ctx.shadowColor = 'rgba(30,190,255,0.05)';
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Дополнительная волна сверху
      ctx.beginPath();
      for (let x = 0; x < w; x += 15) {
        const y = h * 0.08 + Math.sin((x * 0.015) + t * 1.2) * (h * 0.02) + Math.cos((x * 0.008) - t * 0.3) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(80,180,255,0.08)';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 12;
      ctx.shadowColor = 'rgba(80,180,255,0.03)';
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Вертикальные линии сканирования (редкие)
      if (Math.sin(t * 0.3) > 0.95) {
        const scanX = (Math.sin(t * 0.1) * 0.5 + 0.5) * w;
        ctx.beginPath();
        ctx.moveTo(scanX, 0);
        ctx.lineTo(scanX, h);
        ctx.strokeStyle = 'rgba(30,190,255,0.05)';
        ctx.lineWidth = 2;
        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(30,190,255,0.1)';
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // Диагональные линии сетки (очень тонкие)
      if (Math.random() > 0.995) { // Увеличена частота появления
        const startX = Math.random() * w;
        const startY = Math.random() * h;
        const endX = startX + (Math.random() - 0.5) * 200;
        const endY = startY + (Math.random() - 0.5) * 200;
        
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = 'rgba(30,190,255,0.03)';
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      
      // Дополнительные горизонтальные линии
      if (Math.random() > 0.996) {
        const y = Math.random() * h;
        const startX = Math.random() * w * 0.3;
        const endX = startX + Math.random() * w * 0.4;
        
        ctx.beginPath();
        ctx.moveTo(startX, y);
        ctx.lineTo(endX, y);
        ctx.strokeStyle = 'rgba(30,190,255,0.04)';
        ctx.lineWidth = 0.8;
        ctx.shadowBlur = 12;
        ctx.shadowColor = 'rgba(30,190,255,0.02)';
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(render);
    }

    function handleResize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(DPR, DPR);
      initNodes();
    }

    // Pulse effect
    const pulseInterval = setInterval(() => { // Увеличена частота импульсов
      const centerX = w * 0.1 + Math.random() * w * 0.8;
      const centerY = h * 0.1 + Math.random() * h * 0.8;
      ctx.save();
      const pulseGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 250);
      pulseGrad.addColorStop(0, 'rgba(40,220,255,0.12)');
      pulseGrad.addColorStop(0.5, 'rgba(30,190,255,0.06)');
      pulseGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = pulseGrad;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    }, 2500); // Увеличена частота

    initNodes();
    animationId = requestAnimationFrame(render);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(pulseInterval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default NeonNetworkBackground;