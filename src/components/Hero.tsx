import React from 'react';
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              DevOps & Cloud
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                Engineer
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Architecting scalable cloud infrastructure and streamlining deployment pipelines 
              to accelerate innovation and drive business growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
            <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-blue-200">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-blue-200">Projects Deployed</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">99.9%</div>
              <div className="text-blue-200">Uptime Achieved</div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;