
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const GrowthTracker: React.FC = () => {
  return (
    <section id="growth" className="py-20 border-t border-white/5 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 mono">
            <span className="text-green-400">$</span> git-log --oneline --graph
          </h2>
          <p className="text-slate-300">The evolution of a developer: Semester-wise reflections and technical milestones.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.reflections.map((item, idx) => (
            <div key={idx} className="glass p-8 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-xs font-bold tracking-widest text-green-400 uppercase mono">#{item.semester}</span>
                  <h3 className="text-lg font-bold mt-2 group-hover:text-green-300 transition-colors">{item.focus}</h3>
                </div>
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 border border-green-500/30">
                  <i className="fa-solid fa-code"></i>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-bold text-green-400 uppercase mb-3 mono">{`// milestones`}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {item.milestones.map((m, i) => (
                      <li key={i} className="px-3 py-1 bg-green-500/10 rounded text-xs text-slate-300 border border-green-500/20">{m}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-2 mono">{`// reflection`}</h4>
                  <p className="text-sm text-slate-300 italic leading-relaxed">"{item.growth}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthTracker;
