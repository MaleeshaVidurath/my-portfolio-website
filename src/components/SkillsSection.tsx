import React from 'react';
import { Code, Server, Layout, Database, Globe, Cpu } from 'lucide-react';
export function SkillsSection() {
  const skills = [{
    category: 'Frontend',
    icon: <Layout />,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux', 'HTML/CSS']
  }, {
    category: 'Backend',
    icon: <Server />,
    items: ['Node.js', 'Express', 'NestJS', 'Python', 'Django', 'RESTful APIs']
  }, {
    category: 'Database',
    icon: <Database />,
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma', 'Mongoose']
  }, {
    category: 'DevOps',
    icon: <Cpu />,
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'GitHub Actions', 'Terraform']
  }, {
    category: 'Programming',
    icon: <Code />,
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#', 'Go']
  }, {
    category: 'Other',
    icon: <Globe />,
    items: ['GraphQL', 'WebSockets', 'Testing', 'Agile', 'Git', 'UI/UX']
  }];
  return <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My expertise spans across the full stack development spectrum,
            allowing me to build complete solutions from front to back.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => <div key={index} className="bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400 mr-3">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold">{skillGroup.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {skillGroup.items.map((skill, skillIndex) => <span key={skillIndex} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-sm text-slate-700 dark:text-slate-300">
                    {skill}
                  </span>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}