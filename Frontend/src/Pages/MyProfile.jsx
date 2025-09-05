import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Edit3, LogOut } from "lucide-react";
import { useAppStore } from "@/Storage/store";

const MyProfile = () => {
  const user=useAppStore(state=>state.user)
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a0f2e] to-black text-white">
      {/* Top section */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-6">
          {/* Avatar */}
          <Avatar className="w-28 h-28">
            <AvatarImage src="/panda.png" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          {/* User Info */}
          <div className="flex-1">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold">{user.ventId}</h2>
              
              <Button size="sm" variant="outline" className="bg-purple-700 text-white">
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-6 mt-3 text-gray-300">
              <span><b>{user.connections?.length  ||  '0'}</b> Connections</span>
            </div>

            {/* Bio */}
            <p className="mt-3 text-sm text-gray-400">
              🌙 Healing in silence | Anonymous soul | Mental wellness seeker
            </p>
          </div>
        </div>
      </div>
      <div>
        {user.connections && user.connections.lneght>0
          ?
          ( <div>
            {
              user.connections.map((friends,idx)=>{
                <div key={idx} >
                  {friends}
                </div>
              })
            }
          </div> )
          :
          ( <div>
            No User Exist
          </div>
         )
        }
      </div>
      {/* Divider */}
      {/* <div className="border-t border-gray-700 max-w-4xl mx-auto"></div>

      {/* Posts Grid */}
      {/* <div className="max-w-4xl mx-auto px-4 py-6 grid grid-cols-3 gap-4">
        {[...Array(9)].map((_, i) => (
          <Card key={i} className="bg-purple-950/40 hover:scale-105 transition transform cursor-pointer">
            <CardContent className="aspect-square flex items-center justify-center text-gray-400">
              <span>Post {i + 1}</span>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </div>
  );
};

export default MyProfile;
