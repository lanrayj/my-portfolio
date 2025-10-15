
import React from 'react';

const skillsData = {
  "Security Tools & Platforms": ["Splunk", "ELK Stack", "Nessus", "Wireshark", "Burp Suite", "Metasploit"],
  "Threat Intelligence": ["MISP", "VirusTotal", "Shodan", "Recorded Future"],
  "Network Security": ["Firewalls (Palo Alto, Cisco ASA)", "IDS/IPS (Snort, Suricata)", "VPNs", "Packet Analysis"],
  "Cloud Security": ["AWS Security Hub", "Azure Sentinel", "IAM", "VPC Security"],
  "Operating Systems": ["Linux (Debian, CentOS)", "Windows Server", "macOS"],
  "Scripting & Languages": ["Python", "Bash", "PowerShell", "SQL"],
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center text-slate-200 mb-12">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-cyan-500 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">{category}</h3>
            <ul className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li key={skill} className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
