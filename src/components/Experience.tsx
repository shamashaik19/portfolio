import { Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'DevOps Intern',
      company: 'StarAgile',
      location: 'Bangalore, India',
      period: '2025',
      achievements: [
        'Assisted in setting up CI/CD pipelines using Jenkins and GitHub Actions',
        'Monitored cloud infrastructure using AWS CloudWatch and Prometheus',
        'Automated routine deployment tasks using Python and Bash scripts',
        'Worked with Linux servers and Docker for containerized application deployment'
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-purple-900 via-indigo-950 to-purple-800 relative"
    >
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.15),_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.15),_transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-purple-300">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-purple-400 rounded-full border-4 border-purple-950 shadow-lg hidden lg:block"></div>

                  <div className="lg:ml-16 bg-white/5 backdrop-blur-md rounded-xl p-8 border border-purple-700/50 hover:border-purple-400 hover:shadow-purple-500/30 hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        <p className="text-lg text-purple-300 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col lg:items-end space-y-1 mt-2 lg:mt-0">
                        <div className="flex items-center text-gray-300">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                          <MapPin className="h-4 w-4 mr-2" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start space-x-3">
                          <TrendingUp className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                          <p className="text-gray-200 leading-relaxed">{achievement}</p>
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
