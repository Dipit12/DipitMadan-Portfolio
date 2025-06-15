
import React, { useState } from 'react';
import Section from './Section';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Anonymous Video Chat Platform',
      description: 'Developed an anonymous, one-on-one video chat platform, conceptually similar to Omegle. The application leverages WebRTC for real-time peer-to-peer video and audio communication and WebSockets for signaling, user matching, and managing connection states.',
      technologies: ['WebRTC', 'WebSockets', 'JavaScript', 'Node.js'],
      features: ['Real-time video chat', 'Anonymous matching', 'Peer-to-peer communication'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/Dipit12/RealTimeChatApp'
    },
    {
      title: 'Ask Your PDF',
      description: 'A Python/Flask web application that allows users to upload a PDF file and ask questions about its content. The application extracts text from the uploaded PDF, processes it in chunks, and utilizes OpenAI\'s GPT-3.5 Turbo model to provide concise answers based on the extracted text.',
      technologies: ['Python', 'Flask', 'OpenAI GPT-3.5', 'PDF Processing'],
      features: ['PDF text extraction', 'AI-powered Q&A', 'Document analysis'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/Dipit12/Ask_Your_PDF'
    },
    {
      title: 'AI Research Assistant',
      description: 'Auto Research AI is a full-stack application that allows users to input any research query and receive high-quality, summarized answers using web search data and generative AI. The platform streamlines the research process by combining SERP results with LLM-based summarization.',
      technologies: ['Full-stack', 'AI/ML', 'Web scraping', 'LLM integration'],
      features: ['Automated research', 'AI summarization', 'SERP integration'],
      category: 'AI/ML',
      githubUrl: 'https://github.com/Dipit12/Auto-Research-AI'
    },
    {
      title: 'Stock Market Tracker',
      description: 'A stock market tracker made using Alphavantage API, that sends an SMS when a specific stock falls or goes up by X% using Twilio API. The message contains the percentage change along with a latest news article about the company using the News API.',
      technologies: ['Python', 'Alphavantage API', 'Twilio API', 'News API'],
      features: ['Real-time stock monitoring', 'SMS notifications', 'News integration'],
      category: 'API Integration',
      githubUrl: 'https://github.com/Dipit12/Stock-Market-Tracker'
    },
    {
      title: 'Automatic Spotify Playlist Builder',
      description: 'A tool that scrapes the Billboard 100 using Beautiful Soup, searches each song on Spotify and adds it to a playlist automatically.',
      technologies: ['Python', 'Beautiful Soup', 'Spotify API', 'Web scraping'],
      features: ['Billboard 100 scraping', 'Spotify integration', 'Automated playlist creation'],
      category: 'Automation',
      githubUrl: 'https://github.com/Dipit12/Billboard-scraper-and-Spotify-Project'
    }
  ];

  return (
    <Section id="projects" className="bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyber-pink">
          &gt; PROJECTS
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Category Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 text-xs bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/40 rounded-full">
                  {project.category}
                </span>
                <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="p-2 hover:text-cyber-pink transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <button className="p-2 hover:text-cyber-cyan transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              {/* Project Title */}
              <h3 className="text-xl font-semibold mb-3 text-cyber-pink group-hover:text-cyber-cyan transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-4">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-cyber-cyan mb-2">Key Features:</h4>
                <ul className="text-xs text-gray-400 space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-1 h-1 bg-cyber-pink rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded border border-gray-700 hover:border-cyber-pink hover:text-cyber-pink transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br from-cyber-pink/10 to-cyber-cyan/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Dipit12"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button inline-block"
          >
            VIEW MORE ON GITHUB
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
