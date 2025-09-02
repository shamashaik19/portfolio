import { Server, Cloud, GitBranch, Shield, Boxes, Mail } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Passionate DevOps engineer with expertise in cloud technologies, CI/CD pipelines, and infrastructure automation.'
    },
    {
      icon: GitBranch,
      title: 'Automation & CI/CD',
      description: 'Skilled in Jenkins, GitHub Actions, GitLab CI, and scripting to automate deployments and optimize workflows.'
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Experienced in Terraform, Ansible, and Docker for efficient provisioning and containerized deployments.'
    },
    {
      icon: Boxes,
      title: 'Containerization & Orchestration',
      description: 'Proficient in Docker and Kubernetes for deploying, scaling, and managing applications in cloud environments.'
    },
    {
      icon: Shield,
      title: 'Security & Best Practices',
      description: 'Focused on implementing secure DevOps practices and maintaining reliable and compliant environments.'
    },
  ];

  const skills = [
    'AWS', 'Terraform', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions',
    'Prometheus', 'Grafana', 'AWS Monitoring', 'Linux', 'Python'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* About / Profile */}
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-300 mt-4">
              I am a passionate DevOps and Cloud Engineer focused on building efficient, scalable, and automated infrastructure.
              My expertise includes cloud services, CI/CD pipelines, containerization, infrastructure automation, monitoring, and scripting.
            </p>
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium shadow"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Highlights / Skills */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-800/70 rounded-xl hover:bg-gray-700/80 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-blue-900/40 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="font-semibold text-white">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact / Get in Touch */}
          <div className="text-center">
            <a
              href="mailto:shamashaik.eee.rymec@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-cyan-500 text-white font-semibold rounded-full shadow-lg transition-colors duration-300"
            >
              <Mail className="h-5 w-5" /> Get in Touch
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
