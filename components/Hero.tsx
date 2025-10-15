
import React from 'react';

interface HeroProps {
  onDownloadRequest: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDownloadRequest }) => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center text-center md:text-left py-20">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-100">
          Jane Doe
        </h1>
        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-cyan-400">
          Cybersecurity Analyst
        </h2>
        <p className="mt-6 text-lg text-slate-400 max-w-2xl">
          Dedicated to safeguarding digital assets and infrastructure. Specializing in threat intelligence, vulnerability management, and incident response to fortify defenses against evolving cyber threats.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            onClick={onDownloadRequest}
            className="bg-cyan-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            Download Resume
          </button>
          <a
            href="#contact"
            className="bg-slate-700 text-slate-200 font-semibold px-8 py-3 rounded-md hover:bg-slate-600 transition-all transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
