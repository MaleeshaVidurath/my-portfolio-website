import React from 'react';
import { CodeIcon, GlobeIcon, UsersIcon } from 'lucide-react';
export const About = () => {
  return <section id="about" className="py-20 bg-white dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            About Me
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              I'm a passionate full-stack developer with experience in building
              complete web applications from concept to deployment. With a
              strong foundation in both front-end and back-end technologies, I
              create solutions that are not only functional but also intuitive
              and user-friendly.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
              My journey in software development started 5 years ago, and since
              then, I've worked on various projects ranging from small business
              websites to complex enterprise applications. I'm constantly
              learning and adapting to new technologies to stay at the forefront
              of web development.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <CodeIcon size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Clean Code
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I write maintainable, scalable, and well-documented code
                  following best practices.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <UsersIcon size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  User-Centered
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I prioritize user experience, creating intuitive interfaces
                  that solve real problems.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <GlobeIcon size={24} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  End-to-End
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  From database design to front-end polish, I handle all aspects
                  of application development.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 dark:text-blue-400">
                    <path d="M12 2v4"></path>
                    <path d="M12 18v4"></path>
                    <path d="M4.93 4.93l2.83 2.83"></path>
                    <path d="M16.24 16.24l2.83 2.83"></path>
                    <path d="M2 12h4"></path>
                    <path d="M18 12h4"></path>
                    <path d="M4.93 19.07l2.83-2.83"></path>
                    <path d="M16.24 7.76l2.83-2.83"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  Problem Solver
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I enjoy tackling complex challenges and finding efficient,
                  elegant solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};