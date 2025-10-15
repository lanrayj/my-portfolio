
import React from 'react';

const experienceData = [
  {
    role: "Cybersecurity Analyst",
    company: "SecureTech Corp.",
    period: "Jan 2021 - Present",
    description: [
      "Monitor enterprise networks for security events using Splunk, investigate incidents, and provide remediation recommendations.",
      "Conduct regular vulnerability scans with Nessus and collaborate with IT teams to patch critical vulnerabilities, reducing attack surface by 30%.",
      "Develop and maintain security dashboards and reports for leadership, providing insights into the organization's security posture.",
      "Participate in incident response drills and contribute to the development of IR playbooks.",
    ],
  },
  {
    role: "IT Security Intern",
    company: "Innovate Solutions",
    period: "May 2020 - Dec 2020",
    description: [
      "Assisted senior analysts in monitoring security alerts and triaging potential threats.",
      "Helped configure and manage security tools, including antivirus and firewalls.",
      "Contributed to creating security awareness materials for employees.",
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold text-center text-slate-200 mb-12">
        Professional Experience
      </h2>
      <div className="relative border-l-2 border-slate-700 pl-10">
        {experienceData.map((job, index) => (
          <div key={index} className="mb-12">
            <div className="absolute -left-[11px] top-1 w-5 h-5 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
            <p className="text-sm font-semibold text-slate-400">{job.period}</p>
            <h3 className="text-xl font-bold text-slate-100 mt-1">{job.role}</h3>
            <p className="text-lg text-cyan-400">{job.company}</p>
            <ul className="mt-4 list-disc list-inside text-slate-400 space-y-2">
              {job.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
