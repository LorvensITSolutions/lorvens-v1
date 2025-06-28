import React, { useState, useEffect } from 'react';
import hero from "../assets/IT.jpg"
import pro from "../assets/pro.jpg"

// Sample team data - you can replace image paths with your actual assets
const teamMembers = [
  {
    id: 1,
    name: "John Smith",
    position: "Founder & CEO",
    image: pro, 
    social: {
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO & Co-Founder",
    image: "../assets/cto.jpg",
    social: {
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    }
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Lead Developer",
    image: "../assets/lead-dev.jpg",
    social: {
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    }
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "UI/UX Designer",
    image: "../assets/designer.jpg",
    social: {
      instagram: "#",
      linkedin: "#",
      whatsapp: "#"
    }
  }
];

const ProfileCard = ({ member, index }) => {
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-700 hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-3 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      {/* Profile Image */}
      <div className="relative h-64 sm:h-72 md:h-64 lg:h-72 overflow-hidden bg-gradient-to-br from-pink-100 to-orange-100">
        {!imageError ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-orange-200 to-pink-200">
            <div className="w-20 h-20 rounded-full bg-orange-300 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Floating social icons on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          <div className="flex space-x-3">
            <a
              href={member.social.instagram}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zm5.576 16.641c0 1.225-.994 2.219-2.219 2.219H8.622c-1.225 0-2.219-.994-2.219-2.219V8.641c0-1.225.994-2.219 2.219-2.219h6.752c1.225 0 2.219.994 2.219 2.219v8z"/>
              </svg>
            </a>
            
            <a
              href={member.social.linkedin}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href={member.social.whatsapp}
              className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.864 3.488"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">
          {member.name}
        </h3>
        <p className="text-orange-600 font-semibold text-center text-base sm:text-lg">
          {member.position}
        </p>
      </div>
    </div>
  );
};

const VisionSection = () => {
  const [activeCard, setActiveCard] = useState(0);
  
  const visionCards = [
    {
      icon: "🚀",
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative approaches to solve real-world problems with fresh perspectives."
    },
    {
      icon: "💡",
      title: "Creative Solutions",
      description: "Every challenge is an opportunity to think differently and create solutions that make a meaningful impact."
    },
    {
      icon: "🎯",
      title: "Mission Driven",
      description: "We're passionate about building technology that empowers businesses and transforms ideas into reality."
    },
    {
      icon: "🌟",
      title: "Future Ready",
      description: "Our solutions are designed to grow with you, adapting to tomorrow's challenges and opportunities."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % visionCards.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-pink-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,165,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,192,203,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-orange-500/20 border border-orange-400/30 rounded-full text-orange-300 font-semibold text-sm mb-8 backdrop-blur-sm">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            Our Vision & Mission
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
            Building Tomorrow's
            <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Digital Solutions
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            As a dynamic startup, we're on a mission to transform innovative ideas into 
            powerful digital experiences that shape the future of technology.
          </p>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {visionCards.map((card, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-700 cursor-pointer group ${
                activeCard === index
                  ? 'bg-gradient-to-br from-orange-500/20 to-pink-500/20 border-orange-400/40 shadow-2xl shadow-orange-500/20 scale-105'
                  : 'bg-white/10 border-white/20 hover:border-orange-400/30 hover:bg-white/15'
              }`}
              onMouseEnter={() => setActiveCard(index)}
            >
              <div className="text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110">{card.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{card.description}</p>
              
              {/* Active indicator with pulse animation */}
              {activeCard === index && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
                  <div className="absolute top-0 right-0 w-3 h-3 bg-orange-400 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Journey Timeline */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-12">Our Startup Journey</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Founded</div>
              <div className="text-orange-300 text-sm sm:text-base">Started with a vision to innovate</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Growing</div>
              <div className="text-pink-300 text-sm sm:text-base">Building our amazing team</div>
            </div>
            
            <div className="text-center group sm:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd"/>
                </svg>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-2">Scaling</div>
              <div className="text-orange-300 text-sm sm:text-base">Expanding our impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-orange-100 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 right-20 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-20 w-36 h-36 bg-orange-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-pink-300/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>

      {/* Vision Section */}
      <VisionSection />
      
      {/* Team Section */}
      <div className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-orange-100 border border-orange-200 rounded-full text-orange-600 font-semibold text-sm mb-8 shadow-lg backdrop-blur-sm">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
            </svg>
            Meet Our Team
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            The <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Creative Minds
            </span> Behind Lorvens
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're a passionate team of innovators, dreamers, and problem-solvers who believe in the power of 
            technology to transform ideas into extraordinary digital experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <ProfileCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="max-w-4xl mx-auto text-center mt-16 sm:mt-20">
          <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 border border-orange-100 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-pink-50/50"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ready to Join Our Journey?
              </h2>
              <p className="text-gray-600 text-base sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Let's collaborate and bring your vision to life. At <span className="text-orange-600 font-bold">Lorvens IT Solutions</span>, 
                every project is an opportunity to create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
                <button className="group px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-orange-200 transition-all duration-300 hover:-translate-y-2 transform">
                  <span className="flex items-center justify-center">
                    Start Your Project
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                    </svg>
                  </span>
                </button>
                
                <button className="group px-8 py-4 sm:px-10 sm:py-5 border-2 border-pink-400 text-pink-600 font-bold rounded-2xl hover:bg-pink-400 hover:text-white transition-all duration-300 hover:-translate-y-2 transform hover:shadow-2xl hover:shadow-pink-200">
                  <span className="flex items-center justify-center">
                    Let's Talk
                    <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;