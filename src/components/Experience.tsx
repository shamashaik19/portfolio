import React from 'react';
import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'DevOps Intern',
      company: 'Star Agile',
      location: 'Remote',
      period: 'Dec 2024 - Mar 2025',
      achievements: [
        'Gained hands-on experience with CI/CD pipeline development using Jenkins and GitLab CI',
        'Worked with containerization technologies including Docker and Kubernetes',
        'Assisted in infrastructure automation using Terraform and Ansible',
        'Participated in monitoring and logging setup using Prometheus and Grafana'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-emerald-500 hidden lg:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>
                  
                  <div className="lg:ml-16 bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-1 mt-2 lg:mt-0">
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <TrendingUp className="h-4 w-4 text-emerald-500 mt-1 flex-shrink-0" />
                          <p className="text-gray-700 leading-relaxed">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;