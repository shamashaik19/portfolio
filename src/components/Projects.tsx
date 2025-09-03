import { Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Bootstrap Website',
      description: 'A responsive website built using Bootstrap, deployed with Apache2 and automated using Jenkins pipelines for CI/CD.',
      technologies: ['Bootstrap', 'Apache2', 'Jenkins', 'GitHub'],
      achievements: [
        'Fully responsive design',
        'Automated deployment pipeline with Jenkins',
        'Version controlled on GitHub'
      ],
      github: 'https://github.com/shamashaik19/bootstrap.git',
      image: 'https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-social.png'
    },
    {
      title: 'Banking Project',
      description: 'A web-based banking system with secure transactions, account management, and CI/CD pipeline integration.',
      technologies: ['Python', 'Flask', 'MySQL', 'Docker', 'AWS'],
      achievements: [
        'Secure authentication and transactions',
        'Deployed on AWS with Docker',
        'CI/CD pipeline integrated'
      ],
      github: 'https://github.com/shamashaik19/banking-project.git',
      image: 'https://www.idfcfirstbank.com/content/dam/idfcfirstbank/images/blog/mobile-banking/how-new-age-banking-is-transforming-the-banking-industry-717x404.jpg'
    },
    {
      title: 'Healthcare Management System',
      description: 'A healthcare platform for managing patient records, appointments, and doctor-patient interactions.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
      achievements: [
        'Efficient patient data management',
        'Containerized deployment',
        'Scalable microservices architecture'
      ],
      github: 'https://github.com/shamashaik19/healthcare.git',
      image: 'https://cdn.prod.website-files.com/650c1bee516c4e723b11b29a/65206264927e177f8bd65950_651f6a5b0bcc2eb5956182ea_Top%252050%2520Healthcare%2520Companies%2520and%2520Their%2520Impact%2520on%2520the%2520Industry.webp'
    },
    {
      title: 'Swiggy Clone',
      description: 'A food delivery application inspired by Swiggy with restaurant listings, cart, and order tracking features.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      achievements: [
        'Real-time order tracking',
        'Cart and payment integration',
        'Responsive UI for mobile and web'
      ],
      github: 'https://github.com/shamashaik19/Swiggy-clone.git',
      image: 'https://c.ndtvimg.com/2024-10/5edu54u_swiggy-logo-new_625x300_24_October_24.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886'
    },
    {
      title: 'Insurance Project',
      description: 'An insurance management application for policy creation, claims tracking, and premium calculation.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      achievements: [
        'Policy and claims lifecycle management',
        'Deployed using Docker',
        'Integrated database with MySQL'
      ],
      github: 'https://github.com/shamashaik19/Insurance-project.git',
      image: 'https://t4.ftcdn.net/jpg/02/90/20/37/360_F_290203792_VjIVJ40veTvAqv6y88AHKiZlo0SaCsIY.jpg'
    },
    {
      title: 'YouTube Clone',
      description: 'A video streaming platform similar to YouTube, with user authentication, video upload, and playback features.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Firebase'],
      achievements: [
        'Video upload and playback',
        'User authentication with Firebase',
        'Responsive design'
      ],
      github: 'https://github.com/shamashaik19/YouTube-clone.git',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg'
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 relative"
    >
      {/* Decorative overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">My Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A collection of my real-world projects showcasing development and DevOps skills
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-700"
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
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{project.description}</p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {project.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start space-x-2">
                              <ArrowRight className="h-4 w-4 text-emerald-400 mt-1 flex-shrink-0" />
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-white">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-blue-900/40 text-blue-300 rounded-full text-sm font-medium border border-blue-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-500 hover:border-gray-400 text-gray-200 hover:text-white font-medium rounded-lg transition-colors"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Source Code
                        </a>
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
