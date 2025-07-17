
'use client';

import React, { useRef, useEffect } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[];
    let animationFrameId: number;

    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    };

    class Particle {
      x: number;
      y: number;
      z: number;
      xProjected: number;
      yProjected: number;
      scaleProjected: number;
      color: string;
      
      constructor() {
        this.x = (Math.random() - 0.5) * canvas.width;
        this.y = (Math.random() - 0.5) * canvas.height;
        this.z = Math.random() * canvas.width;
        this.xProjected = 0;
        this.yProjected = 0;
        this.scaleProjected = 0;
        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
        this.color = Math.random() > 0.5 ? `hsl(${primaryColor})` : `hsl(${accentColor})`;
      }

      project() {
        const perspective = canvas.width * 0.8;
        this.scaleProjected = perspective / (perspective + this.z);
        this.xProjected = (this.x * this.scaleProjected) + canvas.width / 2;
        this.yProjected = (this.y * this.scaleProjected) + canvas.height / 2;
      }

      draw() {
        this.project();
        if(this.xProjected < 0 || this.xProjected > canvas.width || this.yProjected < 0 || this.yProjected > canvas.height) {
            return;
        }
        ctx!.beginPath();
        ctx!.arc(this.xProjected, this.yProjected, this.scaleProjected * 2, 0, Math.PI * 2);
        ctx!.fillStyle = this.color;
        ctx!.fill();
      }
    }

    function init() {
      particles = [];
      const particleCount = Math.floor(window.innerWidth / 2);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles) {
        particle.z -= 1.5;
        if (particle.z < 1) {
          particle.z = canvas.width;
          particle.x = (Math.random() - 0.5) * canvas.width;
          particle.y = (Math.random() - 0.5) * canvas.height;
        }
        particle.draw();
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-20" />;
};

export default ParticleBackground;
