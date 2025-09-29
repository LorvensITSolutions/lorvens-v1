import React, { useState } from 'react';
import logo from '../assets/logo.png';

const features = [
  { label: 'Online Classes', icon: '📚' },
  { label: 'All Services', icon: '⚡' },
  { label: 'Mobile Development', icon: '📱' },
  { label: 'Android Development', icon: '🤖' },
  { label: 'AI / ML', icon: '🧠' },
  { label: 'Data Science', icon: '📊' },
  { label: 'UI / UX', icon: '🎨' },
  { label: 'Cloud Computing', icon: '☁️' },
];

const TeamLorvens = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-blue-50 to-orange-100 flex items-center justify-center p-8">
      <div className="relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
        {/* Center Logo */}
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-orange-500/50 border-4 border-white">
            <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 bg-white rounded-full flex items-center justify-center p-2">
              <img 
                src={logo} 
                alt="Lorvens Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Rotating Features */}
        {features.map((feature, index) => {
          const angle = (index * 360) / features.length;
          const radius = 140; // Base radius for mobile
          const mdRadius = 180; // Medium screens
          const lgRadius = 220; // Large screens
          
          // Calculate positions for different screen sizes
          const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
          const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
          
          const mdX = Math.cos((angle - 90) * (Math.PI / 180)) * mdRadius;
          const mdY = Math.sin((angle - 90) * (Math.PI / 180)) * mdRadius;
          
          const lgX = Math.cos((angle - 90) * (Math.PI / 180)) * lgRadius;
          const lgY = Math.sin((angle - 90) * (Math.PI / 180)) * lgRadius;

          return (
            <div
              key={index}
              className={`absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out transform ${
                isHovered ? 'scale-110 opacity-100' : 'scale-100 opacity-90'
              }`}
              style={{
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) ${
                  isHovered ? `rotate(${angle + 360}deg)` : `rotate(${angle}deg)`
                }`,
                '--md-transform': `translate(-50%, -50%) translate(${mdX}px, ${mdY}px) ${
                  isHovered ? `rotate(${angle + 360}deg)` : `rotate(${angle}deg)`
                }`,
                '--lg-transform': `translate(-50%, -50%) translate(${lgX}px, ${lgY}px) ${
                  isHovered ? `rotate(${angle + 360}deg)` : `rotate(${angle}deg)`
                }`,
              }}
            >
              {/* Arrow pointing to center */}
              <div className="relative">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-4 border-l-transparent border-r-transparent border-b-orange-500"></div>
                
                {/* Feature Card */}
                <div className="bg-white/90 backdrop-blur-md border border-orange-200 rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-xl transition-all duration-300 hover:bg-white hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-200/50 group">
                  <div className="flex items-center gap-2 whitespace-nowrap">
                    <span className="text-lg md:text-xl transition-transform duration-300 group-hover:scale-125">
                      {feature.icon}
                    </span>
                    <span className="text-gray-800 text-xs md:text-sm lg:text-base font-medium">
                      {feature.label}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Rotating rings */}
          <div className={`absolute top-1/2 left-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border border-orange-300/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${isHovered ? 'rotate-180 scale-110' : 'rotate-0'}`}></div>
          <div className={`absolute top-1/2 left-1/2 w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] border border-blue-300/20 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${isHovered ? 'rotate-90 scale-105' : 'rotate-0'}`}></div>
          
          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 bg-orange-400 rounded-full transition-all duration-1000 ${
                isHovered ? 'opacity-100' : 'opacity-50'
              }`}
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 11}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Title */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          {/* <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent mb-2">
            Team Lorvens
          </h2> */}
          {/* <p className="text-gray-600 text-sm md:text-base max-w-md">
            Hover over the logo to explore our comprehensive range of technology services
          </p> */}
        </div>
      </div>

      {/* Custom styles for responsive transforms */}
      <style jsx>{`
        @media (min-width: 768px) {
          .absolute[style*="--md-transform"] {
            transform: var(--md-transform) !important;
          }
        }
        @media (min-width: 1024px) {
          .absolute[style*="--lg-transform"] {
            transform: var(--lg-transform) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamLorvens;