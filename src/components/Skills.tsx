
import React from 'react';
import Section from './Section';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++ / C'],
      color: 'cyber-pink'
    },
    {
      title: 'Frontend Technologies',
      skills: ['React.js', 'Next.js', 'HTML5', 'CSS3'],
      color: 'cyber-cyan'
    },
    {
      title: 'Backend Technologies',
      skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'Django'],
      color: 'cyber-purple'
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Redis'],
      color: 'cyber-pink'
    },
    {
      title: 'AI/ML',
      skills: ['Langchain', 'Langgraph', 'Scikit-learn', 'numpy', 'pandas'],
      color: 'cyber-cyan'
    },
    {
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'AWS', 'Vercel', 'CI/CD', 'Prometheus', 'Grafana'],
      color: 'cyber-purple'
    },
    {
      title: 'Other Technologies',
      skills: ['WebRTC', 'WebSockets', 'Redis', 'Kafka', 'Git', 'Web Scraping'],
      color: 'cyber-pink'
    }
  ];

  return (
    <Section id="skills" className="bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyber-pink">
          &gt; SKILLS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="cyber-border rounded-lg p-6 bg-dark-gray/50 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={`text-xl font-semibold mb-4 text-${category.color}`}>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-sm font-mono border border-${category.color} text-${category.color} bg-black/50 hover:bg-${category.color} hover:text-black transition-all duration-300 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8 text-cyber-cyan">Core Proficiencies</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { skill: 'Full Stack Development', level: 90 },
              { skill: 'JavaScript/TypeScript', level: 95 },
              { skill: 'React/Next.js', level: 88 },
              { skill: 'Node.js/Express', level: 85 },
              { skill: 'Database Design', level: 82 },
              { skill: 'DevOps/Cloud', level: 75 }
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">{item.skill}</span>
                  <span className="text-cyber-pink">{item.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyber-pink to-cyber-cyan h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Skills;
