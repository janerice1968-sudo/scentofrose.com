
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import LiveGrid from './components/LiveGrid.tsx';
import AIFlirtAssistant from './components/AIFlirtAssistant.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div 
      className="min-h-screen selection:bg-red-500/30 font-light text-white"
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
        <section id="about" className="py-40 px-6 relative overflow-hidden bg-red-950/10 backdrop-blur-md border-y border-white/5">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-red-500/50"></div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="group cursor-default">
              <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center mb-12 group-hover:border-red-500/80 transition-all duration-700 group-hover:scale-110 group-hover:bg-red-500/10">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-red-500 transition-colors"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="text-3xl font-serif mb-8 tracking-tighter text-white/90">Shadow Presence</h3>
              <p className="text-[15px] text-white/60 leading-relaxed font-serif italic tracking-wide">"Your identity is a ghost here. We provide the cloak, you provide the desire. Absolute secrecy in every breath."</p>
            </div>
            
            <div className="group cursor-default">
              <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center mb-12 group-hover:border-red-500/80 transition-all duration-700 group-hover:scale-110 group-hover:bg-red-500/10">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-red-500 transition-colors"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.94-8.94 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 className="text-3xl font-serif mb-8 tracking-tighter text-white/90">Pure Intimacy</h3>
              <p className="text-[15px] text-white/60 leading-relaxed font-serif italic tracking-wide">"Beyond the screen lies a pulse. Our curated muses are masters of the slow reveal and the deep connection."</p>
            </div>

            <div className="group cursor-default">
              <div className="w-14 h-14 border border-white/10 rounded-full flex items-center justify-center mb-12 group-hover:border-red-500/80 transition-all duration-700 group-hover:scale-110 group-hover:bg-red-500/10">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/40 group-hover:text-red-500 transition-colors"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-3xl font-serif mb-8 tracking-tighter text-white/90">Fidelity of Flesh</h3>
              <p className="text-[15px] text-white/60 leading-relaxed font-serif italic tracking-wide">"Witness every detail in staggering 4K resolution. So close, you can almost feel the scent of the rose through the glass."</p>
            </div>
          </div>
        </section>

        <LiveGrid />

        {/* The Connection Section - Lighter with white-glass details */}
        <section id="encounters" className="py-40 px-6">
          <div className="max-w-7xl mx-auto bg-white/5 border border-white/10 rounded-sm overflow-hidden flex flex-col md:flex-row items-stretch shadow-[0_50px_100px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            <div className="md:w-1/2 p-20 md:p-32 flex flex-col justify-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.6em] text-red-500 mb-10 italic">The Encounter</div>
              <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.9] tracking-tighter text-white">Reach for the <span className="italic font-light text-red-100">Rose.</span></h2>
              <p className="text-xl text-white/70 mb-16 font-serif italic leading-relaxed">
                "Some connections are written in the stars; ours are written in the shadows. Discover a soul that vibrates with your deepest, unspoken needs."
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                 <a href="https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN" className="px-16 py-6 bg-white text-black font-bold uppercase tracking-[0.3em] text-[11px] rounded-sm hover:bg-red-600 hover:text-white transition-all duration-700 shadow-lg text-center block">Reveal My Match</a>
                 <a href="https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN" className="px-16 py-6 border border-white/20 font-bold uppercase tracking-[0.3em] text-[11px] rounded-sm hover:bg-white/10 transition-all text-white text-center block">The Invitation</a>
              </div>
            </div>
            <div className="md:w-1/2 min-h-[600px] relative overflow-hidden">
              <img 
                src="https://i.ibb.co/27wGBHb6/950758b0-0d4e-4c11-b653-a54f03c53e0a.png" 
                alt="Shadow Encounter" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-80 hover:scale-125 transition-transform duration-[30s] ease-linear"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-40 cursor-pointer" onClick={() => window.location.href = 'https://www.baidu.com'}>
                 <span className="text-[8px] tracking-[0.8em] font-bold uppercase text-white">Scentofrose</span>
                 <span className="text-[6px] tracking-[0.4em] uppercase mt-2 text-white/80">vividly private</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enticing Closing Quote - Lighter text */}
        <section className="py-56 px-6 text-center italic font-serif text-4xl md:text-6xl text-white/40 leading-tight">
          <div className="max-w-5xl mx-auto group cursor-pointer" onClick={() => window.location.href = 'https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN'}>
            "Will you stay in the light where it's safe, <br /> 
            or <span className="text-white/70 group-hover:text-red-400 transition-colors duration-1000">surrender to the fragrance</span> of the dark?"
            <div className="mt-16 not-italic font-sans text-[11px] uppercase tracking-[0.8em] font-bold opacity-30 group-hover:opacity-60 transition-opacity">— Rose</div>
          </div>
        </section>
      </main>

      <Footer />
      <AIFlirtAssistant />
    </div>
  );
};

export default App;
