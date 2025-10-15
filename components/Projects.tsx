
import React from 'react';

const projectsData = [
  {
    title: "Home Lab Security Monitoring",
    description: "Designed and built a home lab environment with multiple VMs to simulate a small corporate network. Deployed an ELK stack to collect and analyze logs from various sources, creating custom dashboards to monitor for suspicious activity.",
    tags: ["ELK Stack", "VirtualBox", "Linux", "pfSense"],
    link: "#",
  },
  {
    title: "Phishing Email Analyzer",
    description: "A Python script that automates the analysis of suspicious email headers and attachments. It extracts indicators of compromise (IOCs) like URLs and file hashes, and checks them against threat intelligence feeds.",
    tags: ["Python", "API", "VirusTotal", "Threat Intel"],
    link: "#",
  },
  {
    title: "Automated Vulnerability Scanner",
    description: "Developed a Bash script to automate weekly network scans using Nmap and OpenVAS. The script generates a summary report highlighting critical and high-severity vulnerabilities for prioritized patching.",
    tags: ["Bash", "Nmap", "OpenVAS", "Automation"],
    link: "#",
  },
];

const ProjectCard: React.FC<typeof projectsData[0]> = ({ title, description, tags, link }) => (
  <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300">
    <div className="flex-grow">
      <h3 className="text-xl font-semibold text-slate-100 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-400 mt-3">{description}</p>
    </div>
    <div className="mt-4 flex flex-wrap gap-2">
      {tags.map(tag => (
        <span key={tag} className="text-xs font-semibold bg-cyan-900/50 text-cyan-300 px-3 py-1 rounded-full">{tag}</span>
      ))}
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center text-slate-200 mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
