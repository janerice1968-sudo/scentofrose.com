import React from 'react';

const Header: React.FC = () => {
  const trackingLink = "https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 px-6 py-5 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 group cursor-pointer" onClick={() => window.location.href = trackingLink}>
          <div className="w-10 h-10 rounded-full border border-red-500/30 flex items-center justify-center bg-gradient-to-br from-red-500/10 to-transparent group-hover:border-red-500 transition-all duration-700 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
            <span className="text-xl font-serif font-bold text-red-500">R</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-[0.2em] uppercase group-hover:text-red-400 transition-colors">Scent of Rose</span>
            <span className="text-[10px] font-medium tracking-[0.4em] uppercase mt-1 opacity-40">Scentofrose.com</span>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em] opacity-50">
          <a href={trackingLink} className="relative group hover:text-red-400 hover:opacity-100 transition-all">
            The Petals
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href={trackingLink} className="relative group hover:text-red-400 hover:opacity-100 transition-all">
            Whispers
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href={trackingLink} className="relative group hover:text-red-400 hover:opacity-100 transition-all">
            The Bloom
            <span className="absolute -bottom-1 left-0 h-px w-0 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="flex items-center gap-8">
          <button onClick={() => window.location.href = trackingLink} className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-50 hover:opacity-100 transition-opacity">Unveil</button>
          <a href={trackingLink} className="inline-block rounded-sm border border-transparent bg-white px-10 py-3 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-black shadow-xl transition-all duration-500 hover:border-red-400 hover:bg-red-600 hover:text-white">
            Surrender Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;