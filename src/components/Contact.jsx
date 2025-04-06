import React from 'react';

export default function Contact() {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border rounded"
              />
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 border rounded"
                rows="5"
              />
              <button
                type="submit"
                className="bg-primary text-white px-8 py-3 rounded hover:bg-opacity-90 transition"
              >
                Send Message
              </button>
            </form>
  
            {/* Social Links */}
            <div className="space-y-4">
              <a
                href="https://linkedin.com"
                className="flex items-center text-primary hover:text-opacity-80"
              >
  
                LinkedIn
              </a>
              <a
                href="https://github.com"
                className="flex items-center text-primary hover:text-opacity-80"
              >
                
              
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }