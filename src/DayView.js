// src/components/DayView.js
import React from 'react';

// Функция для определения цвета полосы на основе типа занятия
const getBorderColor = (type) => {
    if (type.includes('лаб')) {
        return 'border-blue-500'; // Лабораторная
    } else if (type.includes('пр')) {
        return 'border-green-500'; // Практическое занятие
    } else if (type.includes('лек')) {
        return 'border-red-500'; // Лекция
    }
    return 'border-gray-300'; // По умолчанию
};

const DayView = ({ day, subjects }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">{day}</h2>
            <ul className="list-none space-y-4">
                {subjects.map((subject, index) => (
                    <li key={index} className="flex items-start space-x-4">
                        {/* Цветная вертикальная полоса */}
                        <div className={`w-1 ${getBorderColor(subject.type)} rounded-lg`}></div>
                        <div className="flex-1">
                            <div className="text-lg font-semibold text-gray-800">{subject.time} - {subject.type}</div>
                            {subject.teacher && <div className="text-gray-600">Преподаватель: {subject.teacher}</div>}
                            {subject.room && <div className="text-gray-600">Аудитория: {subject.room}</div>}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DayView;
