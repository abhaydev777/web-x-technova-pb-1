import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getMissionData } from '../services/countdownApi';

const MissionDetails = () => {
  const { missionId } = useParams();
  const [mission, setMission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMissionData = async () => {
      setLoading(true);
      setError(null);

      try {
        const data = await getMissionData(missionId); // Pass missionId to the API function
        setMission(data);
      } catch (err) {
        setError("Error fetching mission details.");
        console.error("Error fetching mission details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMissionData();
  }, [missionId]); // Add missionId to the dependency array

  if (loading) {
    return <div>Loading mission details...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  if (!mission) {
    return <div>Mission details not found.</div>;
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{mission.name}</h2>
      <img src={"https://sxcontent9668.azureedge.us/cms-assets/assets/Eva_Suit_Desktop_alternate_1cf9bae18e.jpg"} alt={mission.name} className="w-full h-64 object-cover mb-4 rounded" />
      <p className="mb-2"><strong>Date:</strong> {mission.date}</p>
      <p className="mb-2"><strong>Description:</strong> {mission.description}</p>
      <p className="mb-2"><strong>Target:</strong> {mission.target}</p>
      {/* ... other mission details */}
    </div>
  );
};

export default MissionDetails;