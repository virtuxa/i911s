// src/components/DayView.js
import React from 'react';

const DayView = ({ day, subjects, isToday }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 mb-4 ${isToday ? 'border-4 border-blue-500' : ''}`}>
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">{day}</h2>
      {subjects.length > 0 ? (
        <ul className="space-y-4">
          {subjects.map((subject, index) => (
            <li
              key={index}
              className="flex items-center p-4 bg-gray-50 rounded-lg shadow-sm border-l-4"
              style={{ borderColor: subject.type.includes('лаб') ? 'blue' : subject.type.includes('пр') ? 'green' : 'red' }}
            >
              <div className="flex-1">
                <div className="text-lg font-semibold">{subject.time} - {subject.type}</div>
                {subject.teacher && <div className="text-gray-600">Преподаватель: {subject.teacher}</div>}
                {subject.room && <div className="text-gray-600">Аудитория: {subject.room}</div>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">Пар нет</div>
      )}
    </div>
  );
};

export default DayView;
