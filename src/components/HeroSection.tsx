import React from 'react';
import { ArrowRight, Linkedin, Twitter, BoxIcon } from 'lucide-react';
export function HeroSection() {
  return <section id="home" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="block">Hi, I'm</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-transparent bg-clip-text">
                Full-Stack Developer
              </span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              I build responsive, accessible, and performant web applications
              with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                View My Work <ArrowRight size={20} className="ml-2" />
              </a>
              <a href="#contact" className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors">
                Contact Me
              </a>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <a href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" aria-label="BoxIcon">
                <div size={24} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" aria-label="Twitter">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl">
                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80" alt="Professional portrait" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-slate-800 px-6 py-2 rounded-lg shadow-lg">
                <span className="text-blue-600 font-medium">
                  Available for hire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}