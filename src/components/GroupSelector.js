// src/components/GroupSelector.js
import React from 'react';

const GroupSelector = ({ groups, selectedGroup, onSelectGroup }) => {
  return (
    <div className="mb-6">
      <label htmlFor="group-select" className="block mb-2 text-lg font-semibold">
        Выберите группу:
      </label>
      <select
        id="group-select"
        value={selectedGroup}
        onChange={(e) => onSelectGroup(e.target.value)}
        className="px-4 py-2 border rounded-lg"
      >
        {groups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GroupSelector;
