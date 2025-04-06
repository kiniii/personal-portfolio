import { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "../data/projects";
import React from 'react';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Filter Buttons */}
        <div className="flex space-x-4 mb-12">
          <button
            className={`px-4 py-2 rounded ${
              activeCategory === "all" ? "bg-primary text-white" : "text-primary"
            }`}
            onClick={() => setActiveCategory("all")}
          >
            All
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeCategory === "web" ? "bg-primary text-white" : "text-primary"
            }`}
            onClick={() => setActiveCategory("web")}
          >
            Web Design
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeCategory === "mobile" ? "bg-primary text-white" : "text-primary"
            }`}
            onClick={() => setActiveCategory("mobile")}
          >
            Mobile Apps
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}