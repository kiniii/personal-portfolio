import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Photo */}
        <div className="flex justify-center">
          {/* Replace this with your actual image path */}
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img 
              src="src/assets/pfp.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
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
      </div>
    </section>
  );
}