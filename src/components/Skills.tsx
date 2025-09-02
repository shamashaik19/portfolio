import { Cloud, Server, Code, Shield } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      colorFrom: 'from-blue-400',
      colorTo: 'to-blue-600',
      skills: [
        { name: 'AWS', level: 95 },
        { name: 'Microsoft Azure', level: 85 },
        { name: 'Google Cloud', level: 80 },
        { name: 'DigitalOcean', level: 90 },
      ]
    },
    {
      title: 'DevOps Tools',
      icon: <Server className="w-6 h-6 text-green-600" />,
      colorFrom: 'from-green-400',
      colorTo: 'to-green-600',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 90 },
        { name: 'Jenkins', level: 85 },
        { name: 'GitLab CI/CD', level: 88 },
      ]
    },
    {
      title: 'Infrastructure as Code',
      icon: <Code className="w-6 h-6 text-purple-600" />,
      colorFrom: 'from-purple-400',
      colorTo: 'to-purple-600',
      skills: [
        { name: 'Terraform', level: 92 },
        { name: 'Ansible', level: 88 },
        { name: 'CloudFormation', level: 85 },
        { name: 'Pulumi', level: 75 },
      ]
    },
    {
      title: 'Monitoring & Security',
      icon: <Shield className="w-6 h-6 text-red-600" />,
      colorFrom: 'from-red-400',
      colorTo: 'to-red-600',
      skills: [
        { name: 'Prometheus', level: 88 },
        { name: 'Grafana', level: 90 },
        { name: 'ELK Stack', level: 85 },
        { name: 'HashiCorp Vault', level: 80 },
        { name: 'Linux', level: 90 },
        { name: 'Python', level: 85 },
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
              A vibrant showcase of modern technologies, cloud platforms, and DevOps tools I work with
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500"
              >
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex flex-col items-center">
                      <div className="relative w-24 h-24">
                        <svg className="w-full h-full">
                          <circle
                            className="text-gray-200"
                            strokeWidth="6"
                            stroke="currentColor"
                            fill="transparent"
                            r="36"
                            cx="48"
                            cy="48"
                          />
                          <circle
                            className={`text-gradient ${category.colorFrom} ${category.colorTo}`}
                            strokeWidth="6"
                            strokeLinecap="round"
                            stroke="url(#gradient)"
                            fill="transparent"
                            r="36"
                            cx="48"
                            cy="48"
                            strokeDasharray={2 * Math.PI * 36}
                            strokeDashoffset={2 * Math.PI * 36 * (1 - skill.level / 100)}
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                              <stop offset="0%" className={`stop-color-${category.colorFrom}`} />
                              <stop offset="100%" className={`stop-color-${category.colorTo}`} />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-900 font-semibold">{skill.level}%</span>
                        </div>
                      </div>
                      <p className="mt-2 text-gray-700 font-medium text-center">{skill.name}</p>
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
