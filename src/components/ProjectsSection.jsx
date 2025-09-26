import React from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Notes App",
      category: "Productivity & Collaboration",
      description: "A comprehensive note-taking application with modern UI and seamless user experience.",
      image: "/images/projects/note-app.png",
      technologies: ["JavaScript", "React", "Node.js"],
      github: "https://github.com/ImNizamudin/notes-app",
      demo: "https://notesapp.radarku.biz.id",
      featured: true
    },
    {
      title: "POS MI Frontend",
      category: "POS System", 
      description: "Point of Sale system frontend with modern design and intuitive user interface.",
      image: "/images/projects/posmi-frontend.png",
      technologies: ["React", "Tailwind CSS", "API Integration"],
      github: "https://github.com/ImNizamudin/pos-mi-frontend",
      demo: null,
      featured: true
    },
    {
      title: "POS MI API",
      category: "Backend",
      description: "RESTful API backend for Point of Sale system with comprehensive functionality.",
      image: "/images/projects/pos-api-microservice.png", 
      technologies: ["PHP", "Laravel", "MySQL", "REST API"],
      github: "https://github.com/ImNizamudin/pos-mi-api",
      demo: null,
      featured: false
    },
    {
      title: "SafeKit",
      category: "Education",
      description: "Safety education platform with interactive content and user management.",
      image: "/images/projects/safekit.png",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/ImNizamudin/safekit",
      demo: null,
      featured: true
    },
    {
      title: "SkoLearn",
      category: "Education",
      description: "Educational platform for online learning with video streaming and user management.",
      image: "/images/projects/skolearn.png",
      technologies: ["React", "Laravel", "MySQL"],
      github: "https://github.com/ImNizamudin/skolearn", 
      demo: null,
      featured: false
    },
    {
      title: "Travel Blog",
      category: "Entertainment",
      description: "Interactive travel blog platform with beautiful UI and content management.",
      image: "/images/projects/travel-blog.png",
      technologies: ["React", "GitHub Pages", "CSS"],
      github: "https://github.com/ImNizamudin/travel-blog",
      demo: "https://imnizamudin.github.io/travel-blog/",
      featured: false
    },
    {
      title: "DetectNet", 
      category: "Computer Vision",
      description: "Object detection system using deep learning for real-time image recognition and analysis.",
      image: "/images/projects/detectnet.png",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      github: "https://github.com/Nazriellesmono/DetectNet",
      demo: null,
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
            Proj<span className="text-blue-400">ects</span>
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">A showcase of my work in web development, AI, and software engineering</p>
        </div>

        {/* Project Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 bg-slate-900 p-2 rounded-lg border border-slate-700">
            {['All', 'Productivity', 'POS System', 'Education', 'Entertainment', 'Computer Vision'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-blue-600 hover:text-white text-gray-300"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative bg-slate-900 border border-slate-700 rounded-lg overflow-hidden hover:border-blue-400 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
              {project.featured && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                </div>
              )}
              
              <div className="relative h-48 bg-slate-800 overflow-hidden">
                {/* Gambar Proyek */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback jika gambar tidak ditemukan
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback jika gambar tidak ada */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center hidden">
                  <div className="text-center">
                    <Code className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                    <p className="text-gray-300 font-medium">{project.title}</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <span className="text-xs bg-slate-800 text-gray-400 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs bg-slate-800 text-blue-400 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 group/github"
                    >
                      <Github className="w-4 h-4 group-hover/github:scale-110 transition-transform" />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 group/demo"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/demo:scale-110 transition-transform" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                  {!project.github && !project.demo && (
                    <span className="text-gray-500 text-sm">Code Available</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-slate-900 border border-slate-700 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in Working Together?</h3>
            <p className="text-gray-400 mb-6">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a 
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a 
                href="https://github.com/ImNizamudin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 px-6 py-3 border border-slate-600 rounded-lg hover:border-slate-500"
              >
                <Github className="w-4 h-4" />
                View All Repositories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;