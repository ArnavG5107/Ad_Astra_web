import React from 'react';
import { Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-center mb-8">
          {/* Logo */}
          <div className="text-xl font-bold tracking-wider">
            AD ASTRA
          </div>
          
          {/* Top Right Links and Social Icons */}
          <div className="flex items-center space-x-6">
            <a 
              href="#privacy" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
            >
              Terms
            </a>
            
            {/* Social Icons */}
            <div className="flex space-x-3 ml-4">
              <a 
                href="#twitter" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#facebook" 
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#google" 
                className="text-gray-300 hover:text-white transition-colors duration-200 font-bold text-xl"
                aria-label="Google+"
              >
                G+
              </a>
            </div>
          </div>
        </div>
        
        {/* Divider Line */}
        <div className="border-t border-gray-700 mb-8"></div>
        
        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          {/* Navigation Links */}
          <div className="flex space-x-8">
            <a 
              href="#blog" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Blog
            </a>
            <a 
              href="#astrophotography" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Astrophotography
            </a>
            <a 
              href="#events" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Events
            </a>
            <a 
              href="#team" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Our Team
            </a>
            <a 
              href="#contacts" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Contacts
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 AD ASTRA. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;