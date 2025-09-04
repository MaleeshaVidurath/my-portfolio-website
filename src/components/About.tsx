import React from 'react';
import { CodeIcon, ServerIcon, PenToolIcon } from 'lucide-react';
const About = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Developer working on code" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Full Stack Developer based in San Francisco
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a passionate full stack developer with over 5 years of
              experience building web applications. I enjoy turning complex
              problems into simple, beautiful and intuitive designs. When I'm
              not coding or pushing pixels, you'll find me cooking, gardening or
              exploring the outdoors.
            </p>
            <p className="text-gray-600 mb-8">
              My goal is to build products that are not only functional and
              performant but also provide great user experiences. I'm constantly
              learning new technologies and techniques to improve my skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <CodeIcon className="text-indigo-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Frontend</h4>
                <p className="text-gray-600 text-sm">
                  Creating beautiful, responsive interfaces
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <ServerIcon className="text-indigo-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Backend</h4>
                <p className="text-gray-600 text-sm">
                  Building robust APIs and services
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="bg-indigo-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <PenToolIcon className="text-indigo-600" size={24} />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">Design</h4>
                <p className="text-gray-600 text-sm">
                  Crafting user-centered experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;