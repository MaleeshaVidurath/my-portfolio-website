import React from 'react';
import { ArrowRightIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
export const Hero = () => {
  return <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-slate-900 dark:text-white">
              Maleesha Vidurath
              <span className="text-blue-600 dark:text-blue-400 block mt-2">
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
              I craft robust and scalable applications with modern technologies,
              focusing on clean code and exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-6 py-3 rounded-md font-medium flex items-center gap-2 transition-colors">
                View My Work
                <ArrowRightIcon size={18} />
              </a>
              <a href="#contact" className="border border-slate-300 dark:border-slate-600 hover:border-blue-600 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-6 py-3 rounded-md font-medium transition-colors dark:text-white">
                Contact Me
              </a>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <GithubIcon size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                <LinkedinIcon size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 absolute top-4 left-4 opacity-20 dark:opacity-10 blur-xl"></div>
              <img src="https://images.unsplash.com/photo-1596003906949-67221c37965c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Developer portrait" className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-lg relative z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};