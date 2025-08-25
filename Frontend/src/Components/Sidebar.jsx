import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-1/4 min-h-screen p-6 rounded-lg shadow-md flex flex-col gap-6">
      {/* Top Button */}
      <button className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded">
        Your Public Event
      </button>

      {/* Feature Navigation */}
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold mb-2">Features</h2>
        <a href="#ai-features" className="hover:text-gray-300 cursor-pointer">AI Features</a>
        <a href="#journaling" className="hover:text-gray-300 cursor-pointer">Journaling</a>
        <a href="#exercise" className="hover:text-gray-300 cursor-pointer">Exercise</a>
        <a href="#personal-touch" className="hover:text-gray-300 cursor-pointer">Personal Touch</a>
      </div>
    </div>
  );
};

export default Sidebar;
