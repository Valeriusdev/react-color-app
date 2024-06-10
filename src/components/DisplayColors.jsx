import React, { useState } from 'react';

const DisplayColors = () => {
  const getRandomHexColor = () => {
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
  };

  const initialColors = ['#74cbd3', '#74cbd3', '#74cbd3', '#74cbd3'];

  const [colors, setColors] = useState(initialColors);

  const generateRandomColors = () => {
    const newColors = Array.from({ length: 4 }, () => getRandomHexColor());
    setColors(newColors);
  };

  const setToDefault = () => {
    setColors(initialColors);
  };

  const setToWhite = () => {
    setColors(['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF']);
  };

  const setToBlack = () => {
    setColors(['#000000', '#000000', '#000000', '#000000']);
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto bg-green-700 rounded-lg p-6 border border-green-900 shadow-lg">
      <div className="flex space-x-4">
        {colors.map((color, index) => (
          <div
            key={index}
            className="w-16 h-16 rounded-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
      <div>
        <select
          onChange={(e) => {
            const selectedOption = e.target.value;
            if (selectedOption === 'default') setToDefault();
            else if (selectedOption === 'white') setToWhite();
            else if (selectedOption === 'black') setToBlack();
          }}
          className="px-4 py-2 mt-5 bg-white border border-gray-300 rounded-md"
        >
          <option value="default">Default</option>
          <option value="white">White</option>
          <option value="black">Black</option>
        </select>
      </div>
      <button
        onClick={generateRandomColors}
        className="px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Generate Random Colors
      </button>
    </div>
  );
};

export default DisplayColors;
