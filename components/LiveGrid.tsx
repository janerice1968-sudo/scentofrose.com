
import React from 'react';
import { Model } from '../types';

const MOCK_MODELS: Model[] = [
  {
    id: '1',
    name: 'Seraphina',
    age: 24,
    tags: ['Sultry', 'Refined', 'Hidden'],
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=800',
    status: 'online',
    bio: 'Finding the scent of passion in the dark.'
  },
  {
    id: '2',
    name: 'Julianne',
    age: 27,
    tags: ['Exquisite', 'Raw', 'Velvet'],
    imageUrl: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600&h=800',
    status: 'online',
    bio: 'Will you reach for the rose, or fear the thorn?'
  },
  {
    id: '3',
    name: 'Elena',
    age: 22,
    tags: ['Untamed', 'Lithe', 'Fragrant'],
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=800',
    status: 'busy',
    bio: 'Revealing what the night tries to hide.'
  },
  {
    id: '4',
    name: 'Morgana',
    age: 25,
    tags: ['Midnight', 'Stoic', 'Forbidden'],
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600&h=800',
    status: 'online',
    bio: 'The most beautiful roses grow in total darkness.'
  }
];

const LiveGrid: React.FC = () => {
  return (
    <section id="explore" className="py-32 px-6 bg-[#040404]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 border-b border-white/5 pb-12">
          <div>
            <div className="text-red-500 font-bold text-[10px] uppercase tracking-[0.5em] mb-4">Live Sanctuary</div>
            <h2 className="text-5xl md:text-6xl font-serif mb-4 leading-none">The <span className="italic">Blooming</span> Gallery.</h2>
            <p className="text-white/30 max-w-md font-light tracking-wide italic">"Close your eyes and breathe... then open them to see what the fragrance reveals."</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 rounded-sm bg-white/5 text-[9px] font-bold uppercase tracking-widest hover:bg-red-500/20 transition-all border border-transparent hover:border-red-500/30">Hottest Blooms</button>
            <button className="px-8 py-3 rounded-sm border border-red-500/40 text-[9px] font-bold uppercase tracking-widest text-red-400 hover:bg-red-500 hover:text-white transition-all">Unveil Filters</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {MOCK_MODELS.map((model) => (
            <div key={model.id} className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]">
              <img 
                src={model.imageUrl} 
                alt={model.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${model.status === 'online' ? 'bg-red-500 shadow-[0_0_15px_rgba(239,68,68,1)] animate-pulse' : 'bg-white/20'}`}></div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/90 drop-shadow-lg">
                  {model.status === 'online' ? 'Exposed' : 'Waiting'}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out">
                <h3 className="text-3xl font-serif mb-3 tracking-tighter">{model.name}</h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {model.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-[8px] font-bold uppercase tracking-[0.3em] text-red-400 border-b border-red-500/20 pb-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="w-full py-5 bg-red-600/90 backdrop-blur-md border border-red-400/30 rounded-sm text-[10px] font-bold uppercase tracking-[0.4em] group-hover:bg-red-600 transition-all duration-500 shadow-2xl">
                  Taste the Moment
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-28 text-center">
          <button className="text-white/20 hover:text-red-500 transition-all uppercase tracking-[0.6em] text-[10px] font-bold flex flex-col items-center gap-6 mx-auto group">
             <span className="text-xs italic lowercase font-serif opacity-50 group-hover:opacity-100 mb-2">more petals await...</span>
            <div className="w-px h-20 bg-gradient-to-b from-white/10 to-red-500/50 group-hover:h-32 transition-all duration-1000"></div>
            Unveil The Rest
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveGrid;
