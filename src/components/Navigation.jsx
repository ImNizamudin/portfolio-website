import React from 'react';

const Navigation = ({ activeSection, isScrolled, scrollToSection }) => {
  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold tracking-wider">ImNizamudin</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {['Home', 'About', 'Education', 'Projects'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-400 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {item}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;