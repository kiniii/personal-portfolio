import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import projectsData from "../data/projects";
import React from 'react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projectsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };
  
  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && selectedProject) {
        closeProjectModal();
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedProject]);
  
  // Handle click outside modal to close it
  const handleBackdropClick = (e) => {
    // Only close if clicking directly on the backdrop, not on modal content
    if (e.target === e.currentTarget) {
      closeProjectModal();
    }
  };
  
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Projects</h2>
        
        {/* Project Carousel */}
        <div className="relative">
          {projectsData.length > 0 ? (
            <>
              <div className="flex justify-center">
                <div 
                  onClick={() => openProjectModal(projectsData[currentIndex])}
                  className="cursor-pointer transition-transform duration-300 hover:scale-105 transform"
                >
                  <motion.div
                    key={projectsData[currentIndex].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="relative group overflow-hidden rounded">
                      <div className="overflow-hidden rounded">
                        <img
                          src={projectsData[currentIndex].preview || "https://via.placeholder.com/800x400?text=Project+Image"}
                          alt={projectsData[currentIndex].title}
                          className="w-full h-90 object-cover mb-4 transition-transform duration-500 group-hover:scale-110"
                          onError={(e) => {
                            console.log("Image failed to load:", projectsData[currentIndex].image);
                            e.target.src = "https://via.placeholder.com/800x400?text=Project+Image";
                          }}
                        />
                      </div>
                      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        {/* <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold text-lg px-4 py-2 rounded bg-opacity-50">
                          View Details
                        </span> */}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 mt-4">{projectsData[currentIndex].title}</h3>
                    <p className="text-gray-700 mb-4">{projectsData[currentIndex].description}</p>
                    <div className="flex flex-wrap gap-2">
                      {projectsData[currentIndex].tags && projectsData[currentIndex].tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={goToPrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-200 hover:scale-110"
                aria-label="Previous project"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer transition-transform duration-200 hover:scale-110"
                aria-label="Next project"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {projectsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                    aria-current={currentIndex === index ? "true" : "false"}
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                    } transition-transform duration-200 hover:scale-125`}
                  />
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500">No projects available.</p>
          )}
        </div>
      </div>
      
      {/* Project Detail Modal with Animation and Accessibility Improvements */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-gray-200 bg-opacity-75 z-50 flex items-center justify-center overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div 
              className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto m-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              onClick={(e) => e.stopPropagation()} // Prevents clicks from propagating to backdrop
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 id="modal-title" className="text-3xl font-bold">{selectedProject.title}</h2>
                  <button 
                    onClick={closeProjectModal}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1 transition-transform duration-200 hover:scale-110"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <img
                  src={selectedProject.image || selectedProject.preview || "https://via.placeholder.com/1200x600?text=Project+Image"}
                  alt={selectedProject.title}
                  className="w-full h-96 object-contain rounded-lg shadow mb-6"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/1200x600?text=Project+Image";
                  }}
                />
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags && selectedProject.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-800 px-4 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Project Info */}
                {selectedProject.longDescription && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Project Details</h3>
                    <p>{selectedProject.longDescription}</p>
                  </div>
                )}
                
                {/* Project Images Gallery (if available) */}
                {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3">Gallery</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.gallery.map((img, index) => (
                        <div key={index} className="overflow-hidden rounded shadow">
                          <img
                            src={img || `https://via.placeholder.com/600x400?text=Gallery+Image+${index+1}`}
                            alt={`${selectedProject.title} image ${index + 1}`}
                            className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                            onError={(e) => {
                              e.target.src = `https://via.placeholder.com/600x400?text=Gallery+Image+${index+1}`;
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Close button at bottom */}
                <div className="flex justify-center mt-4">
                  <button 
                    onClick={closeProjectModal}
                    className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-transform duration-200 hover:scale-105"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}