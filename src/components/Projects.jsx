import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projectsData from "../data/projects";
import React from 'react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
  
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Projects</h2>
        
        {/* Project Carousel */}
        <div className="relative">
          {projectsData.length > 0 ? (
            <>
              <div className="flex justify-center">
                <Link to={`/project/${projectsData[currentIndex].id}`}>
                  <motion.div
                    key={projectsData[currentIndex].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full"
                  >
                    <div className="relative group cursor-pointer">
                      <img
                        src={projectsData[currentIndex].image || "https://via.placeholder.com/800x400?text=Project+Image"}
                        alt={projectsData[currentIndex].title}
                        className="w-full h-64 object-cover rounded mb-4"
                        onError={(e) => {
                          console.log("Image failed to load:", projectsData[currentIndex].image);
                          e.target.src = "https://via.placeholder.com/800x400?text=Project+Image";
                        }}
                      />
                      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
                        <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold text-lg">
                          View Details
                        </span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{projectsData[currentIndex].title}</h3>
                    <p className="text-gray-700 mb-4">{projectsData[currentIndex].description}</p>
                    <div className="flex space-x-2">
                      {projectsData[currentIndex].tags && projectsData[currentIndex].tags.map((tag, index) => (
                        <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </Link>
              </div>
              
              {/* Navigation Arrows */}
              <button 
                onClick={goToPrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
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
                    className={`w-3 h-3 rounded-full ${
                      currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500">No projects available.</p>
          )}
        </div>
      </div>
    </section>
  );
}