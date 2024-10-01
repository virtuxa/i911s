// src/components/DayView.js
import React from 'react';
import { FaChalkboardTeacher, FaFlask, FaBook } from 'react-icons/fa';

const getBorderColor = (type) => {
  if (type.includes('лаб')) {
    return 'border-blue-500';
  } else if (type.includes('пр')) {
    return 'border-green-500';
  } else if (type.includes('лек')) {
    return 'border-red-500';
  }
  return 'border-gray-300';
};

const getIcon = (type) => {
  if (type.includes('лаб')) return <FaFlask className="text-blue-500" />;
  if (type.includes('пр')) return <FaChalkboardTeacher className="text-green-500" />;
  if (type.includes('лек')) return <FaBook className="text-red-500" />;
  return null;
};

const DayView = ({ day, subjects }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">{day}</h2>
      {subjects.length > 0 ? (
        <ul className="space-y-4">
          {subjects.map((subject, index) => (
            <li
              key={index}
              className="flex items-center p-4 bg-white rounded-lg shadow-md border-l-4"
              style={{ borderColor: getBorderColor(subject.type) }}
            >
              <div className="mr-4 text-2xl">{getIcon(subject.type)}</div>
              <div className="flex-1">
                <div className="text-lg font-semibold">{subject.time} - {subject.type}</div>
                {subject.teacher && <div className="text-gray-600">Преподаватель: {subject.teacher}</div>}
                {subject.room && <div className="text-gray-600">Аудитория: {subject.room}</div>}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-500">Нет занятий</div>
      )}
    </div>
  );
};

export default DayView;
