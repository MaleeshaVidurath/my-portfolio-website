import React from 'react';
export const Skills = () => {
  const frontendSkills = [{
    name: 'React',
    level: 90
  }, {
    name: 'JavaScript',
    level: 85
  }, {
    name: 'TypeScript',
    level: 80
  }, {
    name: 'HTML/CSS',
    level: 95
  }, {
    name: 'Tailwind CSS',
    level: 85
  }];
  const backendSkills = [{
    name: 'Node.js',
    level: 85
  }, {
    name: 'Express',
    level: 80
  }, {
    name: 'MongoDB',
    level: 75
  }, {
    name: 'SQL',
    level: 70
  }, {
    name: 'GraphQL',
    level: 65
  }];
  const otherSkills = ['Git & GitHub', 'Docker', 'AWS', 'CI/CD', 'Jest', 'Agile Methodologies', 'RESTful APIs', 'Responsive Design', 'Performance Optimization', 'Security Best Practices'];
  return <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here's an overview of my technical skills and the technologies I
            work with to build robust, scalable, and user-friendly applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">
              Frontend Development
            </h3>
            <div className="space-y-6">
              {frontendSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                    <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-300" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white">
              Backend Development
            </h3>
            <div className="space-y-6">
              {backendSkills.map(skill => <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
                    <div className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-300" style={{
                  width: `${skill.level}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-white text-center">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {otherSkills.map(skill => <span key={skill} className="bg-white dark:bg-slate-700 px-4 py-2 rounded-full text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-600 shadow-sm transition-colors">
                {skill}
              </span>)}
          </div>
        </div>
      </div>
    </section>;
};