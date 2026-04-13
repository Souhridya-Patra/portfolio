
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 mono">
              <span className="text-green-400">$</span> <span className="text-white">experience</span>
            </h2>
            <div className="space-y-12">
              {PORTFOLIO_DATA.experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-green-500/30 pb-2 hover:border-green-500/60 transition-all">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-slate-900"></div>
                  <div className="mb-1 text-sm font-bold text-green-400 uppercase tracking-widest mono">{exp.period}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.position}</h3>
                  <div className="text-slate-300 font-medium mb-4">{exp.company}</div>
                  <ul className="space-y-2 text-slate-400 text-sm leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                          <span className="text-green-500">&gt;</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 mono">
              <span className="text-blue-400">$</span> <span className="text-white">education</span>
            </h2>
            <div className="space-y-12">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-blue-500/30 pb-2 hover:border-blue-500/60 transition-all">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
                  <div className="mb-1 text-sm font-bold text-blue-400 uppercase tracking-widest mono">{edu.year}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <div className="text-slate-300 font-medium mb-2">{edu.institution}</div>
                  <div className="inline-block px-3 py-1 glass rounded text-xs font-bold text-white border border-blue-500/30">{edu.grade}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
