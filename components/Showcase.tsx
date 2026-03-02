
import React, { useState } from 'react';
import { VIDEOS } from '../constants';
import { VideoItem } from '../types';

const Showcase: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Video Showcase</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {VIDEOS.map((video) => (
            <div 
              key={video.id} 
              className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-xl"
              onClick={() => setActiveVideo(video)}
            >
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                <div className="w-16 h-16 bg-[#FF8C00] rounded-full flex items-center justify-center text-white shadow-2xl scale-0 group-hover:scale-100 transition-transform">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-xl font-bold">{video.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-[#FF8C00] flex items-center gap-2 font-bold"
              onClick={() => setActiveVideo(null)}
            >
              <span>סגור</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-black rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <video 
                src={activeVideo.videoUrl} 
                controls 
                autoPlay 
                className="w-full"
              />
              <div className="p-6 bg-[#1A2333]">
                <h3 className="text-2xl font-bold text-[#FF8C00]">{activeVideo.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Showcase;
