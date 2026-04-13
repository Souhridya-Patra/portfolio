
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="text-2xl font-bold mono mb-6">
              <span className="text-slate-400">&lt;</span><span className="text-green-400">/code</span><span className="text-slate-400">&gt;</span>
            </div>
            <p className="text-slate-300 max-w-sm mb-8">
              Passionate developer building intelligent systems through clean code, innovative architecture, and problem-solving. Let's collaborate and create something extraordinary.
            </p>
            <div className="flex gap-4">
              <a href={PORTFOLIO_DATA.github} target="_blank" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/50 border border-green-500/20 transition-all hover:text-green-400">
                <i className="fa-brands fa-github text-xl"></i>
              </a>
              <a href={PORTFOLIO_DATA.linkedin} target="_blank" className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/50 border border-green-500/20 transition-all hover:text-green-400">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href={`mailto:${PORTFOLIO_DATA.email}`} className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-green-500/20 hover:border-green-500/50 border border-green-500/20 transition-all hover:text-green-400">
                <i className="fa-solid fa-envelope text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-green-400 mono">$ nav</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#hero" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-green-400 transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-green-400 transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-green-400 mono">$ connect</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-envelope text-green-500"></i>
                <a href={`mailto:${PORTFOLIO_DATA.email}`} className="hover:text-green-400 transition-colors">{PORTFOLIO_DATA.email}</a>
              </div>
              {PORTFOLIO_DATA.phone && (
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-phone text-green-500"></i>
                  <a href={`tel:${PORTFOLIO_DATA.phone}`} className="hover:text-green-400 transition-colors">{PORTFOLIO_DATA.phone}</a>
                </div>
              )}
              {PORTFOLIO_DATA.location && (
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-map-pin text-green-500"></i>
                  <span>{PORTFOLIO_DATA.location}</span>
                </div>
              )}
              <div className="flex items-center gap-3">
                <i className="fa-brands fa-linkedin text-green-500"></i>
                <a href={PORTFOLIO_DATA.linkedin} target="_blank" className="hover:text-green-400 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All rights reserved.</p>
          <p className="flex items-center gap-2 mono">
            <span className="text-green-400">&lt;</span>Built with <i className="fa-solid fa-heart text-red-500"></i> & React<span className="text-green-400">/&gt;</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
