import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import MissionDetails from './pages/MissionDetails';
import AstronautProfiles from './pages/AstronautProfiles';
import SpaceTech from './pages/SpaceTech';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/missions', label: 'Missions', icon: '🚀' },
    { path: '/astronauts', label: 'Astronauts', icon: '👨‍🚀' },
    { path: '/space-tech', label: 'Space Tech', icon: '🛸' }
  ];

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-gray-100">
        <div className="w-[95%] mx-[2.5%] top-4 fixed z-50">
          <div className="absolute inset-0 blur-xl bg-white/5 rounded-2xl" />
          <nav className="relative backdrop-blur-xl bg-[#0c0c0c] border border-purple-500/30 shadow-lg shadow-purple-500/20 rounded-2xl">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-2xl"></div>
            </div>
            <div className="container mx-auto px-4 relative">
              <div className="flex items-center justify-between h-16">
                {/* Logo */}
                <Link to="/">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-2xl font-bold"
                  >
                    <span className="font-['Helvetica'] tracking-[-1px] text-white">SPACE-X</span>
                  </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  {navItems.map((item) => (
                    <NavLink key={item.path} {...item} />
                  ))}
                </div>

                {/* Mobile menu button */}
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
                  whileTap={{ scale: 0.7, rotate: 360 }}
                  whileHover={{ 
                    scale: 1.2,
                    boxShadow: "0 0 30px rgba(216, 180, 254, 0.7)"
                  }}
                >
                  <motion.svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={isOpen ? { 
                      rotate: 720,
                      scale: [1, 1.4, 0.8, 1.2, 1]
                    } : { rotate: 0 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                  >
                    {isOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </motion.svg>
                </motion.button>
              </div>

              {/* Mobile Navigation */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: 1,
                      height: "auto",
                      scale: 1,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut"
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      height: 0,
                      scale: 0.9,
                      transition: {
                        duration: 0.3
                      }
                    }}
                    className="md:hidden py-4 bg-[#0c0c0c] absolute w-full left-0 overflow-hidden backdrop-blur-xl border-t border-purple-500/30 rounded-b-2xl"
                  >
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] rounded-b-2xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-b-2xl"></div>
                    </div>
                    <div className="flex flex-col space-y-2 relative">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.path}
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ 
                            x: 0, 
                            opacity: 1,
                            transition: {
                              duration: 0.3,
                              delay: index * 0.1
                            }
                          }}
                          exit={{ 
                            x: -50, 
                            opacity: 0,
                            transition: {
                              duration: 0.2,
                              delay: index * 0.05
                            }
                          }}
                          whileHover={{
                            scale: 1.1,
                            x: 15,
                            transition: { duration: 0.3 }
                          }}
                        >
                          <NavLink {...item} mobile onClick={() => setIsOpen(false)} />
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        <div className="container mx-auto p-4 pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/missions" element={<MissionDetails />} />
            <Route path="/astronauts" element={<AstronautProfiles />} />
            <Route path="/space-tech" element={<SpaceTech />} />
            <Route path="/missions/:missionId" element={<MissionDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

const NavLink = ({ path, label, icon, mobile, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <motion.div
      whileHover={{ 
        scale: 1.15,
        transition: { duration: 0.3, type: "spring" }
      }}
      whileTap={{ scale: 0.85 }}
    >
      <Link
        to={path}
        onClick={onClick}
        className={`group relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-500
          ${mobile ? 'text-lg' : ''}
          ${isActive 
            ? 'bg-gradient-to-r from-pink-500/40 to-purple-500/40 text-cyan-300 shadow-lg shadow-purple-500/30' 
            : 'text-gray-300 hover:bg-purple-600/40 hover:text-cyan-300 hover:shadow-lg hover:shadow-purple-500/20'
          }`}
      >
        <motion.span 
          className="transform transition-all duration-500"
          animate={isActive ? {
            scale: [1, 1.6, 0.7, 1.3, 1],
            rotate: [0, 720],
            transition: {
              duration: 0.8,
              ease: "easeInOut"
            }
          } : {}}
          whileHover={{
            rotate: 720,
            scale: 1.3,
            transition: { duration: 0.5 }
          }}
        >
          {icon}
        </motion.span>
        <span>{label}</span>
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400"
            layoutId="underline"
            initial={{ width: 0 }}
            animate={{ 
              width: "100%",
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 25
              }
            }}
          />
        )}
      </Link>
    </motion.div>
  );
};

export default App;