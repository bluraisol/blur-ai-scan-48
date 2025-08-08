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
      lastConnections: number;
    }> = [];

    const NODE_COUNT = Math.round(Math.max(40, (w * h) / 40000)); // Уменьшено для производительности
    const LINE_DISTANCE = Math.min(280, Math.max(160, Math.hypot(w, h) / 5)); // Оптимизировано расстояние
    const COLOR_BASE = 'rgba(30,190,255,';
    
    // Кэш для градиентов
    const gradientCache = new Map();
    
    // Оптимизация: пропуск кадров для тяжелых операций
    let frameCount = 0;
    const SKIP_FRAMES = 2; // Обновляем тяжелые эффекты каждый 3-й кадр

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
          lineIntensity: rand(0.3, 1.0),
          lastConnections: 0,
        });
      }
    }

    function getGradient(key: string, x: number, y: number, r: number, intensity: number) {
      if (!gradientCache.has(key)) {
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r * 6);
        grad.addColorStop(0, COLOR_BASE + (0.3 * intensity) + ')');
        grad.addColorStop(0.4, COLOR_BASE + (0.1 * intensity) + ')');
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        gradientCache.set(key, grad);
      }
      return gradientCache.get(key);
    }

    function drawGlow(x: number, y: number, r: number, intensity = 0.08) {
      // Упрощенное свечение только для крупных узлов
      if (r > 2.5 && frameCount % SKIP_FRAMES === 0) {
        const key = `glow_${Math.round(x/10)}_${Math.round(y/10)}_${r}`;
        ctx.fillStyle = getGradient(key, x, y, r, intensity);
        ctx.beginPath();
        ctx.arc(x, y, r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    let animationId: number;
    let pulseInterval: number;

    function render(time: number) {
      frameCount++;
      ctx.clearRect(0, 0, w, h);

      // Упрощенный фоновый градиент (только каждый 4-й кадр)
      if (frameCount % 4 === 0) {
        const g = ctx.createLinearGradient(0, 0, 0, h);
        g.addColorStop(0, 'rgba(2,6,23,0.5)');
        g.addColorStop(1, 'rgba(1,2,8,0.7)');
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      // Оптимизированное рисование линий
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        let connections = 0;
        
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          
          if (dist < LINE_DISTANCE) {
            connections++;
            const baseAlpha = (1 - dist / LINE_DISTANCE) * 0.4;
            const pulseEffect = Math.sin(time * 0.002 + a.pulsePhase) * 0.3 + 0.7;
            const alpha = baseAlpha * pulseEffect * a.lineIntensity;
            
            // Основная линия (упрощенная)
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = COLOR_BASE + (alpha * 0.7) + ')';
            ctx.lineWidth = 1;
            
            // Свечение только для ярких линий
            if (alpha > 0.3) {
              ctx.shadowBlur = 6;
              ctx.shadowColor = 'rgba(30,190,255,' + (alpha * 0.4) + ')';
            }
            ctx.stroke();
            ctx.shadowBlur = 0;
            
            // Дополнительная линия только для самых ярких соединений
            if (alpha > 0.5 && frameCount % SKIP_FRAMES === 0) {
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = 'rgba(100,220,255,' + (alpha * 0.3) + ')';
              ctx.lineWidth = 0.3;
              ctx.stroke();
            }
          }
        }
        a.lastConnections = connections;
      }

      // Оптимизированное рисование узлов
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        
        // Увеличенное движение
        n.phase += 0.008 + (n.r * 0.002);
        n.pulsePhase += 0.004;
        
        // Более динамичное движение с волнообразными колебаниями
        const waveX = Math.sin(n.phase) * 0.5;
        const waveY = Math.cos(n.phase * 0.7) * 0.5;
        n.x += n.vx + waveX;
        n.y += n.vy + waveY;
        
        // Случайные изменения направления
        if (Math.random() < 0.002) {
          n.vx += rand(-0.1, 0.1);
          n.vy += rand(-0.1, 0.1);
          // Ограничиваем скорость
          n.vx = Math.max(-1, Math.min(1, n.vx));
          n.vy = Math.max(-1, Math.min(1, n.vy));
        }

        // Границы с отскоком
        if (n.x < -50) n.x = w + 50;
        if (n.x > w + 50) n.x = -50;
        if (n.y < -50) n.y = h + 50;
        if (n.y > h + 50) n.y = -50;

        // Свечение только для активных узлов
        if (n.lastConnections > 2) {
          drawGlow(n.x, n.y, n.r, 0.8);
        }

        // Основная точка
        ctx.beginPath();
        ctx.fillStyle = 'rgba(180,240,255,0.9)';
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();

        // Гало только для крупных узлов
        if (n.r > 2.2) {
          ctx.beginPath();
          ctx.strokeStyle = COLOR_BASE + '0.25)';
          ctx.lineWidth = 0.8;
          ctx.arc(n.x, n.y, n.r + 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      // Упрощенные декоративные элементы (только каждый 4-й кадр)
      if (frameCount % 4 === 0) {
        const t = time * 0.001;
        
        // Одна волна
        ctx.beginPath();
        for (let x = 0; x < w; x += 20) {
          const y = h * 0.1 + Math.sin((x * 0.01) + t) * (h * 0.02);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = 'rgba(60,200,255,0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Редкие сканирующие линии
        if (Math.random() > 0.998) {
          const scanX = Math.random() * w;
          ctx.beginPath();
          ctx.moveTo(scanX, 0);
          ctx.lineTo(scanX, h);
          ctx.strokeStyle = 'rgba(30,190,255,0.03)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
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
      // Очищаем кэш при изменении размера
      gradientCache.clear();
    }

    // Упрощенный pulse effect
    pulseInterval = setInterval(() => {
      const centerX = w * 0.1 + Math.random() * w * 0.8;
      const centerY = h * 0.1 + Math.random() * h * 0.8;
      ctx.save();
      const pulseGrad = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 150);
      pulseGrad.addColorStop(0, 'rgba(40,220,255,0.06)');
      pulseGrad.addColorStop(0.7, 'rgba(30,190,255,0.03)');
      pulseGrad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = pulseGrad;
      ctx.fillRect(0, 0, w, h);
      ctx.restore();
    }, 4000);

    initNodes();
    animationId = requestAnimationFrame(render);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      clearInterval(pulseInterval);
      window.removeEventListener('resize', handleResize);
      gradientCache.clear();
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