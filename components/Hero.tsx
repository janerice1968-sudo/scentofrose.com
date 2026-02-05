import React from 'react';

const Hero: React.FC = () => {
  const trackingLink = "https://t.acrsmartcam.com/403638/7335?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN";

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Evocative Atmospheric Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1548261315-05634d0b1f2b?auto=format&fit=crop&q=80&w=1920" 
          alt="Dark Rose Sanctuary" 
          className="h-full w-full object-cover opacity-50 transition-transform duration-[20s] ease-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-red-950/20 backdrop-blur-[1px]"></div>
        
        {/* Glowing Red Bloom Accents - Brighter */}
        <div className="absolute right-[10%] top-[20%] h-[600px] w-[600px] animate-pulse rounded-full bg-red-600/10 blur-[150px]"></div>
        <div className="absolute bottom-[10%] left-[5%] h-[400px] w-[400px] animate-pulse rounded-full bg-red-500/10 blur-[120px] [animation-delay:4s]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <div className="glass mb-8 inline-block rounded-full border border-red-500/30 bg-white/5 px-6 py-2 text-[9px] font-bold uppercase tracking-[0.4em] text-red-300 backdrop-blur-xl">
          Follow the Fragrance of Forbidden Desires
        </div>
        
        <h1 className="mb-10 font-serif text-6xl leading-[0.9] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] md:text-9xl">
          Taste the <span className="font-light italic text-white">Scent</span> <br /> 
          Unveil the <span className="font-bold text-red-500 drop-shadow-[0_0_40px_rgba(220,38,38,0.6)]">Rose.</span>
        </h1>
        
        <p className="mx-auto mb-16 max-w-2xl font-serif text-lg italic tracking-wide text-white/70 drop-shadow-md md:text-2xl leading-relaxed">
          "A sanctuary where sophistication is shed, and only the raw perfume of true connection remains."
        </p>
        
        <div className="flex flex-col items-center justify-center gap-10 sm:flex-row">
          <a href={trackingLink} className="group relative block w-full overflow-hidden rounded-sm bg-red-600 px-16 py-6 text-center text-[12px] font-bold uppercase tracking-[0.3em] text-white shadow-[0_0_50px_rgba(220,38,38,0.4)] transition-all active:scale-95 hover:bg-red-500 hover:shadow-[0_0_70px_rgba(220,38,38,0.6)] sm:w-auto">
            <span className="relative z-10">Uncover the Hidden</span>
            <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0"></div>
          </a>
          <a href={trackingLink} className="glass block w-full border border-white/20 bg-white/5 px-16 py-6 text-center text-[12px] font-bold uppercase tracking-[0.3em] text-white transition-all active:scale-95 hover:bg-white hover:text-black sm:w-auto">
            Step Into the Bloom
          </a>
        </div>

        <div className="mt-32 flex flex-wrap justify-center gap-16 opacity-60 transition-opacity hover:opacity-100 md:gap-24">
          <div className="group cursor-pointer text-center" onClick={() => window.location.href = trackingLink}>
            <div className="mb-1 font-serif text-4xl font-light text-white transition-colors group-hover:text-red-400">Infinite</div>
            <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/50 transition-colors group-hover:text-white/80">Shadows</div>
          </div>
          <div className="group cursor-pointer text-center" onClick={() => window.location.href = trackingLink}>
            <div className="mb-1 font-serif text-4xl font-light text-white transition-colors group-hover:text-red-400">Raw</div>
            <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/50 transition-colors group-hover:text-white/80">Visuals</div>
          </div>
          <div className="group cursor-pointer text-center" onClick={() => window.location.href = trackingLink}>
            <div className="mb-1 font-serif text-4xl font-light text-white transition-colors group-hover:text-red-400">Pure</div>
            <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/50 transition-colors group-hover:text-white/80">Secrecy</div>
          </div>
          <div className="group cursor-pointer text-center" onClick={() => window.location.href = trackingLink}>
            <div className="mb-1 font-serif text-4xl font-light text-white transition-colors group-hover:text-red-400">Vivid</div>
            <div className="text-[8px] font-bold uppercase tracking-[0.4em] text-white/50 transition-colors group-hover:text-white/80">Encounters</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;