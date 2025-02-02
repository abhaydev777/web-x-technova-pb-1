import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AstronautCard from '../components/AstronautCard';

const AstronautProfiles = () => {
  const [showPopup, setShowPopup] = useState(false);

  const astronauts = [
    {
      id: 1,
      name: 'Valentina Tereshkova',
      bio: 'First woman in space.',
      image: 'https://images-prod.anothermag.com/640/azure/another-prod/340/7/347259.jpg',
      missions: ['Vostok 6'],
      nationality: 'Soviet Union'
    },
    {
      id: 2,
      name: 'Neil Armstrong',
      bio: 'First person to walk on the moon. Commander of Apollo 11.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Neil_Armstrong_pose.jpg/800px-Neil_Armstrong_pose.jpg',
      missions: ['Apollo 11'],
      nationality: 'United States'
    },

    {
      id: 3,
      name: 'Buzz Aldrin',
      bio: 'Apollo 11 astronaut. Lunar Module pilot.',
      image: 'https://cdn.britannica.com/55/69055-050-8D293FF9/Buzz-Aldrin-1969.jpg?w=400&h=300&c=crop',
      missions: ['Apollo 11'],
      nationality: 'United States'
    },

    {
      id: 4,
      name: 'Sally Ride',
      bio: 'First American woman in space.',
      image: 'https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/44/2018/02/Sally_Ride_1979.jpg',
      missions: ['STS-7'],
      nationality: 'United States'
    },

    {
      id: 5,
      name: 'John Glenn',
      bio: 'First American to orbit the Earth.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/GPN-2000-001027.jpg/800px-GPN-2000-001027.jpg',
      missions: ['STS-95'],
      nationality: 'United States'
    },

    {
      id: 6,
      name: 'Yuri Gagarin',
      bio: 'First human to journey into outer space. Soviet Air Forces pilot.',
      image: 'https://www.universetoday.com/wp-content/uploads/2010/10/gagarin-e1431456895431.jpg',
      missions: ['Vostok 1'],
      nationality: 'Soviet Union'
    }
    // ... more astronauts
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
        Astronaut Profiles
      </motion.h2>

      <div className={`max-w-7xl mx-auto px-4 py-8 relative ${showPopup ? 'blur-sm' : ''}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {astronauts.map((astronaut, index) => (
            <motion.div
              key={astronaut.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 30px rgba(75, 85, 99, 0.3)"
              }}
              className="backdrop-blur-sm rounded-3xl relative cursor-pointer"
              onClick={() => setShowPopup(true)}
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-3xl"></div>
              </div>
              <div className="relative">
                <AstronautCard astronaut={astronaut} />
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-purple-900 p-8 rounded-2xl text-center shadow-2xl border border-purple-500/30 max-w-md w-full mx-4"
              onClick={e => e.stopPropagation()}
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                className="mb-6"
              >
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">Under Development</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
              </motion.div>
              
              <p className="text-gray-300 mb-6">This feature is currently under development. Check back soon for updates!</p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold shadow-lg hover:shadow-purple-500/25 transition-shadow"
                onClick={() => setShowPopup(false)}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AstronautProfiles;