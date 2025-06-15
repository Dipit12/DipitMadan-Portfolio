
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Dipit Madan. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Dipit12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-pink transition-colors duration-300 p-2"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/dipit-madan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-cyan transition-colors duration-300 p-2"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Quick Contact */}
          <div className="text-center md:text-right">
            <a
              href="mailto:dipitmadan@gmail.com"
              className="text-cyber-cyan hover:text-cyber-pink transition-colors duration-300 text-sm"
            >
              dipitmadan@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
