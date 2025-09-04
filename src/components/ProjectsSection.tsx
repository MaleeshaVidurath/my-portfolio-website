import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
export function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, checkout, and payment integration.',
    image: 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'fullstack',
    liveLink: '#',
    githubLink: '#'
  }, {
    id: 2,
    title: 'Dashboard Analytics',
    description: 'Interactive dashboard with real-time analytics, data visualization, and user management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['React', 'D3.js', 'Firebase', 'Tailwind'],
    category: 'frontend',
    liveLink: '#',
    githubLink: '#'
  }, {
    id: 3,
    title: 'API Service',
    description: 'RESTful API service with authentication, rate limiting, and comprehensive documentation.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Swagger'],
    category: 'backend',
    liveLink: '#',
    githubLink: '#'
  }, {
    id: 4,
    title: 'Social Media App',
    description: 'Feature-rich social networking application with real-time messaging and content sharing.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    tags: ['React', 'Socket.io', 'Redux', 'MongoDB'],
    category: 'fullstack',
    liveLink: '#',
    githubLink: '#'
  }, {
    id: 5,
    title: 'Task Management',
    description: 'Drag-and-drop task management system with team collaboration features.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    category: 'fullstack',
    liveLink: '#',
    githubLink: '#'
  }, {
    id: 6,
    title: 'Content Management System',
    description: 'Headless CMS with customizable content types and API-first approach.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['Node.js', 'GraphQL', 'MongoDB', 'React'],
    category: 'backend',
    liveLink: '#',
    githubLink: '#'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  return <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            A selection of my recent work across various domains and
            technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {['all', 'frontend', 'backend', 'fullstack'].map(category => <button key={category} onClick={() => setFilter(category)} className={`px-4 py-2 rounded-full capitalize transition-colors ${filter === category ? 'bg-blue-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                {category}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-white dark:bg-slate-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-md text-xs">
                      {tag}
                    </span>)}
                </div>
                <div className="flex justify-between">
                  <a href={project.githubLink} className="flex items-center text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" aria-label="View source code">
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  <a href={project.liveLink} className="flex items-center text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400" aria-label="View live demo">
                    <ExternalLink size={18} className="mr-1" /> Demo
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}