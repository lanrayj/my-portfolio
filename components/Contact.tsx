
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <h2 className="text-3xl font-bold text-slate-200 mb-4">
        Get In Touch
      </h2>
      <p className="max-w-2xl mx-auto text-slate-400 mb-8">
        I'm always open to discussing new opportunities, interesting projects, or just talking about cybersecurity. Feel free to reach out.
      </p>
      <a
        href="mailto:jane.doe@email.com"
        className="inline-block bg-cyan-500 text-white font-semibold px-8 py-3 rounded-md hover:bg-cyan-600 transition-all transform hover:scale-105 shadow-lg shadow-cyan-500/20"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
