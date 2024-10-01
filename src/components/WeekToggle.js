// src/components/WeekToggle.js
import React from 'react';

const WeekToggle = ({ isEvenWeek, setIsEvenWeek }) => {
  return (
    <div className="flex justify-center mb-6">
      <button
        className={`px-6 py-2 mx-2 rounded-full shadow-lg transition duration-300 ${
          isEvenWeek === 'even' ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'
        }`}
        onClick={() => setIsEvenWeek('even')}
      >
        Четная неделя
      </button>
      <button
        className={`px-6 py-2 mx-2 rounded-full shadow-lg transition duration-300 ${
          isEvenWeek === 'odd' ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'
        }`}
        onClick={() => setIsEvenWeek('odd')}
      >
        Нечетная неделя
      </button>
    </div>
  );
};

export default WeekToggle;
