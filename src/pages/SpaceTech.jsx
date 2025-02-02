import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SpaceTech = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedTech, setSelectedTech] = useState(null);

  const technologies = [
    {
      name: 'Ion Propulsion',
      description: 'Uses ionized gas for highly efficient, long-duration space travel.',
      icon: '🚀'
    },
    {
      name: 'Reusable Spacecraft', 
      description: 'Reduces the cost of space access by landing and reusing rockets and spacecraft.',
      icon: '🛸'
    },
    {
      name: '3D Printing in Space',
      description: 'Enables on-demand manufacturing of tools and parts in space.',
      icon: '🖨️'
    },
    {
      name: 'Artificial Gravity',
      description: 'Simulates gravity in space to mitigate the effects of long-term spaceflight on the human body.',
      icon: '🌍'
    },
    {
      name: 'Cryogenic Fuel Storage',
      description: 'Keeps rocket propellants at extremely low temperatures for extended missions.',
      icon: '❄️'
    },
    {
      name: 'Space Habitats',
      description: 'Self-sustaining environments designed for long-term human habitation in space.',
      icon: '🏠'
    },
    {
      name: 'Solar Sails',
      description: 'Uses radiation pressure from stars for propulsion, enabling fuel-free space travel.',
      icon: '⛵'
    },
    {
      name: 'Space Mining',
      description: 'Technology for extracting valuable resources from asteroids and other celestial bodies.',
      icon: '⛏️'
    },
    {
      name: 'Quantum Communication',
      description: 'Ultra-secure communication systems using quantum entanglement for space missions.',
      icon: '📡'
    },
    {
      name: 'Space Suits',
      description: 'Advanced protective gear enabling astronauts to work safely in the vacuum of space.',
      icon: '👨‍🚀'
    },
    {
      name: 'Nuclear Propulsion',
      description: 'Advanced propulsion systems using nuclear reactions for faster interplanetary travel.',
      icon: '⚛️'
    },
    {
      name: 'Space Telescopes',
      description: 'Advanced optical systems for observing distant celestial objects and phenomena.',
      icon: '🔭'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 pt-16 rounded-3xl overflow-hidden relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
      </div>

      <motion.h2 
        className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Space Technologies & Research
      </motion.h2>

      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 30px rgba(75, 85, 99, 0.3)"
              }}
              className="backdrop-blur-sm rounded-3xl relative"
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-3xl"></div>
              </div>
              <div className="relative p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{tech.icon}</span>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                    {tech.name}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {tech.description}
                </p>
                <motion.button 
                  className="mt-6 px-6 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-gray-200 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedTech(tech);
                    setShowPopup(true);
                  }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-zinc-900 p-8 rounded-2xl max-w-md mx-4 relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setShowPopup(false)}
              >
                ✕
              </button>
              <div className="text-center">
                <div className="text-6xl mb-4">{selectedTech?.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{selectedTech?.name}</h3>
                <p className="text-gray-400 mb-6">In Development</p>
                <p className="text-gray-300">
                  This feature is currently under development. Check back soon for more details about {selectedTech?.name}.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SpaceTech;