import React from 'react';
import { GraduationCapIcon, CalendarIcon } from 'lucide-react';
export const Education = () => {
  const education = [{
    degree: "Bachelor's Degree in Computer Science",
    institution: 'University Name',
    duration: '2019 - 2023',
    description: 'Specialized in Software Engineering and Web Development. Completed coursework in algorithms, data structures, and full-stack development.',
    achievements: ["Dean's List 2020-2023", 'First Class Honours', 'Best Project Award']
  }, {
    degree: 'Advanced Level',
    institution: 'High School Name',
    duration: '2016 - 2018',
    description: 'Focused on Mathematics, Physics, and IT streams.',
    achievements: ['School Prefect', 'IT Society President']
  }, {
    degree: 'Ordinary Level',
    institution: 'School Name',
    duration: '2015',
    description: 'Completed with distinction passes in all subjects.',
    achievements: ['Best Performance in ICT']
  }];
  return <section id="education" className="py-20 bg-white dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Education
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => <div key={index} className="relative pl-8 md:pl-0 group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3 flex items-center md:justify-end">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <CalendarIcon size={18} />
                      <span>{edu.duration}</span>
                    </div>
                  </div>
                  <div className="md:w-2/3 relative">
                    <div className="absolute -left-11 md:-left-9 top-3 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full border-4 border-blue-600 dark:border-blue-500"></div>
                    <div className="absolute -left-9 md:-left-7 top-9 bottom-0 w-0.5 bg-blue-600 dark:bg-blue-500"></div>
                    <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg shadow-sm border border-slate-100 dark:border-slate-600">
                      <div className="flex items-start gap-3 mb-2">
                        <GraduationCapIcon size={24} className="text-blue-600 dark:text-blue-400 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                            {edu.degree}
                          </h3>
                          <p className="text-blue-600 dark:text-blue-400 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 mb-4">
                        {edu.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {edu.achievements.map((achievement, i) => <span key={i} className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm px-3 py-1 rounded-full">
                            {achievement}
                          </span>)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};