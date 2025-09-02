import React from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Cloud Kubernetes Platform',
      description: 'Designed and implemented a multi-cloud Kubernetes platform spanning AWS, Azure, and GCP with automated failover and disaster recovery capabilities.',
      technologies: ['Kubernetes', 'Terraform', 'ArgoCD', 'Prometheus', 'Istio'],
      achievements: [
        '99.99% uptime across all environments',
        '60% reduction in deployment time',
        'Automated disaster recovery in under 5 minutes'
      ],
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Built comprehensive CI/CD pipelines for microservices architecture using GitLab CI, Docker, and Kubernetes with automated testing and security scanning.',
      technologies: ['GitLab CI', 'Docker', 'SonarQube', 'Trivy', 'Helm'],
      achievements: [
        'Reduced manual deployments to zero',
        '50% faster time-to-market for new features',
        'Implemented automated security vulnerability scanning'
      ],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Infrastructure Cost Optimization',
      description: 'Developed cost optimization strategies and implemented automated resource management across cloud environments, resulting in significant cost savings.',
      technologies: ['AWS Cost Explorer', 'Terraform', 'CloudWatch', 'Lambda', 'Python'],
      achievements: [
        '$2M annual cost savings achieved',
        'Automated resource scaling based on demand',
        'Implemented comprehensive cost monitoring dashboard'
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world implementations that demonstrate expertise in cloud architecture and DevOps practices
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="lg:flex">
                  <div className="lg:w-1/3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="lg:w-2/3 p-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{project.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2">
                              <ArrowRight className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <button className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          View Details
                        </button>
                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors">
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;