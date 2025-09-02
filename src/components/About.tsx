import React from 'react';
import { Server, Cloud, GitBranch, Shield } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Expert in designing and implementing scalable cloud solutions across AWS, Azure, and GCP platforms.'
    },
    {
      icon: GitBranch,
      title: 'CI/CD Pipelines',
      description: 'Proficient in building robust automation pipelines using Jenkins, GitLab CI, and GitHub Actions.'
    },
    {
      icon: Server,
      title: 'Infrastructure as Code',
      description: 'Specialized in Terraform, CloudFormation, and Ansible for infrastructure automation and management.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Focused on implementing security best practices and maintaining compliance across all environments.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a passionate DevOps and Cloud Engineer with over 5 years of experience in building, 
                deploying, and maintaining scalable cloud infrastructure. My expertise lies in bridging 
                the gap between development and operations teams to create efficient, automated workflows.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Throughout my career, I've helped organizations reduce deployment times by up to 80%, 
                improve system reliability, and implement cost-effective cloud solutions. I believe in 
                the power of automation, continuous improvement, and collaborative culture.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  AWS Certified
                </span>
                <span className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium">
                  Kubernetes Expert
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  DevOps Specialist
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <highlight.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;