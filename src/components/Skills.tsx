import React from 'react';
const Skills = () => {
  const frontendSkills = [{
    name: 'HTML/CSS',
    level: 90
  }, {
    name: 'JavaScript',
    level: 85
  }, {
    name: 'React',
    level: 90
  }, {
    name: 'TypeScript',
    level: 80
  }, {
    name: 'Next.js',
    level: 75
  }];
  const backendSkills = [{
    name: 'Node.js',
    level: 85
  }, {
    name: 'Express',
    level: 80
  }, {
    name: 'Python',
    level: 75
  }, {
    name: 'Django',
    level: 70
  }, {
    name: 'SQL',
    level: 80
  }];
  const otherSkills = [{
    name: 'Git',
    level: 85
  }, {
    name: 'Docker',
    level: 75
  }, {
    name: 'AWS',
    level: 70
  }, {
    name: 'CI/CD',
    level: 65
  }, {
    name: 'Agile',
    level: 80
  }];
  const SkillBar = ({
    name,
    level
  }) => <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className="bg-indigo-600 h-2.5 rounded-full" style={{
        width: `${level}%`
      }}></div>
      </div>
    </div>;
  return <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Skills
          </h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Here are my technical skills and proficiency levels in various
            technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Frontend Development
            </h3>
            {frontendSkills.map(skill => <SkillBar key={skill.name} name={skill.name} level={skill.level} />)}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Backend Development
            </h3>
            {backendSkills.map(skill => <SkillBar key={skill.name} name={skill.name} level={skill.level} />)}
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Other Skills
            </h3>
            {otherSkills.map(skill => <SkillBar key={skill.name} name={skill.name} level={skill.level} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default Skills;