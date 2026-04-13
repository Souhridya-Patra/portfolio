import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Publications: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  if (!PORTFOLIO_DATA.publications || PORTFOLIO_DATA.publications.length === 0) {
    return null;
  }

  return (
    <section id="publications" className="py-20 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mono">
            <span className="text-green-400">$</span> <span className="text-white">publications</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl">
            Peer-reviewed research and academic publications showcasing contributions to the field of computer science and engineering.
          </p>
        </div>

        {/* Publications List */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.publications.map((publication) => (
            <div
              key={publication.id}
              className="group glass border border-green-500/20 hover:border-green-400/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              {/* Publication Header */}
              <div
                onClick={() => setExpandedId(expandedId === publication.id ? null : publication.id)}
                className="cursor-pointer"
              >
                <div className="px-6 md:px-8 py-6 flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-green-500/20 border border-green-500/50 text-green-300 text-xs font-bold rounded-lg mono">
                        <i className="fa-solid fa-scroll mr-2"></i>Published
                      </span>
                      <span className="text-sm text-slate-400 mono">{publication.publicationDate}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-green-300 transition-colors mb-3">
                      {publication.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-slate-400">
                      <span className="flex items-center gap-2">
                        <i className="fa-solid fa-book text-green-400"></i>
                        <span className="font-semibold">{publication.journal}</span>
                      </span>
                      {publication.conference && (
                        <span className="flex items-center gap-2">
                          <i className="fa-solid fa-presentation text-green-400"></i>
                          <span>{publication.conference}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <i className={`fa-solid fa-chevron-down text-green-400 text-xl transition-transform duration-300 ${expandedId === publication.id ? 'rotate-180' : ''}`}></i>
                  </div>
                </div>
              </div>

              {/* Publication Details - Expandable */}
              <div className={`overflow-hidden transition-all duration-300 ${expandedId === publication.id ? 'max-h-[1500px]' : 'max-h-0'}`}>
                <div className="px-6 md:px-8 pb-8 border-t border-green-500/20 space-y-6">
                  {/* Authors */}
                  <div>
                    <h4 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-2 mono">
                      <span className="text-slate-500">//</span> Authors
                    </h4>
                    <p className="text-slate-300 text-sm">{publication.authors}</p>
                  </div>

                  {/* Abstract */}
                  <div>
                    <h4 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-3 mono">
                      <span className="text-slate-500">//</span> Abstract
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {publication.abstract}
                    </p>
                  </div>

                  {/* Keywords */}
                  <div>
                    <h4 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-3 mono">
                      <span className="text-slate-500">//</span> Keywords
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {publication.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="px-3 py-1.5 bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-semibold rounded-lg mono hover:bg-green-500/30 transition-colors"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact */}
                  <div>
                    <h4 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-2 mono">
                      <span className="text-slate-500">//</span> Research Impact
                    </h4>
                    <p className="text-slate-300 text-sm">
                      {publication.impact}
                    </p>
                  </div>

                  {/* DOI Link */}
                  <div className="pt-4 border-t border-green-500/20">
                    <a
                      href={publication.doi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 hover:border-green-400/80 text-green-300 hover:text-green-200 font-bold rounded-lg text-sm transition-all mono"
                    >
                      <i className="fa-solid fa-link"></i>
                      View on IEEE Xplore
                    </a>
                    <p className="text-xs text-slate-500 mt-3 mono">
                      DOI: {publication.doi.split('/').pop()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Note */}
        <div className="mt-16 p-6 glass border border-green-500/20 rounded-lg">
          <p className="text-slate-400 mono text-sm">
            <span className="text-green-400">$</span> Research contributions advancing the fields of database systems, distributed computing, and system architecture.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;
