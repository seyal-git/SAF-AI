
import React, { useState, useEffect, useRef } from 'react';
import { THREATS } from '../constants';

const ThreatCarousel: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(THREATS.length); // Start at the first item of the middle set
  const [isTransitioning, setIsTransitioning] = useState(true);
  const trackRef = useRef<HTMLDivElement>(null);

  // Triple the items for a seamless loop
  const tripledThreats = [...THREATS, ...THREATS, ...THREATS];

  const cardWidth = 400; // matching md:min-w-[400px]
  const gap = 24; // matching gap-6 (1.5rem = 24px)
  const itemTotalWidth = cardWidth + gap;

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  // Handle the "jump" for infinite loop effect
  useEffect(() => {
    if (currentIndex === THREATS.length * 2) {
      // If we passed the last item of the middle set
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(THREATS.length);
      }, 500); // match transition duration
      return () => clearTimeout(timer);
    }
    if (currentIndex === THREATS.length - 1) {
      // If we went before the first item of the middle set
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(THREATS.length * 2 - 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  const handleCardClick = (id: number) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <section className="py-24 bg-[#0B0F19] overflow-hidden relative">
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        
        .card-flip-inner {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }
        
        .card-front, .card-back {
          backface-visibility: hidden;
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
        }
        
        .card-back {
          transform: rotateY(180deg);
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
          כאוס ה-AI הארגוני: <br />
          <span className="text-[#FF8C00]">ניטור ובקרה אינסופית.</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-4xl mx-auto font-light">
          האיומים נמצאים שם תמיד. השתמשו בחצים כדי לדפדף ולראות איך Safium עוצרת כל איום בזמן אמת.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto group">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30">
          <button 
            onClick={handlePrev}
            className="bg-[#1A2333]/80 hover:bg-[#FF8C00] text-white p-4 rounded-full border border-slate-700 transition-all shadow-2xl backdrop-blur-sm group/btn"
          >
            <svg className="w-6 h-6 transform rotate-180 group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30">
          <button 
            onClick={handleNext}
            className="bg-[#1A2333]/80 hover:bg-[#FF8C00] text-white p-4 rounded-full border border-slate-700 transition-all shadow-2xl backdrop-blur-sm group/btn"
          >
            <svg className="w-6 h-6 group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Gradient overlays for smooth fading at the edges */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#0B0F19] via-[#0B0F19]/60 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-[#0B0F19] via-[#0B0F19]/60 to-transparent z-10 pointer-events-none"></div>

        {/* Carousel Container */}
        <div className="overflow-hidden px-4 md:px-0">
          <div 
            ref={trackRef}
            className="flex gap-6 py-10"
            style={{
              transform: `translateX(calc(50% - ${itemTotalWidth / 2}px - ${currentIndex * itemTotalWidth}px))`,
              transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
              width: 'max-content'
            }}
          >
            {tripledThreats.map((threat, index) => {
              const isFlipped = activeId === threat.id;
              const isCenter = index === currentIndex;
              
              return (
                <div 
                  key={`${threat.id}-${index}`} 
                  className={`min-w-[300px] md:min-w-[400px] h-[350px] perspective-1000 transition-all duration-500 ${isCenter ? 'scale-105 opacity-100 z-20' : 'scale-95 opacity-70 z-10'}`}
                  onClick={() => handleCardClick(threat.id)}
                >
                  <div className={`relative w-full h-full card-flip-inner shadow-2xl cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}>
                    
                    {/* Front: Threat */}
                    <div className="card-front bg-[#1A2333] border-2 border-slate-800 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:border-[#FF8C00]/50 transition-colors">
                      <div className="text-7xl mb-6 drop-shadow-[0_0_20px_rgba(255,140,0,0.2)] transition-transform">
                        {threat.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{threat.problem}</h3>
                      <div className="mt-4 px-6 py-2 rounded-full border border-slate-700 text-sm text-slate-400 font-medium">
                        לחץ לפתרון SAF.AI
                      </div>
                      <div className="absolute bottom-6 left-6 text-slate-800 font-mono text-2xl select-none opacity-40">
                        #{String(threat.id).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Back: Solution */}
                    <div className="card-back bg-gradient-to-br from-[#FF8C00] to-[#e67e00] rounded-3xl p-8 flex flex-col justify-center items-center text-center text-white overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.15)] border-2 border-white/10">
                      <div className="bg-white/20 p-5 rounded-full mb-6 backdrop-blur-md shadow-xl">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">הפתרון של Safium</h3>
                      <p className="text-xl font-bold leading-relaxed px-4">
                        {threat.solution}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 gap-3 items-center text-slate-500 text-sm font-medium">
        <div className="flex gap-1.5">
          {THREATS.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${ (currentIndex % THREATS.length) === i ? 'w-8 bg-[#FF8C00]' : 'w-2 bg-slate-800' }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreatCarousel;
