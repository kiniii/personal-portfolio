import React from 'react';

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      className="h-screen flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div>
        <h1 className="text-5xl font-bold mb-4">Hey, I'm Kinlok</h1>
        <p className="text-2xl mb-8">UX Designer & Developer</p>
      </div>
    </motion.section>
  );
}