
import React, { useState } from 'react';
import Section from './Section';
import { Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent! Thank you for reaching out.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Section id="contact" className="bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyber-pink">
          &gt; CONTACT
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="cyber-border rounded-lg p-6 bg-dark-gray/50">
              <h3 className="text-2xl font-semibold mb-6 text-cyber-cyan">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-cyber-pink rounded-full"></div>
                  <div>
                    <span className="text-gray-400">Phone:</span>
                    <span className="text-white ml-2">+91 8368355407</span>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-cyber-cyan rounded-full"></div>
                  <div>
                    <span className="text-gray-400">Email:</span>
                    <a href="mailto:dipitmadan@gmail.com" className="text-cyber-cyan ml-2 hover:text-cyber-pink transition-colors">
                      dipitmadan@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-cyber-purple rounded-full"></div>
                  <div>
                    <span className="text-gray-400">Location:</span>
                    <span className="text-white ml-2">Vellore, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="cyber-border rounded-lg p-6 bg-dark-gray/50">
              <h3 className="text-xl font-semibold mb-4 text-cyber-cyan">Connect With Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Dipit12"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-black transition-all duration-300 rounded"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/dipit-madan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black transition-all duration-300 rounded"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="cyber-border rounded-lg p-6 bg-dark-gray/50">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <h4 className="text-lg font-semibold text-green-400">Available for Work</h4>
                  <p className="text-gray-400 text-sm">Open to internship and full-time opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="cyber-border rounded-lg p-6 bg-dark-gray/50">
            <h3 className="text-2xl font-semibold mb-6 text-cyber-pink">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded focus:border-cyber-pink focus:outline-none text-white"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded focus:border-cyber-cyan focus:outline-none text-white"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-600 rounded focus:border-cyber-purple focus:outline-none text-white resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cyber-button"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
