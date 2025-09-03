import { MapPin, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, title: 'Location', value: 'Bangalore, India', href: null },
    { icon: Mail, title: 'Email', value: 'shamashaik.eee.rymec@gmail.com', href: 'mailto:shamashaik.eee.rymec@gmail.com' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shamashaik19', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shama-shaik-999aa0257/', label: 'LinkedIn' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-gray-500 mx-auto rounded-full mt-2"></div>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Ready to discuss your next cloud infrastructure project? Let's connect.
          </p>

          {/* Email Box Below Text */}
          <a
            href="mailto:shamashaik.eee.rymec@gmail.com"
            className="inline-flex items-center mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all"
          >
            <Mail className="mr-2 h-5 w-5" />
            shamashaik.eee.rymec@gmail.com
          </a>
        </div>

        <div className="max-w-md mx-auto space-y-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="p-3 bg-gray-800 rounded-lg">
                  <info.icon className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-medium text-gray-100">{info.title}</p>
                  {info.href ? (
                    <a href={info.href} className="text-blue-400 hover:text-blue-500">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-300">{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8 text-center">
            <h4 className="font-semibold text-gray-100 mb-4">Follow Me</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-gray-800 rounded-lg shadow-md hover:shadow-lg text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
