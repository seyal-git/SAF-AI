
import React from 'react';
import { CLIENTS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0F19] border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-slate-500 mb-12 uppercase tracking-widest">
          הסטנדרט של הגופים המובילים בישראל
        </h2>
        
        <div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center">
          {CLIENTS.map((client, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 group transition-transform hover:scale-110">
              <span className="text-5xl filter-none drop-shadow-lg" style={{ color: client.color }}>
                {client.logo}
              </span>
              <span className="font-bold text-slate-200">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
