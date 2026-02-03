
import React from 'react';
import { Model } from '../types';

const MOCK_MODELS: Model[] = [
  {
    id: '1',
    name: 'Seraphina',
    age: 24,
    tags: ['Sultry', 'Refined'],
    imageUrl: 'https://i.ibb.co/VppdjsCf/e3f7229e-f9df-479a-a2a7-6ce4b3ec3d81.png',
    status: 'online',
    bio: 'Finding the scent of passion in the dark.'
  },
  {
    id: '2',
    name: 'Julianne',
    age: 27,
    tags: ['Exquisite', 'Raw'],
    imageUrl: 'https://i.ibb.co/zTwnf9dd/aa5aa43f-da01-446e-b715-339b555104a5.png',
    status: 'online',
    bio: 'Will you reach for the rose, or fear the thorn?'
  },
  {
    id: '3',
    name: 'Elena',
    age: 22,
    tags: ['Untamed', 'Lithe'],
    imageUrl: 'https://i.ibb.co/nqhgQtF7/a0e66ad2-3f5e-4664-bcac-578750e319b9.png',
    status: 'busy',
    bio: 'Revealing what the night tries to hide.'
  },
  {
    id: '4',
    name: 'Morgana',
    age: 25,
    tags: ['Midnight', 'Stoic'],
    imageUrl: 'https://i.ibb.co/9mw4gC2x/94890673-aa01-4081-9623-7d7faecacf95.png',
    status: 'online',
    bio: 'The most beautiful roses grow in total darkness.'
  }
];

const LiveGrid: React.FC = () => {
  return (
    <section id="explore" className="py-32 px-6 bg-red-950/5 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/10 pb-12">
          <div>
            <div className="text-red-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-4">Live Sanctuary</div>
            <h2 className="text-5xl md:text-6xl font-serif mb-4 leading-none text-white">The <span className="italic text-red-200">Blooming</span> Gallery.</h2>
            <p className="text-white/60 max-w-md font-light tracking-wide italic">"Close your eyes and breathe... then open them to see what the fragrance reveals."</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN" className="px-8 py-3 rounded-sm bg-white/10 text-[9px] font-bold uppercase tracking-widest hover:bg-red-500/30 transition-all border border-white/5 hover:border-red-500/50 text-white text-center block">Hottest Blooms</a>
            <a href="https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN" className="px-8 py-3 rounded-sm border border-red-500/40 text-[9px] font-bold uppercase tracking-widest text-red-300 hover:bg-red-500 hover:text-white transition-all text-center block">Unveil Filters</a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {MOCK_MODELS.map((model) => (
            <div key={model.id} onClick={() => window.location.href = 'https://www.baidu.com'} className="group relative bg-[#1a1a1a]/40 border border-white/5 rounded-sm overflow-hidden flex flex-col shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all hover:border-red-500/30 hover:shadow-red-900/10 cursor-pointer">
              {/* Image Area */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={model.imageUrl} 
                  alt={model.name} 
                  className="absolute inset-0 w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s] opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                
                {/* Status Label */}
                <div className="absolute top-6 left-6 flex items-center gap-2">
                  <div className={`w-1.5 h-1.5 rounded-full ${model.status === 'online' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]' : 'bg-white/40'}`}></div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/90 drop-shadow-md">
                    {model.status === 'online' ? 'EXPOSED' : 'WAITING'}
                  </span>
                </div>

                {/* Name and Tags Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-4xl font-serif text-white tracking-tighter mb-1 drop-shadow-lg">{model.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {model.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-bold uppercase tracking-[0.2em] text-red-400 border-b border-red-500/30">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="p-5 pt-0 mt-auto">
                <a href="https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN" className="w-full py-4 bg-[#c22d2d] hover:bg-red-600 text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-sm transition-all duration-300 shadow-lg active:scale-95 text-center block">
                  Taste the Moment
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 text-center">
          <a href="https://t.acrsmartcam.com/403608/8873/0?bo=2779,2778,2777,2776,2775&po=6533&aff_sub5=SF_006OG000004lmDN" className="text-white/40 hover:text-red-500 transition-all uppercase tracking-[0.6em] text-[10px] font-bold flex flex-col items-center gap-6 mx-auto group text-center block">
             <span className="text-xs italic lowercase font-serif opacity-70 group-hover:opacity-100 mb-2 text-red-200">more petals await...</span>
            <div className="w-px h-20 bg-gradient-to-b from-white/20 to-red-500 group-hover:h-32 transition-all duration-1000 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
            Unveil The Rest
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiveGrid;
