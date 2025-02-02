import React from 'react';

const AstronautCard = ({ astronaut }) => {
  return (
    <div className="border rounded p-4">
      <div className="w-48 h-48 mx-auto mb-4 overflow-hidden">
        <img 
          src={astronaut.image} 
          alt={astronaut.name} 
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{astronaut.name}</h3>
      <p className="text-gray-600">{astronaut.bio}</p>
      <p className="mb-2">Nationality: {astronaut.nationality}</p> {/* Display nationality */}
      <p>Missions: {astronaut.missions.join(', ')}</p> {/* Display missions */}
    </div>
  );
};

export default AstronautCard;