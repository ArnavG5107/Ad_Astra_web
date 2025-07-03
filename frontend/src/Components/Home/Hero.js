import React from 'react';
import { Star, Moon, Globe } from 'lucide-react';
import homeImage from '../../Assets/Home.jpg'; // Better naming

const Hero = ({ backgroundImage }) => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Image - Always show the imported image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImage || homeImage})`,
          backgroundAttachment: 'fixed' // Optional: creates parallax effect
        }}
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Central title */}
        <div className="text-center mb-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-wider mb-8">
            AD ASTRA
          </h1>
          
          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white font-light leading-relaxed">
            Exploring the vast sky one<br />
            step at a time
          </p>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom logos section */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm">
        <div className="flex justify-center items-center py-4 space-x-16">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center space-x-2 text-white">
              <Globe size={20} className="text-white" />
              <span className="text-sm font-medium">AD ASTRA</span>
            </div>
          ))}
          <div className="flex items-center space-x-2 text-white">
            <Moon size={20} className="text-white" />
            <span className="text-sm font-medium">EXPLORE</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
