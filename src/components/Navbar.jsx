import { Link } from "react-router-dom";
import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary">
            Kinlok Lau
          </Link>

          {/* Links */}
          <div className="space-x-6">
            <Link
              to="/"
              className="hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}