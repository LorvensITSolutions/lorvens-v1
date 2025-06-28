import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Calendar, Users, Code } from 'lucide-react';
import Footer from '../components/Footer';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// Mock project data - replace with your actual project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform Development",
    description: "A comprehensive e-commerce solution built with modern technologies, featuring user authentication, payment integration, inventory management, and admin dashboard. The platform supports multiple vendors and provides analytics for business insights.",
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ],
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    duration: "6 months",
    team: "5 developers",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Mobile Banking Application",
    description: "Secure mobile banking app with biometric authentication, real-time transactions, bill payments, and investment tracking. Features include push notifications, transaction history, and customer support chat integration.",
    images: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
    ],
    technologies: ["React Native", "Firebase", "TypeScript", "Biometric API"],
    duration: "8 months",
    team: "7 developers",
    category: "Mobile Development"
  },
  {
    id: 3,
    title: "AI-Powered Analytics Dashboard",
    description: "Advanced analytics platform using machine learning algorithms to provide business intelligence and predictive analytics. Features real-time data visualization, automated reporting, and customizable KPI tracking.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    ],
    technologies: ["Python", "TensorFlow", "D3.js", "PostgreSQL"],
    duration: "10 months",
    team: "4 developers",
    category: "AI/ML"
  }
];

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-lg overflow-hidden mb-12 ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } flex flex-col lg:flex`}
      style={{
        opacity: 0,
        transform: 'translateY(50px)',
        animation: `fadeInUp 0.8s ease-out ${index * 0.2}s forwards`
      }}
    >
      {/* Image Section */}
      <div className="lg:w-1/2 relative">
        <div className="relative h-64 lg:h-96 overflow-hidden">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          
          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
          >
            <ChevronRight size={20} />
          </button>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 py-4 bg-gray-50">
          {project.images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-orange-500 scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {project.description}
        </p>
        
        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-600">
            <Calendar size={18} className="mr-2 text-orange-500" />
            <span className="text-sm">{project.duration}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users size={18} className="mr-2 text-orange-500" />
            <span className="text-sm">{project.team}</span>
          </div>
        </div>
        
        {/* Technologies */}
        <div className="mb-6">
          <div className="flex items-center mb-3">
            <Code size={18} className="mr-2 text-orange-500" />
            <span className="font-semibold text-gray-700">Technologies Used:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* View Project Button */}
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
          View Project Details
          <ExternalLink size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-stone-100">
      {/* Uncomment these when you import the components */}
      {/* <Navbar /> */}
      
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-700 to-gray-800 text-white py-20 mt-0">
        <div className="container mx-auto px-6">
          <div 
            className="text-center"
            style={{
              opacity: 0,
              transform: 'translateY(-30px)',
              animation: 'fadeInDown 0.8s ease-out forwards'
            }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-4 pt-10">
              Our Projects
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              Discover the innovative solutions we've crafted for our clients at{' '}
              <span className="text-orange-500">Lorvens IT Solutions</span>
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how <span className="text-orange-500">Lorvens IT Solutions</span> can bring your vision to life with cutting-edge technology and innovative solutions.
          </p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>


      <style jsx>{`
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    
    
  );
  
};


export default ProjectsPage;