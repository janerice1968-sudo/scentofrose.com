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
  const trackingLink = "https://t.acrsmartcam.com/403638/7335?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN";

  return (
    <section id="explore" className="bg-red-950/5 py-32 px-6 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col justify-between gap-8 border-b border-white/10 pb-12 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.5em] text-red-500">Live Sanctuary</div>
            <h2 className="mb-4 font-serif text-5xl leading-none text-white md:text-6xl">The <span className="italic text-red-200">Blooming</span> Gallery.</h2>
            <p className="max-w-md font-light italic tracking-wide text-white/60">"Close your eyes and breathe... then open them to see what the fragrance reveals."</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={trackingLink} className="block rounded-sm border border-white/5 bg-white/10 px-8 py-3 text-center text-[9px] font-bold uppercase tracking-widest text-white transition-all hover:border-red-500/50 hover:bg-red-500/30">Hottest Blooms</a>
            <a href={trackingLink} className="block rounded-sm border border-red-500/40 px-8 py-3 text-center text-[9px] font-bold uppercase tracking-widest text-red-300 transition-all hover:bg-red-500 hover:text-white">Unveil Filters</a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_MODELS.map((model) => (
            <div key={model.id} onClick={() => window.location.href = trackingLink} className="group relative flex cursor-pointer flex-col overflow-hidden rounded-sm border border-white/5 bg-[#1a1a1a]/40 shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all hover:border-red-500/30 hover:shadow-red-900/10">
              {/* Image Area */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img 
                  src={model.imageUrl} 
                  alt={model.name} 
                  className="absolute inset-0 h-full w-full object-cover opacity-90 grayscale-[10%] transition-all duration-[2s] group-hover:scale-105 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
                
                {/* Status Label */}
                <div className="absolute left-6 top-6 flex items-center gap-2">
                  <div className={`h-1.5 w-1.5 rounded-full ${model.status === 'online' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]' : 'bg-white/40'}`}></div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/90 drop-shadow-md">
                    {model.status === 'online' ? 'EXPOSED' : 'WAITING'}
                  </span>
                </div>

                {/* Name and Tags Overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="mb-1 font-serif text-4xl tracking-tighter text-white drop-shadow-lg">{model.name}</h3>
                  <div className="flex flex-wrap gap-3">
                    {model.tags.map(tag => (
                      <span key={tag} className="border-b border-red-500/30 text-[8px] font-bold uppercase tracking-[0.2em] text-red-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Area */}
              <div className="mt-auto p-5 pt-0">
                <a href={trackingLink} className="block w-full rounded-sm bg-[#c22d2d] py-4 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-white shadow-lg transition-all duration-300 active:scale-95 hover:bg-red-600">
                  Taste the Moment
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 text-center">
          <a href={trackingLink} className="group mx-auto block flex flex-col items-center gap-6 text-center text-[10px] font-bold uppercase tracking-[0.6em] text-white/40 transition-all hover:text-red-500">
             <span className="mb-2 font-serif text-xs italic lowercase text-red-200 opacity-70 group-hover:opacity-100">more petals await...</span>
            <div className="h-20 w-px bg-gradient-to-b from-white/20 to-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-all duration-1000 group-hover:h-32"></div>
            Unveil The Rest
          </a>
        </div>
      </div>
    </section>
  );
};

export default LiveGrid;