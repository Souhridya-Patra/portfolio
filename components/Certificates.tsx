
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 mono">
            <span className="text-blue-400">$</span> certificates-and-awards
          </h2>
          <p className="text-slate-300">Milestones achieved through continuous learning, competition, and hands-on project experience.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.certificates.map((cert, idx) => (
            <div key={idx} className="glass p-6 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all group hover:bg-blue-500/5">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-blue-500/20 rounded text-blue-400 border border-blue-500/30">
                  <i className="fa-solid fa-code text-lg"></i>
                </div>
                <span className="text-[10px] font-bold text-slate-500 uppercase mono">{cert.date}</span>
              </div>
              
              <h3 className="text-base font-bold mb-1 group-hover:text-blue-300 transition-colors leading-tight">{cert.title}</h3>
              <div className="text-sm text-slate-400 mb-4">{cert.platform}</div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 bg-blue-500/10 border border-blue-500/20 rounded text-slate-300">{skill}</span>
                ))}
              </div>

              <a href={cert.link} className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-blue-300 transition-colors">
                View <i className="fa-solid fa-external-link-alt text-[10px]"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
