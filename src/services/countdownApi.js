// countdownApi.js (Mock API)
export const getMissionData = async (missionId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock mission data based on upcomingMissions array from Home.jsx
        const mockMissionData = {
          id: missionId,
          status: '',
          name: 'Mission-' + missionId,
          date: 'May 4, 2024',
          description: 'Mock mission description for ' + missionId, 
          image: '/mission' + missionId + '.jpg',
          crew: [],
          duration: '1 years',
          target: 'Mars'
        };
        resolve(mockMissionData);
      }, 500); // Reduced delay to 500ms for better UX
    });
};