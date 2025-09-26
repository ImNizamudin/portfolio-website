import React from 'react';
import { ChevronDown, MapPin, Github, Mail } from 'lucide-react';

const HeroSection = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Imag<MapPin className="w-5 h-5 mr-2" />e and Hey There */}
          <div className="relative flex flex-col items-center lg:items-start">
            {/* Image Container */}
            <div className="relative mb-8 mx-auto">
                {/* <div className="w-80 h-80 bg-gradient-to-br bg-slate-900 rounded-full overflow-hidden border-4 border-slate-700"> */}
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 
                  bg-gradient-to-br bg-slate-900 rounded-full overflow-hidden border-4 border-slate-700">
                    <img 
                        src="/images/nizam.png" 
                        alt="ImNizamudin"
                        className="w-full h-full object-contain object-top"
                    />
                </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-blue-500 rounded-full animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-purple-500 rounded-full animate-pulse delay-2000"></div>
            </div>

            {/* Hey There Text */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-blue-600/20 border border-blue-500/30 rounded-full px-6 py-2 mb-4">
                <span className="text-blue-400 font-medium text-sm">Hey there! 👋</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                I'm <span className="text-blue-400">Muhammad Nizamudin Mahfud</span>
              </h2>
            </div>
          </div>

          {/* Right Side - Description and Details */}
          <div className="space-y-6">
            {/* Title */}
            <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 leading-tight">
                    Web Developer & 
                    <span className="text-blue-400"> Software Engineering Student</span>
                </h1>
                <div className="flex items-center text-gray-400 mb-2">
                    {/* <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div> */}
                    <MapPin className="w-5 h-5 mr-2" />
                    <span className="text-sm">Based in Tulungagung, East Java, Indonesia</span>
                </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-md text-gray-300 leading-relaxed">
                Future Internet Engineering Technologist from PENS. A proactive Front-End Web Developer (Freelance) who is proficient in Python, IoT, and Network Administration. Committed to building high-quality, impactful digital solutions
              </p>
              
              <div className="bg-slate-800/50 border-l-4 border-blue-500 pl-4 py-2">
                <p className="text-sm text-gray-300 italic">
                  "Ready to create awesome web experiences."
                </p>
              </div>
            </div>

            {/* My Story Button */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button 
                    onClick={() => scrollToSection('projects')}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                    View My Work
                </button>
                <a 
                    href="https://github.com/ImNizamudin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 border border-gray-600 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-gray-300"
                >
                <Github size={20} />
                </a>
                <a 
                    // href={`mailto:nisamudin@gmail.com`}
                    onClick={() => scrollToSection('contact')}
                    className="p-3 border border-gray-600 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-gray-300 cursor-pointer"
                >
                <Mail size={20} />
                </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-500 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-3000"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-yellow-500 rounded-full animate-bounce"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;