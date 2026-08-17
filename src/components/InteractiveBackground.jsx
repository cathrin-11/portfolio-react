import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates with spring inertia
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      vx: 0,
      vy: 0,
      radius: 180,
      active: false,
      down: false
    };

    // Expanding Shockwave Ripple Array
    let shockwaves = [];

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handleMouseDown = (e) => {
      mouse.down = true;
      shockwaves.push({
        x: e.clientX,
        y: e.clientY,
        radius: 5,
        maxRadius: 260,
        alpha: 0.65,
        speed: 7
      });
    };

    const handleMouseUp = () => {
      mouse.down = false;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Particle class with 3D depth and spring physics
    let particles = [];

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.z = Math.random() * 2 + 0.5; // Depth layer 0.5 to 2.5
        this.baseSize = Math.random() * 1.6 + 0.6;
        this.size = this.baseSize * this.z;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.4 * this.z;
        this.vy = (Math.random() - 0.5) * 0.4 * this.z;
        this.density = Math.random() * 25 + 15;
        this.baseAlpha = (Math.random() * 0.4 + 0.2) * (this.z / 2);
        this.alpha = this.baseAlpha;
        this.glow = this.z > 1.8;
      }

      update() {
        // Natural ambient floating drift
        this.x += this.vx;
        this.y += this.vy;

        // Wrap boundaries smoothly
        if (this.x < -20) this.x = width + 20;
        if (this.x > width + 20) this.x = -20;
        if (this.y < -20) this.y = height + 20;
        if (this.y > height + 20) this.y = -20;

        // Interactive cursor magnetic repulsion / excitation
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (1 - distance / mouse.radius);
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const directionX = forceDirectionX * force * this.density * 0.7;
            const directionY = forceDirectionY * force * this.density * 0.7;

            this.x -= directionX;
            this.y -= directionY;
            this.alpha = Math.min(this.baseAlpha * 2.2, 0.95);
          } else {
            this.alpha += (this.baseAlpha - this.alpha) * 0.05;
          }
        }

        // Shockwave displacement physics
        for (let i = 0; i < shockwaves.length; i++) {
          const sw = shockwaves[i];
          const sdx = this.x - sw.x;
          const sdy = this.y - sw.y;
          const sdist = Math.sqrt(sdx * sdx + sdy * sdy);

          if (Math.abs(sdist - sw.radius) < 35 && sdist > 0) {
            const push = (1 - Math.abs(sdist - sw.radius) / 35) * 8 * sw.alpha;
            this.x += (sdx / sdist) * push;
            this.y += (sdy / sdist) * push;
            this.alpha = Math.min(this.alpha + 0.3, 1);
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        if (this.glow) {
          // Radiant Gold Halo
          ctx.fillStyle = `rgba(255, 226, 154, ${this.alpha})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        } else if (this.z > 1.2) {
          ctx.fillStyle = `rgba(212, 175, 55, ${this.alpha})`;
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = `rgba(245, 240, 235, ${this.alpha * 0.6})`;
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const initParticles = () => {
      particles = [];
      const count = Math.min(Math.floor((width * height) / 16000), 85);
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    // Render loop
    const render = () => {
      // Smooth cursor inertia dampening
      mouse.vx = (mouse.targetX - mouse.x) * 0.08;
      mouse.vy = (mouse.targetY - mouse.y) * 0.08;
      mouse.x += mouse.vx;
      mouse.y += mouse.vy;

      ctx.clearRect(0, 0, width, height);

      // Interactive Gold Cursor Aura Spotlight
      if (mouse.active) {
        const auraGrad = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          360
        );
        auraGrad.addColorStop(0, 'rgba(212, 175, 55, 0.065)');
        auraGrad.addColorStop(0.45, 'rgba(246, 211, 101, 0.025)');
        auraGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = auraGrad;
        ctx.fillRect(0, 0, width, height);
      }

      // Draw and update expanding click shockwaves
      for (let i = shockwaves.length - 1; i >= 0; i--) {
        const sw = shockwaves[i];
        sw.radius += sw.speed;
        sw.alpha *= 0.94;

        if (sw.radius > sw.maxRadius || sw.alpha < 0.02) {
          shockwaves.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 226, 154, ${sw.alpha * 0.45})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Inner glowing ring
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, Math.max(0, sw.radius - 8), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(212, 175, 55, ${sw.alpha * 0.25})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Draw constellation proximity links
      const maxLinkDist = 140;
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLinkDist) {
            const linkAlpha = (1 - dist / maxLinkDist) * 0.22 * Math.min(particles[i].z, particles[j].z);
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${linkAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connect particle to active cursor
        if (mouse.active) {
          const mdx = particles[i].x - mouse.x;
          const mdy = particles[i].y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < 155) {
            const mouseLinkAlpha = (1 - mdist / 155) * 0.32;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 226, 154, ${mouseLinkAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
};

export default InteractiveBackground;
