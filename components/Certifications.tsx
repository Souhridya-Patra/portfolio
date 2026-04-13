
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 mono">
            <span className="text-green-400">$</span> professional-certifications
          </h2>
          <p className="text-slate-300">Industry-recognized validations of my technical expertise and commitment to continuous learning.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <div key={idx} className="glass p-6 rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all group flex items-center gap-6">
              <div className="w-20 h-20 bg-green-500/10 rounded-lg flex items-center justify-center p-2 group-hover:scale-110 transition-transform border border-green-500/20">
                {cert.badgeUrl ? (
                  <img src={cert.badgeUrl} alt={cert.issuer} className="w-full h-full object-contain" />
                ) : (
                  <i className="fa-solid fa-code text-3xl text-green-500/70"></i>
                )}
              </div>
              <div className="flex-grow">
                <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1 mono">{cert.issuer}</div>
                <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                <div className="flex items-center justify-between">
                   <span className="text-xs text-slate-400 mono">{cert.date}</span>
                   <a href={cert.link} className="text-xs font-bold text-green-400 hover:text-green-300 flex items-center gap-1 transition-colors">
                     Verify <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
