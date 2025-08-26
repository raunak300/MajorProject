import React from 'react';
import { useNavigate } from 'react-router-dom';

const Icon = ({ path, viewBox = "0 0 24 24", className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
    <path d={path} />
  </svg>
);

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-950 text-white h-full w-full p-6 flex flex-col gap-8 border-r border-purple-800 shadow-2xl">
      
      {/* Top Button */}
      <button className="bg-purple-700 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-zinc-950 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
        Your Public Event
      </button>

      {/* Feature Navigation */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-purple-400 mb-2">Features</h2>
        
        {/* Navigation Buttons with Icons */}
        <button
          onClick={() => navigate("/features")}
          className="flex items-center gap-4 py-3 px-3 rounded-lg hover:bg-purple-900/40 transition-colors duration-200 group text-lg font-medium text-gray-200"
        >
          <Icon path="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" className="w-6 h-6" />
          <span className="group-hover:text-white transition-colors">AI Features</span>
        </button>

        <button
          onClick={() => navigate("/journal")}
          className="flex items-center gap-4 py-3 px-3 rounded-lg hover:bg-purple-900/40 transition-colors duration-200 group text-lg font-medium text-gray-200"
        >
          <Icon path="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" className="w-6 h-6" />
          <span className="group-hover:text-white transition-colors">Journaling</span>
        </button>

        <button
          onClick={() => navigate("/exercise")}
          className="flex items-center gap-4 py-3 px-3 rounded-lg hover:bg-purple-900/40 transition-colors duration-200 group text-lg font-medium text-gray-200"
        >
          <Icon path="M13 13.91V10c0-1.65-1.35-3-3-3s-3 1.35-3 3v4.18c-1.16-.62-2-1.85-2-3.32V10c0-2.76 2.24-5 5-5s5 2.24 5 5v3.91l4 2.11v-1.74c0-2.42 1.77-4.43 4.07-4.88L20 9.87V13h-2v-3.13l-4-2.11z" className="w-6 h-6" />
          <span className="group-hover:text-white transition-colors">Exercise</span>
        </button>

        <button
          onClick={() => navigate("/personal")}
          className="flex items-center gap-4 py-3 px-3 rounded-lg hover:bg-purple-900/40 transition-colors duration-200 group text-lg font-medium text-gray-200"
        >
          <Icon path="M19.35 10.04C18.67 6.59 15.64 4 12 4c-2.82 0-5.3 1.42-6.71 3.55C3.3 7.96 1 10.79 1 14c0 3.31 2.69 6 6 6h12c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" className="w-6 h-6" />
          <span className="group-hover:text-white transition-colors">Personal Touch</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
