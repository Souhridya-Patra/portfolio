
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Experience from './components/Experience';
import GrowthTracker from './components/GrowthTracker';
import Certifications from './components/Certifications';
import Certificates from './components/Certificates';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="py-20 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-35 transition duration-1000"></div>
                <div className="relative glass rounded-xl overflow-hidden aspect-square flex items-center justify-center p-4 border border-green-500/20">
                  <img
                    src="https://drive.google.com/thumbnail?id=1dLCW-LvS06Q-r4YewDw6IUKWFodmXAOS&sz=w1200"
                    alt="Engineer Profile"
                    loading="eager"
                    decoding="async"
                    referrerPolicy="no-referrer"
                    className="rounded-lg object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold mb-6">Passionate <span className="text-green-400">Developer & Builder</span></h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I'm a 2nd-year B.Tech CSE student at SRMIST, Tiruchirappalli with a passion for turning ideas into code. I believe in the power of software to create meaningful change—through open-source contributions, innovative projects, and continuous learning. Every line of code is an opportunity to solve real problems.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 glass rounded-xl border border-green-500/20 hover:border-green-400/40 transition-all">
                    <div className="text-2xl font-bold text-green-400 mb-1 mono">25+</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Projects Built</div>
                  </div>
                  <div className="p-4 glass rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all">
                    <div className="text-2xl font-bold text-blue-400 mb-1 mono">5+</div>
                    <div className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Open Source Roles</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Skills />
        <GrowthTracker />
        <Certifications />
        <Certificates />
        <Projects />
        <Publications />
        <Experience />
      </main>

      <AiAssistant />
      <Footer />

      <div className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-green-600/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[350px] h-[350px] bg-blue-600/5 blur-[100px] rounded-full"></div>
      </div>
    </div>
  );
};

export default App;
