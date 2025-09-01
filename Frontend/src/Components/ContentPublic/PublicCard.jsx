import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { MAKE_POST_CALL,MAKE_COMMENT } from "@/API/apicalls";
import { useAppStore } from "@/Storage/store";

const PublicCard = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setposts] = useState([])
  const [comment,setComment]=useState("")
  const ventId=useAppStore(state=>state.user.ventId)

  const addComment=async(comment)=>{
    const response=await  axios.post(MAKE_COMMENT,{comment:comment,ventId:ventId})
  }
  const callPosts=async()=>{
    try {
      const response=await axios.get(MAKE_POST_CALL,{withCredentials:true}) 
      if(response.status===200){
        const data=response.data.AllPost
        console.log(data)
        await setposts(data)
      }
    } catch (error) {
      alert("error ")
    }
  }
  useEffect(() => {
    callPosts()
  }, [])
  

  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="flex flex-col gap-10 top-10 p-4">
      <h1 className="text-3xl md:text-4xl font-extrabold text-purple-300 text-center drop-shadow-lg">
        Top Thoughts
      </h1>

      {posts.map((event) => (
        <motion.div
          key={event.VENT_ID}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-purple-900/40 backdrop-blur-lg border border-purple-700/40 text-white p-6 rounded-3xl shadow-2xl w-full mx-auto transition-transform duration-300 hover:scale-[1.02]"
        >
          <div>
            <div className="text-2xl font-bold text-purple-200">
              {event.Title}
            </div>
            <p className="text-gray-300 mt-1">
              {truncateText(event.Description)}
            </p>
          </div>

          {/* Preview Comments */}
          <div className="border-t border-purple-500/50 pt-4 mt-4">
            <div className="font-semibold text-gray-300 mb-3">
              Comments ({event.Comments?.length})
            </div>
            <div className="flex flex-col gap-2">
              {event.Comments.slice(0, 3).map((cmt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="text-sm flex items-start gap-2"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-500 flex-shrink-0"></div>
                  <div>
                    <span className="font-semibold">{cmt.user}</span>{" "}
                    <span className="text-gray-300">{cmt.text}</span>
                    <div className="text-xs text-gray-400 mt-1">{cmt.time}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ONE Read More Button */}
          <button
            onClick={() => setSelectedPost(event)}
            className="mt-4 text-purple-300 hover:text-purple-100 text-sm underline"
          >
            Read More
          </button>
        </motion.div>
      ))}

      {/* Full Post Overlay */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-purple-950/90 border border-purple-700 p-6 rounded-2xl shadow-2xl w-[90%] md:w-[650px] max-h-[85vh] overflow-y-auto text-white"
            >
              {/* Post Header */}
              <h2 className="text-3xl font-bold text-purple-200 mb-2">
                {selectedPost.Title}
              </h2>
              <p className="text-gray-300 mb-6">{selectedPost.Description}</p>

              {/* Comments with small Connect buttons */}
              <div className="border-t border-purple-500/50 pt-4">
                <div className="font-semibold text-gray-300 mb-3">
                  All Comments ({selectedPost.Comments?.length})
                </div>
                <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                  {selectedPost.Comments.map((cmt, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 justify-between"
                    >
                      {/* Avatar + Comment */}
                      <div className="flex gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-500 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold">{cmt.user}</span>{" "}
                          <span className="text-gray-300">{cmt.text}</span>
                          <div className="text-xs text-gray-400 mt-1">
                            {cmt.time}
                          </div>
                        </div>
                      </div>

                      {/* Small Connect Button */}
                      <button className="px-2 py-1 text-xs bg-purple-700 hover:bg-purple-700 rounded-md shadow">
                        Connect
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <input name="" id="" value={comment} placeholder="Enter your Comment..."
              className="mt-6 w-full border-b-3"
              onChange={e=>setComment(e.target.value)}
              ></input>
             <div  className="flex flex-row gap-4"  >
               <button
               className="mt-6 w-full bg-purple-900 hover:bg-purple-700 py-2 rounded-lg shadow-lg transition"
               onClick={e=>addComment(comment)}
              >
                Commment
              </button>

              {/* Close Button */}
              <button
                onClick={() => setSelectedPost(null)}
                className="mt-6 w-full bg-purple-900 hover:bg-purple-700 py-2 rounded-lg shadow-lg transition"
              >
                Close
              </button>
             </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PublicCard;
