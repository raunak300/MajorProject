import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const Icon = ({ path, viewBox = "0 0 24 24", className = "w-5 h-5" }) => (
  <svg className={className} fill="currentColor" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
    <path d={path} />
  </svg>
);

const PublicCard = () => {
  const events = [
    {
      VENT_ID: 1,
      Title: "Music Festival",
      description: "An outdoor music festival with live bands and food trucks.",
      comments: ["Awesome event!", "Had a great time!", "Looking forward to next year!"]
    },
    {
      VENT_ID: 2,
      Title: "Tech Conference",
      description: "A conference for tech enthusiasts and professionals.",
      comments: ["Very informative.", "Loved the keynote session!", "Great networking opportunity."]
    },
    {
      VENT_ID: 3,
      Title: "Art Exhibition",
      description: "An exhibition showcasing modern art pieces from local artists.",
      comments: ["Beautiful artwork.", "Very inspiring!", "Would love to see more."]
    }
  ];

  return (
    <div className="flex flex-col gap-10 top-10 p-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-purple-300 text-center drop-shadow-lg">Your Public Events</h1>
      {events.map((event) => (
        <motion.div
          key={event.VENT_ID}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-purple-900/40 backdrop-blur-lg border border-purple-700/40 text-white p-6 rounded-3xl shadow-2xl w-full mx-auto transition-transform duration-300 hover:scale-[1.02]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <div className="text-2xl font-bold text-purple-200">{event.Title}</div>
              <p className="text-gray-300 mt-1">{event.description}</p>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full shadow-lg transition-colors duration-200 whitespace-nowrap">
              See Details
            </button>
          </div>

          <div className="border-t border-purple-500/50 pt-4 mt-4">
            <div className="font-semibold text-gray-300 mb-3">Comments ({event.comments.length})</div>
            <div className="flex flex-col gap-2">
              {event.comments.map((cmt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-gray-700/70 p-3 rounded-lg text-sm hover:bg-gray-600/80 transition-colors duration-200"
                >
                  {cmt}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};


export default PublicCard;
