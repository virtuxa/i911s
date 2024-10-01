// src/App.js
import React, { useState } from 'react';
import Schedule from './components/Schedule';
import GroupSelector from './components/GroupSelector';
import schedulesData from './data/schedules.json';

function App() {
  const [selectedGroup, setSelectedGroup] = useState(Object.keys(schedulesData)[0]);

  return (
    <div className="App">
      <h1 className="text-4xl font-bold text-center mt-6">Расписание занятий</h1>
      <div className="container mx-auto p-4">
        <GroupSelector
          groups={Object.keys(schedulesData)}
          selectedGroup={selectedGroup}
          onSelectGroup={setSelectedGroup}
        />
        <Schedule scheduleData={schedulesData[selectedGroup]} />
      </div>
    </div>
  );
}

export default App;
