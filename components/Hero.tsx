
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Evocative Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548261315-05634d0b1f2b?auto=format&fit=crop&q=80&w=1920" 
          alt="Dark Rose Sanctuary" 
          className="w-full h-full object-cover opacity-50 hover:scale-110 transition-transform duration-[20s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-red-950/20 backdrop-blur-[1px]"></div>
        
        {/* Glowing Red Bloom Accents - Brighter */}
        <div className="absolute top-[20%] right-[10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px] animate-pulse [animation-delay:4s]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-block mb-8 px-6 py-2 glass rounded-full text-[9px] font-bold uppercase tracking-[0.4em] text-red-300 border border-red-500/30 backdrop-blur-xl bg-white/5">
          Follow the Fragrance of Forbidden Desires
        </div>
        
        <h1 className="text-6xl md:text-9xl font-serif mb-10 leading-[0.9] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          Taste the <span className="italic font-light text-white">Scent</span> <br /> 
          Unveil the <span className="text-red-500 font-bold drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">Rose.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-white/70 mb-16 font-serif italic leading-relaxed tracking-wide drop-shadow-md">
          "A sanctuary where sophistication is shed, and only the raw perfume of true connection remains."
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
          <a href="https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN" className="w-full sm:w-auto px-16 py-6 bg-red-600 text-white font-bold uppercase tracking-[0.3em] text-[12px] rounded-sm hover:bg-red-500 transition-all shadow-[0_0_50px_rgba(220,38,38,0.4)] hover:shadow-[0_0_70px_rgba(220,38,38,0.6)] active:scale-95 group relative overflow-hidden text-center block">
            <span className="relative z-10">Uncover the Hidden</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </a>
          <a href="https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN" className="w-full sm:w-auto px-16 py-6 glass border border-white/20 text-white font-bold uppercase tracking-[0.3em] text-[12px] rounded-sm hover:bg-white hover:text-black transition-all active:scale-95 bg-white/5 text-center block">
            Step Into the Bloom
          </a>
        </div>

        <div className="mt-32 flex flex-wrap justify-center gap-16 md:gap-24 opacity-60 hover:opacity-100 transition-opacity">
          <div className="text-center group cursor-pointer" onClick={() => window.location.href = 'https://www.baidu.com'}>
            <div className="text-4xl font-serif font-light mb-1 group-hover:text-red-400 transition-colors text-white">Infinite</div>
            <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/50 group-hover:text-white/80 transition-colors">Shadows</div>
          </div>
          <div className="text-center group cursor-pointer" onClick={() => window.location.href = 'https://www.baidu.com'}>
            <div className="text-4xl font-serif font-light mb-1 group-hover:text-red-400 transition-colors text-white">Raw</div>
            <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/50 group-hover:text-white/80 transition-colors">Visuals</div>
          </div>
          <div className="text-center group cursor-pointer" onClick={() => window.location.href = 'https://www.baidu.com'}>
            <div className="text-4xl font-serif font-light mb-1 group-hover:text-red-400 transition-colors text-white">Pure</div>
            <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/50 group-hover:text-white/80 transition-colors">Secrecy</div>
          </div>
          <div className="text-center group cursor-pointer" onClick={() => window.location.href = 'https://www.baidu.com'}>
            <div className="text-4xl font-serif font-light mb-1 group-hover:text-red-400 transition-colors text-white">Vivid</div>
            <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/50 group-hover:text-white/80 transition-colors">Encounters</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
