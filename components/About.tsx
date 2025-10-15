
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold text-center text-slate-200 mb-12">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3 flex justify-center">
          <img 
            src="https://picsum.photos/seed/cybersecurity/300/300" 
            alt="Jane Doe" 
            className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-cyan-500/50 shadow-lg"
          />
        </div>
        <div className="md:w-2/3 text-lg text-slate-400 space-y-4">
          <p>
            Hello! I'm Jane, a Cybersecurity Analyst with a passion for solving complex security puzzles and protecting digital environments. My journey into tech started with a curiosity for how things work, which naturally led me to the defensive side of the digital world. I thrive on the constant challenge of staying ahead of threat actors.
          </p>
          <p>
            With hands-on experience in SIEM analysis, network security monitoring, and vulnerability management, I enjoy turning raw data into actionable intelligence. I believe that a proactive and layered security approach is key to building resilient systems.
          </p>
          <p>
            When I'm not analyzing logs or hardening systems, I enjoy contributing to open-source security projects, participating in CTF competitions, and staying updated with the latest trends in cybersecurity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
