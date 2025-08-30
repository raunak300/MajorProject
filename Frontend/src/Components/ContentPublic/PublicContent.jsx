import { useAppStore } from "@/Storage/store";
import PublicCard from "./PublicCard";
import { useState } from "react";
import axios from "axios";
import { MAKE_POST } from "@/API/apicalls";

const PublicContent = () => {
  const [view, setView] = useState(false);
  const [title,setTitle ] = useState("")
  const [description, setdescription] = useState("")
  const [tags, settags] = useState()
  const user=useAppStore(status=>status.user);
  const [ventId,setventID]=useState(user.ventId)

  const makePost=async()=>{
   
    try {
       const res = await axios.post(`${MAKE_POST}`,{title:title,description:description,tag:tags,ventId:ventId},{withCredentials:true})
      if(res.status===200){
        alert(error.response?.data.message)
      }
    } catch (error) {
      alert(error);
    }
  }

  const makeEvent = () => {
    setView(true);
    console.log(user);
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
              <input className="w-full mt-1 p-2 rounded-md bg-zinc-800 text-white" value={title}
              onChange={e=>setTitle(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-200 font-medium">VentId:</label>
              <input className="w-full mt-1 p-2 rounded-md bg-zinc-800 text-white " readOnly value={ventId} />
            </div>
            <div>
              <label className="block text-gray-200 font-medium">Description:</label>
              <textarea className="w-full mt-1 p-2 rounded-md bg-zinc-800 text-white" rows={4}
                onChange={e=>setdescription(e.target.value)}
              />
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
            <button className="bg-purple-700 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded-lg w-full mt-2"
            onClick={e=>makePost()}
            >
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
