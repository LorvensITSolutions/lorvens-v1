import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition-all duration-300">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h2>

      <ul className="list-disc list-inside text-sm text-gray-700 mb-3 space-y-1">
        {project.keyPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>

      <p className="text-gray-600 text-sm">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
