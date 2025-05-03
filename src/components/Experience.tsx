import React from 'react';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
export const Experience = () => {
  const experiences = [{
    position: 'Senior Full Stack Developer',
    company: 'Company Name',
    duration: '2022 - Present',
    description: 'Lead developer for enterprise web applications using React, Node.js, and cloud technologies.',
    responsibilities: ['Architected and implemented scalable solutions', 'Mentored junior developers', 'Improved application performance by 40%']
  }, {
    position: 'Full Stack Developer',
    company: 'Previous Company',
    duration: '2020 - 2022',
    description: 'Developed and maintained multiple web applications for clients across various industries.',
    responsibilities: ['Built responsive web applications', 'Implemented RESTful APIs', 'Integrated third-party services']
  }, {
    position: 'Junior Developer',
    company: 'First Company',
    duration: '2019 - 2020',
    description: 'Started career as a junior developer working on frontend development tasks.',
    responsibilities: ['Developed UI components', 'Fixed bugs and improved features', 'Collaborated with senior developers']
  }];
  return <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Experience
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => <div key={index} className="relative pl-8 md:pl-0 group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex items-center md:justify-end">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <CalendarIcon size={18} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 relative">
                    <div className="absolute -left-11 md:-left-9 top-3 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full border-4 border-blue-600 dark:border-blue-500"></div>
                    <div className="absolute -left-9 md:-left-7 top-9 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-500"></div>
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600">
                      <div className="flex items-start gap-3 mb-2">
                        <BriefcaseIcon size={24} className="text-blue-600 dark:text-blue-400 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {exp.position}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {exp.description}
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, i) => <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                            <span className="mt-2 w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                            {responsibility}
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};