
import React from 'react';
import Section from './Section';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'AKQA (Part of WPP Group)',
      position: 'SDE Intern',
      location: 'Gurgaon',
      duration: '01/2025 - 04/2025',
      description: "Interned at AKQA as an Intern and developed an internal 'Leave Management System' for the company including both Frontend and Backend.",
      techStack: ['TypeScript', 'ExpressJS', 'ReactJS', 'Postgres', 'Sequelize ORM'],
      current: false
    },
    {
      company: 'Google Developer Student Clubs',
      position: 'FullStack Developer',
      location: 'Vellore',
      duration: '03/2024 - Present',
      description: 'Senior Core member of the prestigious Google Developer Student Clubs. Core group responsible for organizing annual Hackathon and other programming related events.',
      techStack: ['React', 'Node.js', 'MongoDB', 'JavaScript', 'Git'],
      current: true
    }
  ];

  return (
    <Section id="experience" className="bg-dark-gray/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyber-pink">
          &gt; EXPERIENCE
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyber-pink to-cyber-cyan"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-auto md:-right-2 w-4 h-4 bg-cyber-pink rounded-full border-4 border-black transform -translate-x-1/2 md:translate-x-1/2">
                {exp.current && (
                  <div className="absolute inset-0 bg-cyber-pink rounded-full animate-ping"></div>
                )}
              </div>

              <div className="ml-12 md:ml-0 cyber-border rounded-lg p-6 bg-black/70 hover:scale-105 transition-all duration-300">
                {/* Company Header */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-cyber-cyan">{exp.company}</h3>
                    <h4 className="text-lg text-cyber-pink">{exp.position}</h4>
                  </div>
                  {exp.current && (
                    <span className="inline-block px-3 py-1 text-xs bg-green-500/20 text-green-400 border border-green-500/40 rounded-full mt-2 md:mt-0">
                      CURRENT
                    </span>
                  )}
                </div>

                {/* Duration and Location */}
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-gray-400 mb-4">
                  <span>{exp.duration}</span>
                  <span>{exp.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-cyber-pink/20 text-cyber-pink border border-cyber-pink/40 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience;
