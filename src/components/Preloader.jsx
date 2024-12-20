// src/components/Preloader.jsx
import React from "react";
import { motion } from "framer-motion"; 

const codeLines = [
  "Initializing environment...",
  "Loading modules...",
  "Compiling code...",
  "Running tests...",
  "Deploying application...",
];

const colors = [
  "text-green-400",
  "text-blue-400",
  "text-red-400",
  "text-yellow-400",
  "text-purple-400",
  "text-cyan-400",
];

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary z-50">
      <div className="text-white mb-4 text-lg font-semibold animate-pulse">
        Running Code...
      </div>
      <motion.div
        className="w-72 bg-gray-900 rounded-lg overflow-hidden shadow-xl border-4 border-gray-700 p-4"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          repeat: Infinity,
          duration: 5,
          ease: "easeInOut",
        }}
      >
        {codeLines.map((line, index) => (
          <motion.div
            key={index}
            className={`p-2 text-sm ${colors[index % colors.length]} font-mono`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.8 }}
          >
            {line}
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="w-64 bg-gray-800 rounded-full h-2 mt-4 overflow-hidden"
        animate={{ width: ["0%", "100%"] }}
        transition={{ duration: 5, ease: "easeInOut" }}
      >
        <div className="h-full bg-green-700 rounded-full"></div>
      </motion.div>
    </div>
  );
};

export default Preloader;
