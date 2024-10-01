// src/components/Schedule.js
import React, { useState } from 'react';
import WeekToggle from './WeekToggle';
import DayView from './DayView';

const Schedule = () => {
    const getCurrentWeekParity = () => {
        const today = new Date();
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
        const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
        return weekNumber % 2 === 0;
    };

    const [isEvenWeek, setIsEvenWeek] = useState(getCurrentWeekParity());

    const dayNames = {
        Monday: 'Понедельник',
        Tuesday: 'Вторник',
        Wednesday: 'Среда',
        Thursday: 'Четверг',
        Friday: 'Пятница',
        Saturday: 'Суббота',
        Sunday: 'Воскресенье',
    };

    const scheduleData = {
        even: {
            Monday: [
                { time: '14:55', type: 'лаб ТС НАВИГ. И УД', teacher: 'Ершов С.О.', room: '278' },
                { time: '16:45', type: 'лек ИНФ. КАНАЛЫ СУ', teacher: 'Шаров С.Н.', room: '259' },
                { time: '18:30', type: 'лек ОСН. НАВЕДЕНИЯ', teacher: 'Александров А.А.', room: '259' },
                { time: '20:05', type: 'лаб ОСН. НАВЕДЕНИЯ', teacher: 'Александров А.А.', room: '278' },
            ],
            Wednesday: [
                { time: '12:40', type: 'лек МИКРОПРОЦ.СР-ВА', teacher: 'Лосев С.А.', room: '313а' },
                { time: '14:55', type: 'лек БАЗЫ ДАННЫХ', teacher: 'Смирнов Н.В.', room: '259' },
                { time: '16:45', type: 'лек ОПТ.УПРАВЛЕНИЕ', teacher: 'Кабанов С.А.', room: '259' },
                { time: '18:30', type: 'пр ОПТ.УПРАВЛЕНИЕ', teacher: 'Кабанов С.А.', room: '346' },
            ],
            // Остальные дни недели...
        },
        odd: {
            Monday: [
                { time: '14:55', type: 'пр ИНФ. КАНАЛЫ СУ', teacher: 'Шаров С.Н.', room: '346' },
                { time: '16:45', type: 'лек ИНФ. КАНАЛЫ СУ', teacher: 'Шаров С.Н.', room: '259' },
                { time: '18:30', type: 'лек ОСН. НАВЕДЕНИЯ', teacher: 'Александров А.А.', room: '259' },
            ],
            Wednesday: [
                { time: '12:40', type: 'лек МИКРОПРОЦ.СР-ВА', teacher: 'Лосев С.А.', room: '315' },
                { time: '14:55', type: 'лек БАЗЫ ДАННЫХ', teacher: 'Смирнов Н.В.', room: '259' },
                { time: '16:45', type: 'лек ОПТ.УПРАВЛЕНИЕ', teacher: 'Кабанов С.А.', room: '259' },
                { time: '18:30', type: 'пр ОПТ.УПРАВЛЕНИЕ', teacher: 'Кабанов С.А.', room: '346' },
            ],
            // Остальные дни недели...
        },
    };

    const currentSchedule = isEvenWeek ? scheduleData.even : scheduleData.odd;

    return (
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300 p-6">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Расписание занятий</h1>
                <WeekToggle isEvenWeek={isEvenWeek} setIsEvenWeek={setIsEvenWeek} />
                <div className="mt-6 grid grid-cols-1 gap-4">
                    {Object.keys(currentSchedule).map((day) => (
                        <DayView key={day} day={dayNames[day]} subjects={currentSchedule[day] || []} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Schedule;
