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
      image: 'data:image/png;base64,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'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">My Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A collection of my real-world projects showcasing development and DevOps skills
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
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 hover:border-gray-400 text-gray-700 font-medium rounded-lg transition-colors"
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

