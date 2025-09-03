// src/components/About.tsx
import { Cloud, GitBranch, Activity } from "lucide-react";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 sm:px-10 lg:px-20 bg-gradient-to-br from-slate-50 via-teal-50 to-purple-100 text-slate-900"
    >
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-200/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-300/30 rounded-full blur-3xl -z-10"></div>

      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-purple-600">
            Me
          </span>
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
          I’m a passionate <span className="font-semibold text-teal-600">DevOps & Cloud Engineer</span> 
          who loves designing scalable systems, automating workflows, and ensuring smooth delivery 
          through modern cloud-native practices.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Cloud Engineering */}
        <div className="p-6 bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl hover:shadow-2xl transition-all border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <Cloud className="h-6 w-6 text-teal-600" />
            <h3 className="text-xl font-semibold text-teal-700">Cloud Engineering</h3>
          </div>
          <p className="text-slate-600">
            Skilled with AWS, Docker, and Kubernetes to architect reliable, 
            scalable, and secure infrastructure.
          </p>
        </div>

        {/* CI/CD Automation */}
        <div className="p-6 bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl hover:shadow-2xl transition-all border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <GitBranch className="h-6 w-6 text-purple-600" />
            <h3 className="text-xl font-semibold text-purple-700">CI/CD Automation</h3>
          </div>
          <p className="text-slate-600">
            Experienced with Jenkins, GitHub Actions, and Ansible to streamline 
            deployments and boost developer productivity.
          </p>
        </div>

        {/* Reliability & Monitoring */}
        <div className="p-6 bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl hover:shadow-2xl transition-all border border-slate-100">
          <div className="flex items-center gap-3 mb-3">
            <Activity className="h-6 w-6 text-pink-600" />
            <h3 className="text-xl font-semibold text-pink-700">Reliability & Monitoring</h3>
          </div>
          <p className="text-slate-600">
            Ensuring performance and uptime with Prometheus, Grafana, and 
            robust logging systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
