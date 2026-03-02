
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-[#0B0F19] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="text-2xl font-black flex items-center gap-2">
            <span className="bg-[#FF8C00] px-2 py-1 rounded text-white italic">SAF</span>
            <span>.AI</span>
          </div>
          <p className="text-slate-500 text-sm">Managed by Cambium Technologies Ltd.</p>
        </div>

        <div className="flex gap-8 text-slate-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Compliance</a>
        </div>

        <div className="text-slate-600 text-xs">
          © {new Date().getFullYear()} SAF.AI Safium. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
