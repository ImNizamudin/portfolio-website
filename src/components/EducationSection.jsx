import React from 'react';
import { GraduationCap, MapPin } from 'lucide-react';

const EducationSection = () => {
  const certifications = [
    {
      title: "Belajar Membuat Aplikasi Web dengan React",
      issuer: "Dicoding",
      year: "2023"
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript", 
      issuer: "Dicoding",
      year: "2023"
    },
    {
      title: "Analitik Data Google",
      issuer: "Google",
      year: "2023"
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Dicoding", 
      year: "2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">My academic journey in software engineering and technology</p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-8 w-1 h-full bg-slate-700"></div>

          {/* Current Education */}
          <div className="relative flex mb-12">
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900 z-10"></div>
            
            {/* Content - Menggunakan sebagian besar space di kanan */}
            <div className="ml-8 md:ml-12 w-full bg-slate-800 border border-slate-700 rounded-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className='flex items-center gap-2'>
                  <GraduationCap className="text-white" size={24} />
                  <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-medium">Current</span>
                </div>
                <span className="text-gray-400">2023 - Present</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Bachelor of Applied Science in Internet Engineering Technology
              </h3>
              
              <div className='flex items-center gap-2'>
                <MapPin size={16} className="text-gray-400" />
                <p className="text-blue-400 md:text-lg font-semibold">
                  Electronic Engineering Polytechnic Institute of Surabaya
                </p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Focusing on advanced internet technologies, network engineering, and modern web development frameworks.
              </p>

              {/* Focus Areas - Horizontal */}
              <div className="bg-slate-900/50 border border-blue-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-3">Focus Areas:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Internet Technologies', 'Network Engineering', 'Web Development', 'System Architecture'].map((area, index) => (
                    <span 
                      key={index} 
                      className="bg-slate-800 border border-slate-600 px-3 py-1 rounded-full text-sm text-gray-300"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Previous Education */}
          <div className="relative flex">
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>
            
            {/* Content */}
            <div className="ml-8 md:ml-12 w-full bg-slate-800 border border-slate-700 rounded-lg p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <div className='flex items-center gap-2'>
                  <GraduationCap className="text-white" size={24} />
                  <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">Graduated</span>
                </div>
                <span className="text-gray-400">2019 - 2022</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Teknik Software Komputer
              </h3>
              
              <div className='flex items-center gap-2'>
                <MapPin size={16} className="text-gray-400" />
                <p className="text-blue-400 md:text-lg font-semibold">
                  SMKN 1 Boyolangu
                </p>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Specialized in computer software engineering, laying the foundation for programming and software development skills.
              </p>

              {/* Key Achievements - Horizontal */}
              <div className="bg-slate-900/50 border border-green-500/30 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-white mb-3">Key Achievements:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Software Development', 'Programming Fundamentals', 'Computer Systems', 'Project Management'].map((achievement, index) => (
                    <span 
                      key={index} 
                      className="bg-slate-800 border border-slate-600 px-3 py-1 rounded-full text-sm text-gray-300"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-slate-900/50 border border-slate-700 rounded-lg p-6 hover:border-blue-400 transition-colors duration-200"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-blue-400">{cert.title}</h4>
                  <span className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-sm">{cert.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">{cert.issuer}</span>
                  <span className="text-green-400 text-sm font-medium">Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;