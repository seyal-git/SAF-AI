
import React, { useEffect, useRef } from 'react';

interface HeroProps {
  onHowItWorksClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onHowItWorksClick }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: { x: number; y: number; vx: number; vy: number; size: number }[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < 60; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 140, 0, 0.4)';
      ctx.strokeStyle = 'rgba(255, 140, 0, 0.1)';
      
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    init();
    draw();

    const handleResize = () => init();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-28 lg:pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Right Column: Text Content */}
        <div className="lg:col-span-7 text-right">
          <div className="mb-6 flex justify-start">
            <div className="bg-[#FF8C00] text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,140,0,0.4)]">
              Enterprise Grade AI Gateway
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-white">
            לנהל את ה-AI בארגון: <br />
            <span className="text-[#FF8C00]">מאובדן שליטה לחיסכון ובקרה</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-12 leading-relaxed font-light">
            Gateway מאובטח המאחד את כל מודלי השפה (LLMs) תחת ממשק ניהול אחד. 
            שליטה בתקציב, אבטחה מחמירה וגמישות טכנולוגית ללא פשרות.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-start">
            <button 
              onClick={() => {
                 const contactSection = document.getElementById('contact-section');
                 contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-[#FF8C00] hover:bg-[#e67e00] text-white font-bold py-4 px-8 rounded-xl transition-all orange-glow transform hover:scale-105"
            >
              תיאום Demo טכני
            </button>
            <button 
              onClick={onHowItWorksClick}
              className="bg-transparent border-2 border-slate-700 hover:border-[#FF8C00] text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105"
            >
              איך זה עובד
            </button>
          </div>
        </div>

        {/* Left Column: Architecture Diagram */}
        <div className="lg:col-span-5 relative flex items-center justify-center min-h-[500px]">
          <div className="relative w-full aspect-square max-w-[500px]">
            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="bg-[#FF8C00] text-white px-8 py-4 rounded-full font-black text-xl shadow-[0_0_50px_rgba(255,140,0,0.5)] border-2 border-white/20 whitespace-nowrap animate-pulse">
                SAF.AI GATEWAY
              </div>
              
              {/* Internal Policies */}
              <div className="mt-4 flex flex-col items-center gap-1">
                <div className="text-[10px] text-slate-400 font-bold tracking-tighter uppercase opacity-80">Agent Policies</div>
                <div className="text-[10px] text-slate-400 font-bold tracking-tighter uppercase opacity-80">Content Safety</div>
                <div className="text-[10px] text-slate-400 font-bold tracking-tighter uppercase opacity-80">Token Control</div>
                <div className="text-[8px] text-slate-500 italic mt-1">much more & ...</div>
              </div>
            </div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 400 400">
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF8C00" stopOpacity="0" />
                  <stop offset="50%" stopColor="#FF8C00" stopOpacity="1" />
                  <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* Paths from center to nodes */}
              <path d="M200 200 L50 100" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
              <path d="M200 200 L50 200" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
              <path d="M200 200 L50 300" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
              <path d="M200 200 L350 100" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
              <path d="M200 200 L350 200" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
              <path d="M200 200 L350 300" stroke="url(#lineGrad)" strokeWidth="1" fill="none" />
            </svg>

            {/* Nodes Left */}
            <div className="absolute top-[15%] left-0 flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-[#1A2333] border border-slate-700 rounded-xl flex items-center justify-center text-[#FF8C00] shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">Customer Assistants</span>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 left-[-10%] flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-[#1A2333] border border-slate-700 rounded-xl flex items-center justify-center text-[#FF8C00] shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">Conversational Agents</span>
            </div>

            <div className="absolute bottom-[15%] left-0 flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-[#1A2333] border border-slate-700 rounded-xl flex items-center justify-center text-[#FF8C00] shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">Multi Agent Systems</span>
            </div>

            {/* Nodes Right */}
            <div className="absolute top-[15%] right-0 flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-[#1A2333] border border-slate-700 rounded-xl flex items-center justify-center text-[#FF8C00] shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">Data & Vector Stores</span>
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-[#1A2333] border border-slate-700 rounded-xl flex items-center justify-center text-[#FF8C00] shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">AI Models & Services</span>
            </div>

            <div className="absolute bottom-[15%] right-0 flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 bg-[#1A2333] border border-slate-700 rounded-xl flex items-center justify-center text-[#FF8C00] shadow-lg group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </div>
              <span className="text-[10px] font-bold text-slate-400 whitespace-nowrap">Tools & Functions</span>
            </div>

          </div>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
