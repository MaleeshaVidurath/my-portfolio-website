import React, { lazy } from 'react';
import { BriefcaseIcon, CalendarIcon } from 'lucide-react';
const Experience = () => {
  const experiences = [{
    company: 'Tech Innovations Inc.',
    role: 'Senior Full Stack Developer',
    duration: '2021 - Present',
    description: "Lead development of the company's flagship SaaS product. Architect and implement new features, mentor junior developers, and collaborate with product and design teams.",
    achievements: ['Rebuilt the frontend using React and TypeScript, improving performance by 40%', 'Implemented CI/CD pipeline reducing deployment time by 60%', 'Led migration from monolith to microservices architecture'],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
  }, {
    company: 'WebSolutions Co.',
    role: 'Full Stack Developer',
    duration: '2018 - 2021',
    description: 'Developed and maintained multiple client web applications. Worked across the entire stack from database design to frontend implementation.',
    achievements: ['Created a custom CMS that increased content team productivity by 35%', 'Optimized database queries resulting in 50% faster page load times', 'Built RESTful APIs consumed by web and mobile applications'],
    technologies: ['JavaScript', 'React', 'Express', 'MongoDB', 'Redis']
  }, {
    company: 'Digital Creations',
    role: 'Frontend Developer',
    duration: '2016 - 2018',
    description: 'Focused on creating responsive, accessible, and performant user interfaces for various client websites and web applications.',
    achievements: ['Implemented responsive designs for 15+ client websites', 'Reduced bundle size by 30% through code splitting and lazy loading', 'Developed reusable component library used across multiple projects'],
    technologies: ['HTML/CSS', 'JavaScript', 'React', 'SASS', 'Webpack']
  }];
  return <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and the companies I've worked with
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>
          {experiences.map((exp, index) => <div key={index} className={`mb-12 md:mb-0 relative ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white"></div>
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:float-left' : 'md:float-right'} mb-8`}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <CalendarIcon size={16} className="mr-1" />
                      {exp.duration}
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <BriefcaseIcon size={18} className="text-indigo-600 mr-2" />
                    <span className="font-medium text-indigo-600">
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    {exp.achievements.map((achievement, i) => <li key={i} className="mb-1">
                        {achievement}
                      </li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => <span key={i} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded">
                        {tech}
                      </span>)}
                  </div>
                </div>
              </div>
              <div className="clear-both"></div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Experience;