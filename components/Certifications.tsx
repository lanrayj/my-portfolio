
import React from 'react';

const certsData = [
  { name: "CompTIA Security+", issuer: "CompTIA", year: "2021" },
  { name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", year: "2022" },
  { name: "Splunk Core Certified Power User", issuer: "Splunk", year: "2022" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20">
      <h2 className="text-3xl font-bold text-center text-slate-200 mb-12">
        Certifications
      </h2>
      <div className="max-w-3xl mx-auto">
        <div className="bg-slate-800/50 rounded-lg border border-slate-700 p-6">
          <ul className="space-y-4">
            {certsData.map((cert, index) => (
              <li key={index} className="flex justify-between items-baseline">
                <span className="font-semibold text-slate-200">{cert.name} - <span className="text-cyan-400">{cert.issuer}</span></span>
                <span className="text-sm text-slate-400">{cert.year}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
