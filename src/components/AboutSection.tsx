import React from 'react';
import { Clock, MapPin, Briefcase, GraduationCap } from 'lucide-react';
export function AboutSection() {
  return <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
              <p>
                I'm a passionate full-stack developer with over 5 years of
                experience building web applications. My journey in tech started
                with a curiosity about how websites work, which led me to dive
                deep into both frontend and backend technologies.
              </p>
              <p>
                I specialize in creating efficient, scalable, and user-friendly
                applications. My approach combines technical expertise with
                creative problem-solving to deliver solutions that exceed
                expectations.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source, or sharing my knowledge through
                blog posts and mentoring.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-2" size={20} />
                <span className="text-slate-600 dark:text-slate-300">
                  San Francisco, CA
                </span>
              </div>
              <div className="flex items-center">
                <Clock className="text-blue-600 mr-2" size={20} />
                <span className="text-slate-600 dark:text-slate-300">
                  Full-time Available
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-6">Experience & Education</h3>
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-blue-600 pb-8">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <Briefcase size={14} className="text-white" />
                </div>
                <h4 className="text-xl font-bold">
                  Senior Full-Stack Developer
                </h4>
                <p className="text-blue-600">2020 - Present</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  Leading development of enterprise web applications using
                  React, Node.js, and AWS.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-600 pb-8">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <Briefcase size={14} className="text-white" />
                </div>
                <h4 className="text-xl font-bold">Full-Stack Developer</h4>
                <p className="text-blue-600">2018 - 2020</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  Built and maintained web applications for various clients
                  using modern JavaScript frameworks.
                </p>
              </div>
              <div className="relative pl-8 border-l-2 border-blue-600">
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                  <GraduationCap size={14} className="text-white" />
                </div>
                <h4 className="text-xl font-bold">B.S. Computer Science</h4>
                <p className="text-blue-600">2014 - 2018</p>
                <p className="text-slate-600 dark:text-slate-300 mt-2">
                  University of Technology, with focus on software engineering
                  and web development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}