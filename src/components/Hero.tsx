// src/components/Hero.tsx
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-slate-900 to-purple-900"></div>

      {/* Subtle Background Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
            Shama
          </span>
        </h1>

        <h2 className="mt-4 text-xl sm:text-2xl text-blue-100 font-semibold">
          DevOps & Cloud Engineer
        </h2>

        <p className="mt-6 text-base sm:text-lg text-blue-200 leading-relaxed">
          I specialize in building <span className="font-semibold">scalable cloud infrastructure</span>, 
          automating CI/CD pipelines, and ensuring reliability with{" "}
          <span className="font-semibold">AWS, Kubernetes, Docker, and Python</span>.
        </p>

        <p className="mt-3 text-base sm:text-lg text-blue-200 leading-relaxed">
          With <span className="font-semibold">1+ years of hands-on experience</span> and 
          <span className="font-semibold"> 20+ projects</span>, I focus on reducing deployment time, 
          improving system resilience, and bridging development with operations.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:shamashaik.eee.rymec@gmail.com"
            className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg shadow-md transition-all"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </a>

          <a
            href="https://drive.google.com/file/d/1wGtj1RNc_UFrXGDp5c9Fl-hJUv4eq_cC/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-purple-900 font-medium rounded-lg transition-all"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-12 text-center">
          <div>
            <div className="text-3xl font-bold text-white">1+</div>
            <div className="text-blue-200 text-sm">Years of Experience</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-white">20+</div>
            <div className="text-blue-200 text-sm">Projects Delivered</div>
          </div>

          <div>
            <div className="text-3xl font-bold text-white">99.9%</div>
            <div className="text-blue-200 text-sm">Uptime Mindset</div>
          </div>
        </div>

        {/* Scroll Down */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
