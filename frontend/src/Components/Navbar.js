import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold tracking-wider">
          AD ASTRA
        </div>
        
        {/* Navigation Links */}
        <div className="flex space-x-8">
          <a 
            href="#astrophotography"
            className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            Astrophotography
          </a>
          <a 
            href="#blog"
            className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            Blog
          </a>
          <a 
            href="#events"
            className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            Events
          </a>
          <a 
            href="#team"
            className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            Our Team
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;