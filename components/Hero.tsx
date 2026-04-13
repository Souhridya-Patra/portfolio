
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-green-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-green-400 uppercase bg-green-400/10 rounded-full border border-green-400/20 mono">
            $ Available for Internships 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight mono">
            <span className="text-green-400">Code.</span> <span className="text-blue-400">Build.</span> <span className="text-green-400">Create.</span> <span className="text-blue-400">Repeat.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            I'm <span className="text-white font-semibold">{PORTFOLIO_DATA.name}</span>, a passionate developer building intelligent systems. I code because it gives me the freedom to build anything I ever dreamed of as a kid—the apps, websites, and games that captivated me now drive my innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="w-full sm:w-auto px-8 py-4 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-all flex items-center justify-center gap-2 mono text-base"
            >
              <i className="fa-solid fa-code"></i>View Code
            </a>
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 glass text-green-400 font-bold rounded-lg hover:bg-green-400/10 transition-all flex items-center justify-center gap-2 mono border border-green-400/50 text-base"
            >
              <i className="fa-solid fa-terminal"></i>Let's Build
            </a>
          </div>

          {/* Code block snippet */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="glass rounded-xl overflow-hidden border border-green-500/20 mono text-sm">
              <div className="bg-slate-950/50 px-6 py-4 border-b border-green-500/20 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="p-6 bg-slate-950/80 text-green-400 space-y-2 overflow-x-auto">
                <div><span className="text-blue-400">const</span> passion = <span className="text-green-300">"Building dreams with code"</span>;</div>
                <div><span className="text-blue-400">const</span> mission = <span className="text-green-300">"Transform ideas into reality"</span>;</div>
                <div className="mt-3 text-slate-500">// True innovation happens at the intersection</div>
                <div className="text-slate-500">// of passion, persistence, and problem-solving</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-8 text-2xl text-slate-500">
          <a href={PORTFOLIO_DATA.github} target="_blank" className="hover:text-green-400 transition-colors duration-300"><i className="fa-brands fa-github"></i></a>
          <a href={PORTFOLIO_DATA.linkedin} target="_blank" className="hover:text-green-400 transition-colors duration-300"><i className="fa-brands fa-linkedin"></i></a>
          <a href={`mailto:${PORTFOLIO_DATA.email}`} className="hover:text-green-400 transition-colors duration-300"><i className="fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
