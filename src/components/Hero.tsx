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
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-800 to-slate-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-emerald-400">
                Shama
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-blue-100 font-semibold">
              DevOps & Cloud Engineer
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Architecting scalable cloud infrastructure, automating deployment pipelines, and 
              leveraging tools like AWS, Kubernetes, Docker, Prometheus, Grafana, Linux, and Python 
              to deliver efficient and reliable business solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:shamashaik19@gmail.com"
              className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
            <a
              href="https://drive.google.com/file/d/1wGtj1RNc_UFrXGDp5c9Fl-hJUv4eq_cC/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">1+</div>
              <div className="text-blue-200">Year Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-white">20+</div>
              <div className="text-blue-200">Projects Completed</div>
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
