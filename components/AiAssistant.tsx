
import React, { useState, useRef, useEffect } from 'react';
import { getAiResponse } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm Souhridya's AI assistant. How can I help you evaluate this profile today?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async (customMsg?: string) => {
    const userMsg = customMsg || input.trim();
    if (!userMsg || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getAiResponse(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('AI Response error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again later.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      {isOpen && (
        <div className="w-[350px] sm:w-[400px] h-[550px] glass rounded-3xl overflow-hidden mb-4 shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-10 duration-300">
          <div className="p-4 bg-gradient-to-r from-blue-600 to-blue-700 flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center"><i className="fa-solid fa-robot"></i></div>
              <span className="font-bold">Recruiter Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white"><i className="fa-solid fa-xmark"></i></button>
          </div>

          <div className="px-4 py-2 bg-blue-500/10 border-b border-white/5 flex gap-2 overflow-x-auto no-scrollbar">
            <button onClick={() => handleSend("Give me a 30-second elevator pitch.")} className="whitespace-nowrap px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-[10px] font-bold border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all">Elevator Pitch</button>
            <button onClick={() => handleSend("What are his top 3 technical strengths?")} className="whitespace-nowrap px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-[10px] font-bold border border-blue-500/20 hover:bg-blue-600 hover:text-white transition-all">Top Strengths</button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'glass border-white/10 text-slate-200 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && <div className="flex justify-start"><div className="glass p-3 rounded-2xl flex gap-1"><span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span><span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-75"></span><span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce delay-150"></span></div></div>}
          </div>

          <div className="p-4 border-t border-white/5 flex gap-2">
            <input 
              type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about my skills..." className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
            />
            <button onClick={() => handleSend()} className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center"><i className="fa-solid fa-paper-plane text-white"></i></button>
          </div>
        </div>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all ${isOpen ? 'bg-slate-800' : 'bg-blue-600 hover:scale-110'}`}>
        <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-robot'} text-2xl text-white`}></i>
      </button>
    </div>
  );
};

export default AiAssistant;
