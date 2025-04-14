import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  // Convert both to strings for comparison
  const project = projectsData.find(p => String(p.id) === String(id));
  
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Project not found (ID: {id})</h2>
        <p className="mb-6 text-gray-500">Available project IDs: {projectsData.map(p => p.id).join(', ')}</p>
        <Link to="/#projects" className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
          Back to Projects
        </Link>
      </div>
    );
  }
  
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link to="/#projects" className="text-primary hover:underline mb-8 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Projects
        </Link>
        
        <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
        
        <img 
          src={project.image || 'https://via.placeholder.com/1200x600'} 
          alt={project.title} 
          className="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1200x600?text=Project+Image';
          }}
        />
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags && project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-3">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-6">{project.description}</p>
            
            {project.longDescription && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Project Details</h3>
                <p>{project.longDescription}</p>
              </div>
            )}
            
            {project.challenges && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                <p>{project.challenges}</p>
              </div>
            )}
            
            {project.solution && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Solution</h3>
                <p>{project.solution}</p>
              </div>
            )}
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg h-fit">
            <h3 className="text-lg font-semibold mb-4">Project Info</h3>
            
            <div className="mb-3">
              <h4 className="text-sm text-gray-500">Category</h4>
              <p>{project.category || 'N/A'}</p>
            </div>
            
            {project.client && (
              <div className="mb-3">
                <h4 className="text-sm text-gray-500">Client</h4>
                <p>{project.client}</p>
              </div>
            )}
            
            {project.duration && (
              <div className="mb-3">
                <h4 className="text-sm text-gray-500">Duration</h4>
                <p>{project.duration}</p>
              </div>
            )}
            
            {project.techs && (
              <div className="mb-3">
                <h4 className="text-sm text-gray-500">Technologies</h4>
                <p>{project.techs.join(', ')}</p>
              </div>
            )}
            
            {project.liveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white text-center py-2 rounded mt-6 hover:bg-opacity-90"
              >
                View Live
              </a>
            )}
            
            {project.codeUrl && (
              <a 
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white border border-primary text-primary text-center py-2 rounded mt-3 hover:bg-gray-50"
              >
                View Code
              </a>
            )}
          </div>
        </div>
        
        {/* Project Images Gallery (if you have multiple images) */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.gallery.map((img, index) => (
                <img 
                  key={index}
                  src={img || `https://via.placeholder.com/600x400?text=Gallery+Image+${index+1}`}
                  alt={`${project.title} image ${index + 1}`}
                  className="w-full h-64 object-cover rounded shadow"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/600x400?text=Gallery+Image+${index+1}`;
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}