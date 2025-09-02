import React from 'react';
import { Cloud, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Cloud className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">CloudOps Pro</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Building resilient cloud infrastructure and automation solutions 
                that empower teams to deliver faster and more reliably.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <div className="space-y-2">
                {['About', 'Skills', 'Experience', 'Projects', 'Certifications'].map((link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.querySelector(`#${link.toLowerCase()}`);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <div className="space-y-2 text-gray-400">
                <p>Cloud Architecture</p>
                <p>DevOps Consulting</p>
                <p>Infrastructure Automation</p>
                <p>CI/CD Implementation</p>
                <p>Security & Compliance</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © {currentYear} CloudOps Pro. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>and lots of cloud computing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;