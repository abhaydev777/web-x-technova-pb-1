import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Countdown from '../components/Countdown';
import { getMissionData } from '../services/countdownApi';
import { Link } from 'react-router-dom';

const Home = () => {
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [mission, setMission] = useState(null);
    const [targetDate, setTargetDate] = useState(null);

    useEffect(() => {
        const fetchMissionData = async () => {
          try {
            // Set default target date to 1 month from now
            const defaultDate = new Date();
            defaultDate.setMonth(defaultDate.getMonth() + 1);
            setTargetDate(defaultDate.toISOString());
          } catch (error) {
            console.error("Error fetching mission data:", error);
            // Set default target date on error
            const defaultDate = new Date();
            defaultDate.setMonth(defaultDate.getMonth() + 1);
            setTargetDate(defaultDate.toISOString());
          }
        };
      
        fetchMissionData();

        // Refresh countdown every minute
        const interval = setInterval(fetchMissionData, 60000);
        return () => clearInterval(interval);
    }, []);

    const upcomingMissions = [
        {
            id: 1,
            status: '',
            name: 'ADVANCING HUMAN SPACEFLIGHT',
            date: '2024-09-10',
            description: 'STARSHIPS ARE MEANT TO FLY',
            image: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg',
            crew: [],
            duration: '1 years',
            target: 'Mars'
        },
        {
            id: 2,
            status: 'RECENT LAUNCH',
            name: 'ADVANCING HUMAN SPACEFLIGHT',
            date: '2024-09-10',
            description: 'Falcon 9 launched the Hisdesat SpainSat NG I',
            image: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Spain_Sat_NG_I_LC_39_A_2025_01_29_DSC_6165_Website_ac0d85f911.jpg',
            crew: [],
            duration: '1 years',
            target: 'Mars'
        },
        {
            id: 3,
            status: 'RECENT LAUNCH',
            name: "Starship's Seventh Flight Test",
            date: '2024-09-10',
            description: 'The first Starship flight test of 2025 flew with ambitious goals',
            image: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Flight_7_Website_Desktop_7_4afb3a9d9a.jpg',
            crew: [],
            duration: '1 years',
            target: 'Mars'
        },
        {
          id: 4,
          status: '',
          name: 'Artemis I',
          date: '2024-03-15', 
          description: "Around the Moon with NASA's First Launch of SLS with Orion",
          image: 'https://www.nasa.gov/wp-content/uploads/2023/02/Astronauts-at-Artemis-I-Launch-Attempt.jpg?resize=2000,1333',
          crew: [], // No crew for uncrewed mission
          duration: '25 days',
          target: 'Moon'
        },
        {
          id: 5,
          status: '',
          name: 'Falcon 9 Returns to Flight',
          date: '2024-04-01',
          description: 'A successful droneship landing',
          image: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_G9_3_San_Miq_3043_Desktop_v2_eb5f1612d4.jpg',
          crew: [],
          duration: '6 months', 
          target: 'Moon'
        },
        {
          id: 6,
          status: '',
          name: 'ON THE PATH TO RAPID REUSABILITY',
          date: '2028-07-20',
          description: 'The third flight of Starship provided a glimpse through brilliant plasma of a rapidly reusable future on the horizon',
          image: 'https://sxcontent9668.azureedge.us/cms-assets/assets/Starship_OTF_3_Onboard_20240315_ship28_mpeg_ts_stream4_00_23_55_15_still022_7fee0b1912.jpg',
          crew: [],
          duration: '3 years',
          target: 'Mars'
        }
    ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.5 // Increased from 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 1.2 // Increased from 0.5
      }
    }
  };

  const popupVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.5,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100, // Decreased from 300
        damping: 15 // Decreased from 25
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      y: 50,
      transition: {
        duration: 0.8 // Increased from 0.3
      }
    }
  };

  const glowVariants = {
    initial: {
      textShadow: "0 0 0px rgba(255,255,255,0)"
    },
    animate: {
      textShadow: [
        "0 0 0px rgba(255,255,255,0)",
        "0 0 10px rgba(255,255,255,0.5)",
        "0 0 15px rgba(255,255,255,0.5)",
        "0 0 10px rgba(255,255,255,0.5)",
        "0 0 0px rgba(255,255,255,0)"
      ],
      transition: {
        duration: 4, // Increased from 2
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-black text-gray-100 pt-16 rounded-3xl overflow-hidden relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent"></div>
      </div>

      {/* Hero Section */}
      <motion.div 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-3xl"
        variants={itemVariants}
      >
        <div className="absolute inset-0 bg-[url('/space-bg.jpg')] bg-cover bg-center opacity-30 rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black rounded-3xl" />
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-transparent"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          >
            Explore The Final Frontier
          </motion.h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Join us on humanity's greatest adventure as we reach for the stars
          </p>
        </div>
      </motion.div>

      {/* Countdown Section */}
      <motion.div 
        className="relative -mt-20 z-20 max-w-4xl mx-auto px-4"
        variants={itemVariants}
      >
        <div className="bg-zinc-900 backdrop-blur-lg bg-opacity-90 rounded-3xl shadow-2xl border border-zinc-800 p-8 relative overflow-x-auto">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] rounded-3xl"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-3xl"></div>
          </div>
          <div className="relative">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-200">
              Next Launch Countdown
            </h2>
            {targetDate && <Countdown targetDate={targetDate} />}
          </div>
        </div>
      </motion.div>

      {/* Missions Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent"
          variants={itemVariants}
        >
          Upcoming Missions
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 gap-8"
          variants={containerVariants}
        >
          {upcomingMissions.map((mission, index) => (
            <motion.div 
              key={mission.id}
              variants={itemVariants}
              className="relative h-[70vh] rounded-3xl overflow-hidden group"
            >
              <div className="absolute inset-0">
                <img 
                  src={mission.image} 
                  alt={mission.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-1000"/>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-1000">
                <p className="text-base font-medium tracking-wider text-gray-400 mb-2">{mission.status}</p>
                <h3 className="text-4xl font-bold mb-4 text-white">{mission.name}</h3>
                <p className="text-lg text-gray-200 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200">
                  {mission.description}
                </p>
                <motion.button 
                  whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.5 } }}
                  className="px-8 py-3 bg-white cursor-pointer text-black rounded-full font-bold hover:bg-gray-200 transition-colors opacity-0 group-hover:opacity-100 duration-1000 delay-300"
                >
                  <Link to={`/missions/${mission.id}`} className=""> {/* Use Link here! */}
                        Learn More
                    </Link>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="bg-zinc-900 py-16 px-4 rounded-3xl relative"
        variants={itemVariants}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-3xl"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h3 className="text-3xl font-bold mb-6 text-gray-200">Ready to Join the Mission?</h3>
          <p className="text-xl text-gray-400 mb-8">
            Subscribe to our newsletter for exclusive updates and mission briefings
          </p>
          <form onSubmit={(e) => {
            e.preventDefault();
            const email = e.target.email.value;
            console.log('Subscribing email:', email);
            e.target.email.value = '';
            setShowSuccessPopup(true);
          }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="px-6 py-3 bg-gray-800 text-white rounded-full w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                whileTap={{ scale: 0.95, transition: { duration: 0.5 } }}
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-colors duration-500 w-full sm:w-auto"
              >
                Stay Updated
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            onClick={() => setShowSuccessPopup(false)}
          >
            <motion.div
              className="bg-zinc-900 p-8 rounded-3xl shadow-2xl border border-purple-500/30 relative max-w-md mx-4"
              variants={popupVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] rounded-3xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-3xl"></div>
              </div>
              <div className="relative">
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
                <h3 className="text-2xl font-bold text-center mb-2 text-gray-200">Success!</h3>
                <p className="text-gray-400 text-center mb-6">
                  Thanks for subscribing! You will receive updates soon.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}
                  whileTap={{ scale: 0.95, transition: { duration: 0.5 } }}
                  onClick={() => setShowSuccessPopup(false)}
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition-colors duration-500"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Home;