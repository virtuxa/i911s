// src/components/Schedule.js
import React, { useState } from 'react';
import WeekToggle from './WeekToggle';
import DayView from './DayView';

const Schedule = ({ scheduleData }) => {
  // Функция для определения текущей недели на основе даты
  const getCurrentWeekParity = () => {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    return weekNumber % 2 !== 0 ? 'even' : 'odd';
  };

  const currentWeekParity = getCurrentWeekParity(); // Определяем текущую неделю на основе даты
  const [isEvenWeek, setIsEvenWeek] = useState(currentWeekParity); // Управляет отображаемой неделей

  // Получение текущей даты
  const today = new Date();

  // Функция для вычисления даты каждого дня недели
  const getDateForDay = (dayIndex, currentWeek) => {
    const dayOffset = dayIndex - (today.getDay() === 0 ? 6 : today.getDay() - 1);
    const offset = currentWeek === currentWeekParity ? dayOffset : dayOffset + 7;
    const date = new Date(today);
    date.setDate(today.getDate() + offset);
    return date.toLocaleDateString();
  };

  const dayNames = {
    Monday: 'Понедельник',
    Tuesday: 'Вторник',
    Wednesday: 'Среда',
    Thursday: 'Четверг',
    Friday: 'Пятница',
    Saturday: 'Суббота',
    Sunday: 'Воскресенье',
  };

  const daysOfWeek = Object.keys(dayNames);

  // Проверка наличия данных
  if (!scheduleData) {
    return <div className="text-center">Расписание не найдено для выбранной группы.</div>;
  }

  const currentSchedule = scheduleData[isEvenWeek];

  if (!currentSchedule) {
    return <div className="text-center">Расписание для выбранной недели не найдено.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-gray-100 to-gray-300 p-6">
      <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Расписание занятий</h1>
        <div className="text-center mb-4">
          <span className="text-xl">{`Текущая неделя: ${currentWeekParity === 'even' ? 'Четная' : 'Нечетная'}`}</span>
        </div>
        <WeekToggle isEvenWeek={isEvenWeek} setIsEvenWeek={setIsEvenWeek} />
        <div className="mt-6 grid grid-cols-1 gap-4">
          {daysOfWeek.map((day, index) => (
            <DayView
              key={day}
              day={`${dayNames[day]} (${getDateForDay(index, isEvenWeek)})`}
              subjects={currentSchedule[day] || []}
              isToday={currentWeekParity === isEvenWeek && today.getDay() === (index === 6 ? 0 : index + 1)} // Проверка на текущий день и текущую неделю
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
