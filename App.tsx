
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadRequest = () => {
    setIsModalOpen(true);
  };

  const handleDownload = (email: string) => {
    console.log(`Resume downloaded by: ${email}`);
    // Simulate file download
    const resumeContent = `
# JANE DOE - CYBERSECURITY ANALYST

## CONTACT
- Email: jane.doe@email.com
- LinkedIn: linkedin.com/in/janedoe-cyber
- GitHub: github.com/janedoe-cyber

## SUMMARY
A highly motivated and detail-oriented Cybersecurity Analyst with a proven track record in threat detection, vulnerability assessment, and incident response. Skilled in utilizing a variety of security tools and technologies to protect enterprise networks and data.

## SKILLS
- SIEM: Splunk, ELK Stack
- Network Security: Firewalls, IDS/IPS, Wireshark
- Vulnerability Scanning: Nessus, OpenVAS
- OS: Linux, Windows Server
- Scripting: Python, Bash

## EXPERIENCE
### Cybersecurity Analyst | SecureTech Corp | 2020 - Present
- Monitored network traffic for suspicious activity using Splunk.
- Conducted regular vulnerability assessments and penetration tests.
- Responded to and mitigated security incidents.

## CERTIFICATIONS
- CompTIA Security+
- Certified Ethical Hacker (CEH)
    `;
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = "JaneDoe-Cybersecurity-Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-slate-900 text-slate-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative">
        <div className="absolute inset-0 bg-grid-slate-700/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
        <div className="relative">
          <Header />
          <main className="container mx-auto px-6 md:px-10 lg:px-20">
            <Hero onDownloadRequest={handleDownloadRequest} />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
      <ResumeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDownload={handleDownload}
      />
    </div>
  );
};

export default App;
