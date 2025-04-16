import React from 'react';

export default function About() {
  return (
    <section className="py-20 flex h-screen" id="about">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Photo */}
        <div className="flex justify-center">
          {/* Replace this with your actual image path */}
          <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src="src/assets/pfp.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Bio */}
        <div>
          <p className="mb-4">
            Born in 2000, based in the Netherlands,<br></br>
            I grew up with technology and became fascinated with how they can create refreshing experiences.
            <br></br><br></br>With this in mind, I aim to create new experiences through experiments and thoughts.
          </p>
        </div>
      </div>
    </section>
  );
}