import React from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
const Hero = () => {
  return <section id="home" className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-yellow-300">Alex Johnson</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Full Stack Developer specializing in building exceptional digital
            experiences
          </p>
          <div className="flex space-x-4 justify-center mb-10">
            <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all" aria-label="GitHub">
              <GithubIcon size={24} />
            </a>
            <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all" aria-label="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
            <a href="#" className="p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all" aria-label="Twitter">
              <TwitterIcon size={24} />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-gray-100 transition-colors">
              Contact Me
            </a>
            <a href="#projects" className="px-8 py-3 bg-transparent border border-white font-medium rounded-md hover:bg-white hover:bg-opacity-10 transition-colors">
              View My Work
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDownIcon size={32} />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;