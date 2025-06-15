
import React from 'react';
import TypingAnimation from './TypingAnimation';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Avatar Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-cyber-pink to-cyber-cyan p-1 animate-glow">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <span className="text-4xl font-bold text-cyber-pink">DM</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
          <span className="text-cyber-pink">&gt;</span> DIPIT MADAN
        </h1>

        {/* Subtitle with Typing Animation */}
        <div className="text-xl md:text-2xl lg:text-3xl mb-6 text-gray-300 h-12 flex items-center justify-center">
          <TypingAnimation 
            text="Full Stack Engineer & Computer Science Student"
            speed={80}
            className="text-cyber-cyan"
          />
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto">
          Building innovative solutions with modern web technologies
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('#projects')}
            className="cyber-button w-full sm:w-auto"
          >
            VIEW PROJECTS
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="cyber-button w-full sm:w-auto border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black"
          >
            GET IN TOUCH
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyber-pink rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyber-pink rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
