import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Microsoft Azure', level: 85 },
        { name: 'Google Cloud Platform', level: 80 },
        { name: 'DigitalOcean', level: 90 },
      ]
    },
    {
      title: 'DevOps Tools',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 90 },
        { name: 'Jenkins', level: 85 },
        { name: 'GitLab CI/CD', level: 88 },
      ]
    },
    {
      title: 'Infrastructure as Code',
      skills: [
        { name: 'Terraform', level: 92 },
        { name: 'Ansible', level: 88 },
        { name: 'CloudFormation', level: 85 },
        { name: 'Pulumi', level: 75 },
      ]
    },
    {
      title: 'Monitoring & Security',
      skills: [
        { name: 'Prometheus', level: 88 },
        { name: 'Grafana', level: 90 },
        { name: 'ELK Stack', level: 85 },
        { name: 'HashiCorp Vault', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Technical Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and platforms for building robust cloud infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700 font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-600 to-emerald-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;