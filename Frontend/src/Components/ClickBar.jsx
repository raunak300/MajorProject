import React from 'react'

const ClickBar = () => {
  return (
    <div className='flex flex-col justify-center items-start gap-2 py-4 px-6 
                    bg-purple-900/90 text-white rounded-lg shadow-lg 
                    w-48 animate-fade-in'>
      <button className="w-full text-left px-2 py-2 hover:bg-purple-700 rounded-md transition-all duration-200 cursor-pointer hover:scale-105">
        My Profile
      </button>
      <button className="w-full text-left px-2 py-2 hover:bg-purple-700 rounded-md transition-all duration-200 cursor-pointer hover:scale-105">
        Logout
      </button>
    </div>
  )
}

export default ClickBar
