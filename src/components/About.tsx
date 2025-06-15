
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-dark-gray/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyber-pink">
          &gt; ABOUT ME
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="cyber-border rounded-lg p-6 bg-black/50">
              <h3 className="text-2xl font-semibold mb-4 text-cyber-cyan">Personal Information</h3>
              <div className="space-y-3 font-mono">
                <div className="flex">
                  <span className="text-gray-400 w-24">Student:</span>
                  <span className="text-white">BTech (CSE) - VIT Vellore</span>
                </div>
                <div className="flex">
                  <span className="text-gray-400 w-24">Batch:</span>
                  <span className="text-white">2023-27</span>
                </div>
                <div className="flex">
                  <span className="text-gray-400 w-24">CGPA:</span>
                  <span className="text-cyber-pink font-semibold">8.5+</span>
                </div>
                <div className="flex">
                  <span className="text-gray-400 w-24">Location:</span>
                  <span className="text-white">Vellore, India</span>
                </div>
              </div>
            </div>

            <div className="cyber-border rounded-lg p-6 bg-black/50">
              <h3 className="text-xl font-semibold mb-4 text-cyber-cyan">Current Status</h3>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400">Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-cyber-pink mb-6">Professional Summary</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                A highly motivated and versatile <span className="text-cyber-cyan font-semibold">Full Stack Engineer</span> with 
                a strong foundation in Data Structures and Algorithms, proficient in Java, Python, JavaScript, and TypeScript.
              </p>
              <p>
                Possesses comprehensive experience in web and API development, utilizing modern frameworks and technologies 
                such as <span className="text-cyber-pink">Next.js</span>, <span className="text-cyber-pink">React.js</span>, 
                <span className="text-cyber-pink"> Express.js</span>, and <span className="text-cyber-pink">MongoDB</span>.
              </p>
              <p>
                Currently expanding expertise in cloud technologies and DevOps practices, with hands-on experience in 
                <span className="text-cyber-cyan"> Docker</span>, <span className="text-cyber-cyan">Kubernetes</span>, 
                and <span className="text-cyber-cyan">AWS</span>.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 cyber-border rounded-lg bg-black/30">
                <div className="text-2xl font-bold text-cyber-pink">10+</div>
                <div className="text-sm text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 cyber-border rounded-lg bg-black/30">
                <div className="text-2xl font-bold text-cyber-cyan">15+</div>
                <div className="text-sm text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
