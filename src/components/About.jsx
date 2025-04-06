import React from 'react';

export default function About() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bio */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">About Me</h2>
            <p className="mb-4">
            I am a designer with a specialization in UX/UI Design. 
            Growing up with technology, I have become fascinated with how they create engaging experiences. 
            This has inspired me to create similar experiences for others. My work blends research, design, and code.
            </p>
            <p>
              Skills include UX/UI design, wireframing & front-end development.
            </p>
          </div>
  
          {/* Tools Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Tools I Use</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                <span>Figma</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                <span>Adobe XD</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                <span>React</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }