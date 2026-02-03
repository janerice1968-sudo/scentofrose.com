import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import LiveGrid from './components/LiveGrid.tsx';
import AIFlirtAssistant from './components/AIFlirtAssistant.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const trackingLink = "https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN";

  return (
    <div 
      className="min-h-screen font-light text-white selection:bg-red-500/30"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://i.ibb.co/TxWrBtgc/c0449d6a-e83c-44f7-b398-8e5055b2837c.png')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundColor: '#110a0a' // Slightly warmer base color
      }}
    >
      <Header />
      
      <main className="relative z-10">
        <Hero />
        
        {/* The Essence Section - Lightened with Red-tinted glass */}
        <section id="about" className="relative overflow-hidden border-y border-white/5 bg-red-950/10 py-40 px-6 backdrop-blur-md">
           <div className="absolute top-0 left-1/2 h-32 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-red-500/50"></div>
          
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 md:grid-cols-3">
            <div className="group cursor-default">
              <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all duration-700 group-hover:scale-110 group-hover:border-red-500/80 group-hover:bg-red-500/10">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 transition-colors group-hover:text-red-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="mb-8 font-serif text-3xl tracking-tighter text-white/90">Shadow Presence</h3>
              <p className="font-serif text-[15px] italic leading-relaxed tracking-wide text-white/60">"Your identity is a ghost here. We provide the cloak, you provide the desire. Absolute secrecy in every breath."</p>
            </div>
            
            <div className="group cursor-default">
              <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all duration-700 group-hover:scale-110 group-hover:border-red-500/80 group-hover:bg-red-500/10">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 transition-colors group-hover:text-red-500"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.94-8.94 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 className="mb-8 font-serif text-3xl tracking-tighter text-white/90">Pure Intimacy</h3>
              <p className="font-serif text-[15px] italic leading-relaxed tracking-wide text-white/60">"Beyond the screen lies a pulse. Our curated muses are masters of the slow reveal and the deep connection."</p>
            </div>

            <div className="group cursor-default">
              <div className="mb-12 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 transition-all duration-700 group-hover:scale-110 group-hover:border-red-500/80 group-hover:bg-red-500/10">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 transition-colors group-hover:text-red-500"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="mb-8 font-serif text-3xl tracking-tighter text-white/90">Fidelity of Flesh</h3>
              <p className="font-serif text-[15px] italic leading-relaxed tracking-wide text-white/60">"Witness every detail in staggering 4K resolution. So close, you can almost feel the scent of the rose through the glass."</p>
            </div>
          </div>
        </section>

        <LiveGrid />

        {/* The Connection Section - Lighter with white-glass details */}
        <section id="encounters" className="py-40 px-6">
          <div className="mx-auto flex max-w-7xl flex-col items-stretch overflow-hidden rounded-sm border border-white/10 bg-white/5 shadow-[0_50px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl md:flex-row">
            <div className="flex flex-col justify-center p-20 md:w-1/2 md:p-32">
              <div className="mb-10 text-[10px] font-bold italic uppercase tracking-[0.6em] text-red-500">The Encounter</div>
              <h2 className="mb-12 font-serif text-6xl leading-[0.9] tracking-tighter text-white md:text-8xl">Reach for the <span className="font-light italic text-red-100">Rose.</span></h2>
              <p className="mb-16 font-serif text-xl italic leading-relaxed text-white/70">
                "Some connections are written in the stars; ours are written in the shadows. Discover a soul that vibrates with your deepest, unspoken needs."
              </p>
              <div className="flex flex-col gap-8 sm:flex-row">
                 <a href={trackingLink} className="block rounded-sm bg-white px-16 py-6 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-black shadow-lg transition-all duration-700 hover:bg-red-600 hover:text-white">Reveal My Match</a>
                 <a href={trackingLink} className="block rounded-sm border border-white/20 px-16 py-6 text-center text-[11px] font-bold uppercase tracking-[0.3em] text-white transition-all hover:bg-white/10">The Invitation</a>
              </div>
            </div>
            <div className="relative min-h-[600px] overflow-hidden md:w-1/2">
              <img 
                src="https://i.ibb.co/27wGBHb6/950758b0-0d4e-4c11-b653-a54f03c53e0a.png" 
                alt="Shadow Encounter" 
                className="absolute inset-0 h-full w-full object-cover grayscale opacity-80 transition-transform duration-[30s] ease-linear hover:scale-125"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 right-10 flex cursor-pointer flex-col items-end opacity-40" onClick={() => window.location.href = trackingLink}>
                 <span className="text-[8px] font-bold uppercase tracking-[0.8em] text-white">Scentofrose</span>
                 <span className="mt-2 text-[6px] uppercase tracking-[0.4em] text-white/80">vividly private</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enticing Closing Quote - Lighter text */}
        <section className="py-56 px-6 text-center font-serif text-4xl italic leading-tight text-white/40 md:text-6xl">
          <div className="group mx-auto max-w-5xl cursor-pointer" onClick={() => window.location.href = trackingLink}>
            "Will you stay in the light where it's safe, <br /> 
            or <span className="text-white/70 transition-colors duration-1000 group-hover:text-red-400">surrender to the fragrance</span> of the dark?"
            <div className="mt-16 font-sans text-[11px] font-bold not-italic uppercase tracking-[0.8em] opacity-30 transition-opacity group-hover:opacity-60">— Rose</div>
          </div>
        </section>
      </main>

      <Footer />
      <AIFlirtAssistant />
    </div>
  );
};

export default App;