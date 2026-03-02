
import React from 'react';
import { CLIENTS } from '../constants';

const SocialProof: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0F19] border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-center text-slate-500 mb-12 uppercase tracking-widest">
          הסטנדרט של הגופים המובילים בישראל
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-10 items-start">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="group flex flex-col items-center gap-3 transition-transform hover:scale-[1.03]"
            >
              <div className="w-[230px] h-[120px] md:w-[250px] md:h-[130px] bg-white rounded-xl border border-slate-700/40 shadow-xl p-3 flex items-center justify-center">
                <img
                  src={client.logoSrc}
                  alt={client.logoAlt}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="font-bold text-slate-200 text-sm md:text-base text-center">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
