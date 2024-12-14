import React from "react";

const Filter = ({ filter, onFilterChange }) => {
  const options = [
    { label: "Все", value: "all" },
    { label: "Без пересадок", value: "0" },
    { label: "1 пересадка", value: "1" },
    { label: "2 пересадки", value: "2" },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Количество пересадок</h2>
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex gap-3 items-center border-amber-600">
            <input
              type="checkbox"
              checked={filter === option.value}
              onChange={() => onFilterChange(option.value)}
              // className="w-6 h-6 appearance-none border-2 border-blue-500 text-blue-500 rounded focus:ring focus:ring-blue-300 focus:outline-none"
              className="appearance-none  w-8 h-8 border-2 border-blue-500 rounded-md checked:border-blue-500 focus:ring focus:ring-blue-300 checked:bg-white checked:before:content-['✔'] checked:before:text-blue-500 checked:before:text-xl checked:before:flex checked:before:justify-center checked:before:items-center"

            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default Filter;
