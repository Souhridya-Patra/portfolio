
import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { getAiResponse } from '../services/geminiService';

const Projects: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [analysisLoading, setAnalysisLoading] = useState(false);
  const [activeAnalysis, setActiveAnalysis] = useState<string | null>(null);

  const handleDeepDive = async (projectId: string, title: string) => {
    setActiveAnalysis(projectId);
    setAnalysisLoading(true);
    const response = await getAiResponse(`Explain the technical complexity and impact of the project: ${title}`, 'project');
    alert(`AI Analysis for ${title}:\n\n${response}`);
    setAnalysisLoading(false);
    setActiveAnalysis(null);
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 mono">
            <span className="text-green-400">$</span> <span className="text-white">projects</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl">
            A collection of production-focused projects demonstrating full-stack development, system design, and innovative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <div 
              key={project.id}
              className="group glass border border-green-500/20 hover:border-green-400/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
            >
              {/* Project Header */}
              <div 
                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                className="cursor-pointer"
              >
                <div className="px-6 md:px-8 py-6 flex items-start justify-between gap-4">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-green-400 mono text-sm font-bold">0{index + 1}</span>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-green-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-3xl">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <i className={`fa-solid fa-chevron-down text-green-400 text-xl transition-transform duration-300 ${expandedId === project.id ? 'rotate-180' : ''}`}></i>
                  </div>
                </div>
              </div>

              {/* Project Details - Expandable */}
              <div className={`overflow-hidden transition-all duration-300 ${expandedId === project.id ? 'max-h-[2000px]' : 'max-h-0'}`}>
                <div className="px-6 md:px-8 pb-8 border-t border-green-500/20 space-y-6">
                  
                  {/* Tech Stack Preview */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-green-500/20 border border-green-500/40 text-green-300 text-xs font-bold rounded-lg mono hover:bg-green-500/30 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Problem & Impact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-3 mono">
                        <span className="text-slate-500">//</span> Problem
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.problemStatement}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-3 mono">
                        <span className="text-slate-500">//</span> Impact
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {project.impact}
                      </p>
                    </div>
                  </div>

                  {/* Architecture */}
                  <div>
                    <h4 className="text-sm font-bold text-green-400 uppercase tracking-widest mb-3 mono">
                      <span className="text-slate-500">//</span> Architecture & Setup
                    </h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {project.architecture}
                    </p>
                  </div>

                  {/* Project Image */}
                  <div className="rounded-lg overflow-hidden h-64 md:h-80 border border-green-500/20">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => handleDeepDive(project.id, project.title)}
                      disabled={analysisLoading && activeAnalysis === project.id}
                      className="flex-1 px-4 py-3 bg-green-500/20 hover:bg-green-500/30 border border-green-500/50 hover:border-green-400/80 text-green-300 hover:text-green-200 font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2 mono"
                    >
                      {analysisLoading && activeAnalysis === project.id ? (
                        <>
                          <i className="fa-solid fa-circle-notch animate-spin"></i>
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <i className="fa-solid fa-brain"></i>
                          AI Analysis
                        </>
                      )}
                    </button>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-3 bg-slate-800/50 hover:bg-slate-800/80 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-bold rounded-lg text-sm transition-all flex items-center justify-center gap-2"
                    >
                      <i className="fa-brands fa-github"></i>
                      View Repository
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 p-6 glass border border-green-500/20 rounded-lg text-center">
          <p className="text-slate-400 mono text-sm">
            <span className="text-green-400">$</span> These projects demonstrate expertise in full-stack development, system architecture, and production-ready code practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
