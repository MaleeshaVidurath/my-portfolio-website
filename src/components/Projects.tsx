import React from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
const Projects = () => {
  const projects = [{
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart functionality, payment processing, and user authentication.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, task assignment, and progress tracking features.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    technologies: ['React', 'Firebase', 'Material UI', 'Redux'],
    liveLink: '#',
    githubLink: '#'
  }, {
    title: 'Health & Fitness Tracker',
    description: 'A comprehensive health and fitness tracking application with workout plans, nutrition tracking, and progress visualization.',
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'Node.js', 'Express', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#'
  }];
  return <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            My Projects
          </h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            expertise
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => <span key={i} className="px-3 py-1 bg-indigo-100 text-indigo-600 text-sm font-medium rounded-full">
                      {tech}
                    </span>)}
                </div>
                <div className="flex space-x-4">
                  <a href={project.liveLink} className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium" target="_blank" rel="noopener noreferrer">
                    <ExternalLinkIcon size={18} className="mr-1" />
                    Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center text-gray-700 hover:text-gray-900 font-medium" target="_blank" rel="noopener noreferrer">
                    <GithubIcon size={18} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors" target="_blank" rel="noopener noreferrer">
            See More on GitHub
          </a>
        </div>
      </div>
    </section>;
};
export default Projects;