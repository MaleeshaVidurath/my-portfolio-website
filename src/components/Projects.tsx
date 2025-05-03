import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export const Projects = () => {
  const projects = [{
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, payment processing, and user authentication.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    demoLink: '#',
    githubLink: '#'
  }, {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking features.',
    technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    demoLink: '#',
    githubLink: '#'
  }, {
    id: 3,
    title: 'Financial Dashboard',
    description: 'An interactive dashboard for tracking personal finances, investments, and spending patterns with data visualization.',
    technologies: ['TypeScript', 'Chart.js', 'Express', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    demoLink: '#',
    githubLink: '#'
  }, {
    id: 4,
    title: 'Social Media Platform',
    description: 'A social networking platform with user profiles, posts, comments, and real-time messaging capabilities.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
    demoLink: '#',
    githubLink: '#'
  }];
  return <section id="projects" className="py-20 bg-white dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in
            full-stack development. Each project demonstrates different aspects
            of my technical abilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => <div key={project.id} className="bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-600 transition-all duration-300 hover:-translate-y-1">
              <div className="h-60 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-center" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => <span key={tech} className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-3 py-1 rounded-full">
                      {tech}
                    </span>)}
                </div>
                <div className="flex gap-4">
                  <a href={project.demoLink} className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon size={18} />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white font-medium" target="_blank" rel="noopener noreferrer">
                    <GithubIcon size={18} />
                    View Code
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white font-medium px-6 py-3 rounded-md transition-colors">
            View All Projects
          </a>
        </div>
      </div>
    </section>;
};