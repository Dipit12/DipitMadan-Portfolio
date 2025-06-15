
import React from 'react';
import Section from './Section';

const Education: React.FC = () => {
  const education = [
    {
      institution: 'Vellore Institute of Technology, Vellore',
      degree: 'BTech (Computer Science Engineering)',
      duration: '2023 - 2027',
      cgpa: '8.5+',
      status: 'current',
      description: 'Specializing in Full Stack Development, Data Structures & Algorithms, and Modern Web Technologies.',
      highlights: ['Dean\'s List', 'GDSC Member', 'Active in Tech Communities']
    },
    {
      institution: 'Presidium, Gurgaon',
      degree: 'CBSE X & XII',
      duration: 'Completed 03/2023',
      cgpa: null,
      status: 'completed',
      description: 'Completed secondary education with focus on Mathematics and Computer Science.',
      highlights: ['Mathematics Excellence', 'Computer Science Foundation']
    }
  ];

  return (
    <Section id="education" className="bg-dark-gray/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyber-pink">
          &gt; EDUCATION
        </h2>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="cyber-border rounded-lg p-6 bg-black/70 hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-cyber-cyan mb-2">{edu.institution}</h3>
                  <h4 className="text-lg text-cyber-pink mb-2">{edu.degree}</h4>
                  <p className="text-gray-300 mb-3">{edu.description}</p>
                </div>
                
                <div className="lg:ml-8 lg:text-right">
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm text-gray-400">{edu.duration}</span>
                    {edu.cgpa && (
                      <span className="text-cyber-pink font-semibold">CGPA: {edu.cgpa}</span>
                    )}
                    {edu.status === 'current' && (
                      <span className="inline-block px-3 py-1 text-xs bg-green-500/20 text-green-400 border border-green-500/40 rounded-full">
                        CURRENT
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {edu.highlights.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-3 py-1 text-xs bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 rounded-full"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
