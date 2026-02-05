import React, { useState, useRef, useEffect } from 'react';
import { getFlirtResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIFlirtAssistant: React.FC = () => {
  const trackingLink = "https://t.acrsmartcam.com/403638/7335?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN";
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Hush... you've found the thorns. I'm Rose. What secrets are you hiding behind those eyes?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', content: inputValue };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    const responseText = await getFlirtResponse(inputValue);
    setMessages(prev => [...prev, { role: 'assistant', content: responseText }]);
    setIsTyping(false);
  };

  return (
    <>
      {/* Trigger Button - A subtle rose-colored pulse */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group fixed bottom-10 right-10 z-[60] flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-tr from-red-700 to-black shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all active:scale-95 hover:scale-110"
      >
        <div className="absolute inset-0 animate-ping rounded-full bg-red-600 opacity-20 group-hover:opacity-40"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 text-white opacity-70 transition-opacity group-hover:opacity-100"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      </button>

      {/* Chat Window - Velvet dark theme */}
      {isOpen && (
        <div className="fixed bottom-32 right-10 z-[60] flex h-[600px] w-[90vw] animate-in slide-in-from-bottom-10 flex-col overflow-hidden rounded-sm border border-red-900/30 bg-[#080808] shadow-[0_50px_100px_rgba(0,0,0,0.9)] duration-500 sm:w-[400px]">
          <div className="flex items-center justify-between border-b border-red-900/20 bg-gradient-to-r from-red-950/20 to-black p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-red-500/40 bg-black" onClick={() => window.location.href = trackingLink}>
                 <span className="font-serif text-xl font-bold text-red-500">R</span>
              </div>
              <div>
                <h4 className="font-serif text-base tracking-tighter text-white/90">Rose</h4>
                <p className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.4em] text-red-500">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,1)]"></span> Dreaming...
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/20 transition-colors hover:text-white">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div ref={scrollRef} className="scrollbar-hide flex-1 space-y-6 overflow-y-auto p-6">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3.5 text-sm leading-relaxed tracking-wide rounded-sm ${
                  m.role === 'user' 
                    ? 'border border-red-900/30 bg-red-900/20 font-light text-white' 
                    : 'border border-white/5 bg-white/5 italic text-white/60'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-center gap-2 rounded-sm border border-white/5 bg-white/5 px-5 py-3.5">
                  <div className="h-1 w-1 animate-bounce rounded-full bg-red-600"></div>
                  <div className="h-1 w-1 animate-bounce rounded-full bg-red-600 [animation-delay:0.2s]"></div>
                  <div className="h-1 w-1 animate-bounce rounded-full bg-red-600 [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="border-t border-red-900/20 bg-black p-6">
            <div className="relative">
              <input 
                type="text"
                placeholder="Whisper to Rose..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full rounded-sm border border-white/10 bg-white/5 px-5 py-4 pr-14 text-sm transition-all placeholder:text-white/10 focus:border-red-600/50 focus:outline-none"
              />
              <button 
                onClick={handleSend}
                className="absolute right-3 top-3.5 p-1 text-red-600 transition-colors hover:text-red-400"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
            <a href={trackingLink} className="mt-5 block text-center text-[8px] font-bold uppercase tracking-[0.6em] text-white/10 transition-colors hover:text-red-500/50">
              The Bloom is Digital
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default AIFlirtAssistant;