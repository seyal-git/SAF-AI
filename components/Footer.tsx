
import React from 'react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#0B0F19] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="חזרה לראש העמוד"
            className="cursor-pointer rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8C00]"
          >
            <img
              src="/saf-ai-logo.svg"
              alt="SAF.AI by Cambium"
              className="h-12 w-auto rounded-md"
            />
          </button>
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
