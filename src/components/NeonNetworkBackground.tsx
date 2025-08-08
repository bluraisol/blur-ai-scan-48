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

    const NODE_COUNT = Math.round(Math.max(40, (w * h) / 40000)); // Уменьшено для производительности
    const LINE_DISTANCE = Math.min(250, Math.max(150, Math.hypot(w, h) / 5)); // Оптимизировано
    const COLOR_BASE = 'rgba(20,140,200,'; // Менее яркий цвет

    function rand(min: number, max: number) { 
      return Math.random() * (max - min) + min; 
    }

    function initNodes() {
      nodes = [];
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: rand(0, w),
          y: rand(0, h),
          vx: rand(-0.8, 0.8), // Увеличена скорость движения
          vy: rand(-0.8, 0.8),
          r: rand(1.5, 3.0),
          phase: rand(0, Math.PI * 2),
          pulsePhase: rand(0, Math.PI * 2),
          lineIntensity: rand(0.2, 0.6), // Уменьшена яркость
        });
      }
    }

    function drawGlow(x: number, y: number, r: number, intensity = 0.08) { // Уменьшено свечение
      const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 8);
      grad.addColorStop(0, COLOR_BASE + (0.3 * intensity) + ')');
      grad.addColorStop(0.25, COLOR_BASE + (0.12 * intensity) + ')');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, r * 8, 0, Math.PI * 2);
      ctx.fill();
    }

    let animationId: number;
    let lastTime = 0;
    const TARGET_FPS = 60;
    const FRAME_INTERVAL = 1000 / TARGET_FPS;

    function render(time: number) {
      // Ограничение FPS для оптимизации
      if (time - lastTime < FRAME_INTERVAL) {
        animationId = requestAnimationFrame(render);
        return;
      }
      lastTime = time;

      ctx.clearRect(0, 0, w, h);

      // Faint central gradient to emulate depth
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, 'rgba(2,6,23,0.4)'); // Менее яркий фон
      g.addColorStop(1, 'rgba(1,2,8,0.6)');
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
            const baseAlpha = (1 - dist / LINE_DISTANCE) * 0.3; // Уменьшена яркость
            const pulseEffect = Math.sin(time * 0.002 + a.pulsePhase) * 0.3 + 0.7; // Более активная пульсация
            const alpha = baseAlpha * pulseEffect * a.lineIntensity;
            
            // Основная линия
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = COLOR_BASE + (alpha * 0.6) + ')';
            ctx.lineWidth = 0.8;
            ctx.shadowBlur = 4; // Уменьшено размытие для производительности
            ctx.shadowColor = 'rgba(20,140,200,' + (alpha * 0.3) + ')';
            ctx.stroke();
            ctx.shadowBlur = 0;
            
            // Дополнительная тонкая линия (реже для производительности)
            if (alpha > 0.2 && Math.random() > 0.8) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = 'rgba(80,180,220,' + (alpha * 0.2) + ')';
              ctx.lineWidth = 0.3;
              ctx.stroke();
            }
          }
        }
      }

      // Draw nodes with glow
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.phase += 0.008 + (n.r * 0.002); // Увеличена скорость фазы
        n.pulsePhase += 0.004; // Более быстрая пульсация
        n.x += n.vx + Math.sin(n.phase) * 0.5; // Увеличена амплитуда движения
        n.y += n.vy + Math.cos(n.phase) * 0.5;

        // Keep in bounds
        if (n.x < -50) n.x = w + 50;
        if (n.x > w + 50) n.x = -50;
        if (n.y < -50) n.y = h + 50;
        if (n.y > h + 50) n.y = -50;

        // Glow
        drawGlow(n.x, n.y, n.r, 0.6); // Уменьшено свечение

        // Core dot
        ctx.beginPath();
        ctx.fillStyle = 'rgba(120,200,240,0.8)'; // Менее яркий
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        // Tiny halo
        ctx.beginPath();
        ctx.strokeStyle = COLOR_BASE + '0.2)';
        ctx.lineWidth = 1;
        ctx.arc(n.x, n.y, n.r + 3, 0, Math.PI * 2);
        ctx.stroke();
      }

      // Упрощенная волновая форма
      ctx.beginPath();
      const t = time * 0.001;
      for (let x = 0; x < w; x += 15) { // Меньше точек для производительности
        const y = h * 0.12 + Math.sin((x * 0.02) + t) * (h * 0.02);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = 'rgba(40,160,200,0.08)';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(20,140,200,0.03)';
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Редкие вертикальные линии сканирования
      if (Math.sin(t * 0.2) > 0.98) {
        const scanX = (Math.sin(t * 0.1) * 0.5 + 0.5) * w;
        ctx.beginPath();
        ctx.moveTo(scanX, 0);
        ctx.lineTo(scanX, h);
        ctx.strokeStyle = 'rgba(20,140,200,0.03)';
        ctx.lineWidth = 1;
        ctx.stroke();
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

    // Редкие импульсы для производительности
    const pulseInterval = setInterval(() => {
      const centerX = w * 0.1 + Math.random() * w * 0.8;
      const centerY = h * 0.1 + Math.random() * h * 0.8;
      ctx.save();
      const pulseGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 200);
      pulseGrad.addColorStop(0, 'rgba(30,160,200,0.06)');
      pulseGrad.addColorStop(0.5, 'rgba(20,140,200,0.03)');
      pulseGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = pulseGrad;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    }, 4000); // Реже для производительности

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