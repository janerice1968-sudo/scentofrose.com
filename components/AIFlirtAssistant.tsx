
import React, { useState, useRef, useEffect } from 'react';
import { getFlirtResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIFlirtAssistant: React.FC = () => {
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
        className="fixed bottom-10 right-10 z-[60] w-16 h-16 bg-gradient-to-tr from-red-700 to-black rounded-full shadow-[0_0_30px_rgba(220,38,38,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
      >
        <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-20 group-hover:opacity-40"></div>
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white relative z-10 opacity-70 group-hover:opacity-100 transition-opacity"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
      </button>

      {/* Chat Window - Velvet dark theme */}
      {isOpen && (
        <div className="fixed bottom-32 right-10 z-[60] w-[90vw] sm:w-[400px] h-[600px] bg-[#080808] rounded-sm border border-red-900/30 shadow-[0_50px_100px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-500">
          <div className="p-6 border-b border-red-900/20 bg-gradient-to-r from-red-950/20 to-black flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-red-500/40 flex items-center justify-center bg-black">
                 <span className="text-red-500 font-serif text-xl font-bold">R</span>
              </div>
              <div>
                <h4 className="text-base font-serif tracking-tighter text-white/90">Rose</h4>
                <p className="text-[9px] text-red-500 font-bold uppercase tracking-[0.4em] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,1)]"></span> Dreaming...
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-5 py-3.5 rounded-sm text-sm tracking-wide leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-red-900/20 text-white font-light border border-red-900/30' 
                    : 'bg-white/5 border border-white/5 italic text-white/60'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="px-5 py-3.5 rounded-sm bg-white/5 border border-white/5 flex gap-2 items-center">
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-red-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 border-t border-red-900/20 bg-black">
            <div className="relative">
              <input 
                type="text"
                placeholder="Whisper to Rose..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="w-full bg-white/5 border border-white/10 rounded-sm px-5 py-4 text-sm focus:outline-none focus:border-red-600/50 transition-all pr-14 placeholder:text-white/10"
              />
              <button 
                onClick={handleSend}
                className="absolute right-3 top-3.5 p-1 text-red-600 hover:text-red-400 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              </button>
            </div>
            <p className="text-[8px] text-center mt-5 text-white/10 uppercase tracking-[0.6em] font-bold">
              The Bloom is Digital
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default AIFlirtAssistant;
