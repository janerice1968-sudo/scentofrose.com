
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import LiveGrid from './components/LiveGrid.tsx';
import AIFlirtAssistant from './components/AIFlirtAssistant.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-red-500/30 font-light bg-black">
      <Header />
      
      <main>
        <Hero />
        
        {/* The Essence Section */}
        <section id="about" className="py-40 px-6 relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent to-red-500/30"></div>
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20">
            <div className="group cursor-default">
              <div className="w-12 h-12 border border-white/5 rounded-full flex items-center justify-center mb-12 group-hover:border-red-500/50 transition-all duration-700 group-hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 group-hover:text-red-500 transition-colors"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h3 className="text-3xl font-serif mb-8 tracking-tighter">Shadow Presence</h3>
              <p className="text-[15px] text-white/30 leading-relaxed font-serif italic tracking-wide">"Your identity is a ghost here. We provide the cloak, you provide the desire. Absolute secrecy in every breath."</p>
            </div>
            
            <div className="group cursor-default">
              <div className="w-12 h-12 border border-white/5 rounded-full flex items-center justify-center mb-12 group-hover:border-red-500/50 transition-all duration-700 group-hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 group-hover:text-red-500 transition-colors"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.94-8.94 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
              </div>
              <h3 className="text-3xl font-serif mb-8 tracking-tighter">Pure Intimacy</h3>
              <p className="text-[15px] text-white/30 leading-relaxed font-serif italic tracking-wide">"Beyond the screen lies a pulse. Our curated muses are masters of the slow reveal and the deep connection."</p>
            </div>

            <div className="group cursor-default">
              <div className="w-12 h-12 border border-white/5 rounded-full flex items-center justify-center mb-12 group-hover:border-red-500/50 transition-all duration-700 group-hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/20 group-hover:text-red-500 transition-colors"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              </div>
              <h3 className="text-3xl font-serif mb-8 tracking-tighter">Fidelity of Flesh</h3>
              <p className="text-[15px] text-white/30 leading-relaxed font-serif italic tracking-wide">"Witness every detail in staggering 4K resolution. So close, you can almost feel the scent of the rose through the glass."</p>
            </div>
          </div>
        </section>

        <LiveGrid />

        {/* The Connection Section */}
        <section id="encounters" className="py-40 px-6">
          <div className="max-w-7xl mx-auto bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden flex flex-col md:flex-row items-stretch shadow-[0_50px_100px_rgba(0,0,0,0.9)]">
            <div className="md:w-1/2 p-20 md:p-32 flex flex-col justify-center">
              <div className="text-[10px] font-bold uppercase tracking-[0.6em] text-red-600 mb-10 italic">The Encounter</div>
              <h2 className="text-6xl md:text-8xl font-serif mb-12 leading-[0.9] tracking-tighter">Reach for the <span className="italic font-light text-white/90">Rose.</span></h2>
              <p className="text-xl text-white/30 mb-16 font-serif italic leading-relaxed">
                "Some connections are written in the stars; ours are written in the shadows. Discover a soul that vibrates with your deepest, unspoken needs."
              </p>
              <div className="flex flex-col sm:flex-row gap-8">
                 <button className="px-16 py-6 bg-white text-black font-bold uppercase tracking-[0.3em] text-[11px] rounded-sm hover:bg-red-600 hover:text-white transition-all duration-700">Reveal My Match</button>
                 <button className="px-16 py-6 border border-white/10 font-bold uppercase tracking-[0.3em] text-[11px] rounded-sm hover:bg-white/5 transition-all">The Invitation</button>
              </div>
            </div>
            <div className="md:w-1/2 min-h-[600px] relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1200" 
                alt="Shadow Encounter" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 hover:scale-125 transition-transform duration-[30s] ease-linear"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
              <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-20">
                 <span className="text-[8px] tracking-[0.8em] font-bold uppercase">Scentofrose</span>
                 <span className="text-[6px] tracking-[0.4em] uppercase mt-2">vividly private</span>
              </div>
            </div>
          </div>
        </section>

        {/* Enticing Closing Quote */}
        <section className="py-56 px-6 text-center italic font-serif text-4xl md:text-6xl text-white/20 leading-tight">
          <div className="max-w-5xl mx-auto group cursor-pointer">
            "Will you stay in the light where it's safe, <br /> 
            or <span className="text-white/40 group-hover:text-red-500 transition-colors duration-1000">surrender to the fragrance</span> of the dark?"
            <div className="mt-16 not-italic font-sans text-[11px] uppercase tracking-[0.8em] font-bold opacity-20 hover:opacity-50 transition-opacity">— Rose</div>
          </div>
        </section>
      </main>

      <Footer />
      <AIFlirtAssistant />
    </div>
  );
};

export default App;
