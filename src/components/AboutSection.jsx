import React from 'react';

const AboutSection = () => {
  const skills = [
    { 
      name: "HTML", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", 
      category: "Frontend" 
    },
    { 
      name: "CSS", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", 
      category: "Frontend" 
    },
    { 
      name: "Tailwind", 
      icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4", 
      category: "Frontend" 
    },
    { 
      name: "React", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", 
      category: "Frontend" 
    },
    { 
      name: "Next.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", 
      category: "Frontend" 
    },
    { 
      name: "TypeScript", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", 
      category: "Frontend" 
    },
    { 
      name: "PHP", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg", 
      category: "Backend" 
    },
    { 
      name: "Laravel", 
      icon: "https://cdn.simpleicons.org/laravel/FF2D20", 
      category: "Backend" 
    },
    { 
      name: "MySQL", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", 
      category: "Backend" 
    },
    { 
      name: "Python", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", 
      category: "Backend" 
    },
    { 
      name: "Node.js", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", 
      category: "Backend" 
    },
    { 
      name: "Docker", 
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", 
      category: "DevOps" 
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Baris 1: My Journey dan Experience dengan Timeline */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* My Journey - Kiri */}
          <div className="space-y-6 bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-slate-400 transition-colors duration-200 w-full">
            <h2 className="text-4xl font-bold text-white mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                The intelligence software engineers to achieve task-driven passion for such development and data collection. 
                We operate in space, capabilities, structures, and processes at a particular geographic scale and enhance development.
              </p>
              <p>
                Currently we have two dedicated designs and teams who partnering in developing the Performance Engineering 
                Platforms to facilitate or develop, to create an essential and innovative strategy, agile technologies and 
                solutions with development in innovation.
              </p>
              <p>
                In large markets, innovations with collaboration help solve and avoid problems, with opportunities to build 
                functional and technical development. We gain a core network of resources and projects that make a positive impact.
              </p>
            </div>
          </div>

          {/* Experience dengan Timeline - Kanan */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-600"></div>
              
              {/* Experience 1 - Internship */}
              <div className="relative flex items-start mb-8">
                {/* Timeline Dot */}
                <div className="absolute left-4 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
                
                {/* Content */}
                <div className="ml-12 bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-blue-400 transition-colors duration-200 w-full">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">Front-end Web Developer</h4>
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Internship</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">August 2025</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Responsible for Web UI development using React.js and Tailwind CSS, and responsible for 
                    integrating data from the back-end API.
                  </p>
                </div>
              </div>

              {/* Experience 2 - Freelance */}
              <div className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-4 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900 z-10"></div>
                
                {/* Content */}
                <div className="ml-12 bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-green-400 transition-colors duration-200 w-full">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">Freelance Web Developer</h4>
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Freelance</span>
                  </div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-400 text-sm">Self-Employed • March 2023</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Developed a comprehensive book website using PHP native and REST API, delivering a complete e-commerce solution.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Baris 2: Skills Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Skills & Technologies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 text-center hover:border-blue-400 transition-all duration-200 group hover:transform hover:scale-105"
              >
                <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-200">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <h4 className="text-white font-semibold mb-1 text-sm">{skill.name}</h4>
                <span className="text-gray-400 text-xs">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;