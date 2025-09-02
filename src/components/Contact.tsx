import React from 'react';
import { MapPin, Github, Linkedin, Mail } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, title: 'Location', value: 'Bangalore, India', href: null }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shamashaik19', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shama-shaik-999aa0257/', label: 'LinkedIn' }
  ];

  const email = 'shamashaik.eee.rymec@gmail.com';

  return (
    <section id="contact" className="py-20 bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-gray-500 mx-auto rounded-full mt-2"></div>
          {/* Email below heading */}
          <p className="text-gray-300 mt-4 text-lg">
            <Mail className="inline h-5 w-5 mr-2 text-blue-400" />
            <a href={`mailto:${email}`} className="text-blue-400 hover:text-blue-500">{email}</a>
          </p>
          <p className="text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Ready to discuss your next cloud infrastructure project? Let's connect.
          </p>
        </div>

        {/* Contact Info + Social Links */}
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
                    <a href={info.href} className="text-blue-400 hover:text-blue-500">{info.value}</a>
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
