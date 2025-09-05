import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { MAKE_POST_CALL, MAKE_COMMENT,MAKE_CONNECT_REQUEST } from "@/API/apicalls";
import { useAppStore } from "@/Storage/store";

const PublicCard = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [comment, setComment] = useState("");
  const ventId = useAppStore((state) => state.user.ventId);

  // ✅ Add Comment
  const addComment = async (comment, selectedPostId) => {
    try {
      const response = await axios.post(
        MAKE_COMMENT,
        { message: comment, ventId: ventId, post: selectedPostId },
        { withCredentials: true }
      );
      if (response.status === 200) {
        console.log("Comment added successfully");
        setComment("");
        callPosts(); // refresh posts
      }
    } catch (error) {
      alert("Error in making comment");
    }
  };

  // ✅ Fetch Posts
  const callPosts = async () => {
    try {
      const response = await axios.get(MAKE_POST_CALL, { withCredentials: true });
      if (response.status === 200) {
        setPosts(response.data.AllPost);
      }
    } catch (error) {
      alert("Error fetching posts");
    }
  };

  const sendRequest=async (othId)=>{
    try {
      const response= await axios.post(MAKE_CONNECT_REQUEST, {ventId,othId}, {withCredentials:true})
      if(response.status===200){
        alert("Request Sent");
      }
    } catch (error) {
      alert("Error in Sending Request"+ error )
    }
  }

  useEffect(() => {
    callPosts();
  }, []);



  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div className="flex flex-col gap-12 p-6">
      {/* Section Title */}
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-purple-400 to-pink-500 
                     bg-clip-text text-transparent drop-shadow-md leading-normal pb-1 py-4">
        Top Thoughts
      </h1>

      {posts.map((event) => (
        <motion.div
          key={event._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-purple-950/10 via-zinc-900 to-purple-950
                     backdrop-blur-xl border border-purple-700/40 
                     rounded-3xl shadow-lg hover:shadow-purple-700/30
                     p-6 w-full mx-auto transition-all duration-500 hover:scale-[1.02]"
        >
          {/* Glow Accent */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-700/20 to-pink-700/20 
                          blur-2xl opacity-30 rounded-3xl pointer-events-none"></div>

          {/* Content */}
          <div className="relative">
            <h2 className="text-2xl font-bold text-purple-200">{event.Title}</h2>
            <p className="text-gray-300 mt-2">{truncateText(event.Description)}</p>
          </div>

          {/* Comments Preview */}
          <div className="relative border-t border-purple-500/20 pt-4 mt-4">
            <div className="font-semibold text-gray-400 text-sm mb-3">
              Comments ({event.Comments?.length || 0})
            </div>
            <div className="flex flex-col gap-2">
              {event.Comments?.slice(0, 2).map((cmt, idx) => (
                <motion.div
                  key={cmt._id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div>
                    <span className="font-semibold">{cmt.ventId}</span>
                    <div className="text-xs text-gray-400 mt-1">{cmt.message}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => setSelectedPost(event)}
            className="mt-4 text-sm font-semibold text-purple-300 hover:text-purple-100 transition cursor-pointer"
          >
            Read More →
          </button>
        </motion.div>
      ))}

      {/* Full Post Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-purple-950/90 via-zinc-900/90 to-purple-900/90
                        border border-purple-700 p-6 rounded-3xl shadow-2xl 
                        w-[95%] max-w-lg text-white"
            >
              {/* Glow Behind Modal */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 
                              blur-3xl opacity-30 rounded-3xl pointer-events-none"></div>

              {/* Comments */}
              <div className="border-t border-purple-500/50 pt-4">
                <div className="font-semibold text-gray-300 mb-3">
                  All Comments ({selectedPost.Comments?.length || 0})
                </div>
                <div className="space-y-4 max-h-60 overflow-y-auto pr-2">
                  {selectedPost.Comments?.map((cmt, idx) => (
                    <div
                      key={cmt._id}
                      className="flex items-start gap-3 justify-between"
                    >
                      <div className="flex gap-3 ">
                        <div className="flex flex-row gap-15  justify-between ">
                         <div>
                           <span className="font-semibold">{cmt.ventId}</span>{" "}
                          <span className="text-gray-300">{cmt.message}</span>
                          <div className="text-xs text-gray-400 mt-1">
                            {cmt.time}
                          </div>
                         </div>
                          

                          {
                            (cmt.status==='pending' || cmt.stauts==='rejected' || cmt.status==='connected' ) ? 
                            (
                              <div>
                                <button>
                                  {cmt.status}
                                </button>
                              </div>
                            )
                            
                            : 
                           ( <button className="bg-purple-500/50 rounded-md p-2 border-purple-500/20 " 
                            onClick={()=>sendRequest(cmt.ventId)}
                          >Connect
                          </button>)

                            
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Comment Input + Actions */}
                <input
                  value={comment}
                  placeholder="Write a comment..."
                  className="mt-6 w-full p-3 rounded-xl bg-zinc-800/80 border border-purple-700/30 
                            focus:border-purple-500 focus:ring-1 focus:ring-purple-500 
                            outline-none text-sm text-white placeholder-gray-400"
                  onChange={(e) => setComment(e.target.value)}
                />

                <div className="flex gap-4 mt-6">
                  <button
                    className="w-full bg-purple-900 hover:bg-purple-700 py-2 rounded-lg shadow-lg transition"
                    onClick={() => addComment(comment, selectedPost._id)}
                  >
                    Comment
                  </button>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="w-full bg-zinc-800 hover:bg-zinc-700 py-2 rounded-lg shadow-lg transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PublicCard;
