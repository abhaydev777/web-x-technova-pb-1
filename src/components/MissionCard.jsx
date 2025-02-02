import React from 'react';
import { Link } from 'react-router-dom';

const MissionCard = ({ mission }) => {
  return (
    <div className="border rounded p-4">
       <img src={mission.image} alt={mission.name} className="w-full h-48 object-cover mb-2 rounded" />
      <h3 className="text-xl font-semibold mb-2">{mission.name}</h3>
      <p className="text-gray-600 mb-2">{mission.date}</p>
      <p className="mb-2">{mission.description}</p>
      <p className="mb-2">Target: {mission.target}</p>
      <Link to={`/missions/${mission.id}`} className="text-blue-500">Learn More</Link> {/* Link to details */}
    </div>
  );
};

export default MissionCard;