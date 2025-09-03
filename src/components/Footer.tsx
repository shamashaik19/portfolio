import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Left side - copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Shama Shaik. All rights reserved.
        </p>

        {/* Right side - social links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="mailto:shamashaik.eee.rymec@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/shamashaik19"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/shama-shaik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
