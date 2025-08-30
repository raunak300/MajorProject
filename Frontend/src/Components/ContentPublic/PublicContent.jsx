import PublicCard from "./PublicCard";
import { useState } from "react";

const PublicContent = () => {
  const [view, setView] = useState(false);
  const [ventId,setventID]=useState("VENT_EXAMPLE")

  const makeEvent = () => {
    setView(true);
  };

  const closeEvent = () => {
    setView(false);
  };

  return (
    <div className="py-8 relative">

      {/* Add Your Thoughts Button - top-right */}
      <div className="absolute top-5 right-0 mt-4 mr-2">
        <button
          className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-4 px-4 rounded-lg text-sm shadow-md transition-all duration-300 transform hover:scale-105"
          onClick={()=>makeEvent()}
        >
          Add Your Thoughts
        </button>
      </div>

      {/* Event Modal */}
      {view && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
          <div className="bg-zinc-900 p-6 rounded-lg w-full max-w-lg space-y-4 relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-lg font-bold"
              onClick={closeEvent}
            >
              X
            </button>
            <div>
              <label className="block text-gray-200 font-medium">Title:</label>
              <input className="w-full mt-1 p-2 rounded-md bg-zinc-800 text-white" />
            </div>
            <div>
              <label className="block text-gray-200 font-medium">VentId:</label>
              <input className="w-full mt-1 p-2 rounded-md bg-zinc-800 text-white " value={ventId} />
            </div>
            <div>
              <label className="block text-gray-200 font-medium">Description:</label>
              <textarea className="w-full mt-1 p-2 rounded-md bg-zinc-800 text-white" rows={4} />
            </div>
            <div>
              <label className="block text-gray-200 font-medium">Tags:</label>
              <select className="w-full mt-1 p-2 rounded-md bg-zinc-800 text-white">
                <option>Mental Wellness</option>
                <option>Sleep</option>
                <option>Exercise</option>
                <option>Food</option>
                <option>Music</option>
                <option>Movies</option>
                <option>Art</option>
                <option>Nature</option>
                <option>Gaming</option>
              </select>
            </div>
            <button className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg w-full mt-2">
              Add Event
            </button>
          </div>
        </div>
      )}

      {/* Public Cards */}
      {!view && <PublicCard />}
    </div>
  );
};

export default PublicContent;
