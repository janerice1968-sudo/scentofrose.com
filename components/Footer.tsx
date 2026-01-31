
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#020202] pt-40 pb-20 px-6 border-t border-white/5 relative overflow-hidden">
       <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-900/40 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mb-32">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-4 mb-12">
              <span className="text-5xl font-serif font-bold text-red-600 drop-shadow-[0_0_15px_rgba(220,38,38,0.3)]">R</span>
              <div className="flex flex-col leading-none opacity-40">
                <span className="text-[11px] font-bold tracking-[0.5em] uppercase">Scent of Rose</span>
                <span className="text-[8px] font-medium tracking-[0.7em] uppercase mt-2 italic">The Scent Unfolds</span>
              </div>
            </div>
            <p className="text-white/10 max-w-sm mb-16 font-serif italic leading-relaxed text-base">
              "A whisper in the dark, a lingering scent on the skin. Scent of Rose is the ultimate destination for those who seek the extraordinary in the ordinary."
            </p>
            <div className="flex gap-12 opacity-20">
               <span className="text-[9px] font-bold tracking-[0.4em] cursor-pointer hover:text-red-500 hover:opacity-100 transition-all">XT</span>
               <span className="text-[9px] font-bold tracking-[0.4em] cursor-pointer hover:text-red-500 hover:opacity-100 transition-all">IG</span>
               <span className="text-[9px] font-bold tracking-[0.4em] cursor-pointer hover:text-red-500 hover:opacity-100 transition-all">TG</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-12 text-white/50">The Unveiling</h4>
            <ul className="space-y-8 text-[12px] font-medium uppercase tracking-[0.3em] text-white/20">
              <li className="hover:text-red-500 transition-colors cursor-pointer">Live Blooms</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Forbidden Spaces</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Curated Whispers</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Shadow Events</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.4em] mb-12 text-white/50">The Veil</h4>
            <ul className="space-y-8 text-[12px] font-medium uppercase tracking-[0.3em] text-white/20">
              <li className="hover:text-red-500 transition-colors cursor-pointer">Discretion Vault</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Guest Sanctuary</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">The Concierge</li>
              <li className="hover:text-red-500 transition-colors cursor-pointer">Ghost Identity</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12">
          <p className="text-[10px] text-white/10 uppercase tracking-[0.5em] font-bold">
            &copy; 2025 SCENT OF ROSE CURATIONS. SURRENDER TO THE SCENT.
          </p>
          <div className="flex gap-12 items-center opacity-10">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Ethical Expression</span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase">18+ Discretion Required</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
