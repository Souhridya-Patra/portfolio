
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { PORTFOLIO_DATA } from '../constants';

const Skills: React.FC = () => {
  // Aggregate data for radar chart - just a sample of core skills
  const radarData = [
    { subject: 'Frontend', A: 90, fullMark: 100 },
    { subject: 'Backend', A: 85, fullMark: 100 },
    { subject: 'Cloud', A: 75, fullMark: 100 },
    { subject: 'Algorithms', A: 95, fullMark: 100 },
    { subject: 'AI/ML', A: 70, fullMark: 100 },
    { subject: 'Architecture', A: 80, fullMark: 100 },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 mono"><span className="text-green-400">const</span> skills = <span className="text-green-300">{}</span></h2>
          <div className="h-1.5 w-20 bg-green-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Radar Chart */}
          <div className="h-[400px] w-full glass rounded-2xl p-6 flex flex-col items-center justify-center border border-green-500/20">
             <h3 className="text-lg font-semibold mb-4 text-green-400 mono">// Skill Distribution</h3>
             <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#22c55e"
                    fill="#22c55e"
                    fillOpacity={0.6}
                  />
                </RadarChart>
             </ResponsiveContainer>
          </div>

          {/* Categorized Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {(['Languages', 'Frontend', 'Backend', 'AI/ML', 'Cloud/DevOps'] as const).map(category => (
              <div key={category} className="p-6 glass rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all group">
                <h3 className="text-base font-bold mb-4 flex items-center gap-2 mono text-green-400">
                  <span className="text-slate-500">&gt;</span> {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.skills
                    .filter(s => s.category === category)
                    .map(skill => (
                      <span 
                        key={skill.name} 
                        className="px-3 py-1 bg-green-500/10 hover:bg-green-500/20 rounded text-xs font-medium text-green-300 transition-colors mono border border-green-500/20"
                      >
                        {skill.name}
                      </span>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
