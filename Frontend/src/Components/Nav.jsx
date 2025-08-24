import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import ClickBar from './ClickBar';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null); // Ref for dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='fixed top-0 left-0 z-50 flex md:h-[10vh] w-full flex-row justify-between bg-black text-white items-center px-4'>
      {/* Logo */}
      <div className="font-atma text-2xl">
        🎙️ UNMUTE
      </div>

      {/* Centered Links */}
      <div className='hidden lg:flex absolute left-1/2 transform -translate-x-1/2 flex-row gap-10'>
        <Link to="/" className='hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] transition duration-300'>
          Home
        </Link>
        <Link to="/" className='hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] transition duration-300'>
          About Us
        </Link>
      </div>

      {/* Search + Avatar */}
      <div className='ml-auto flex flex-row gap-8 items-center relative'>
        <div className='flex flex-row gap-4 items-center'>
          <input
            type="text"
            className='border-0 md:h-[4vh] bg-purple-800/30 p-4 rounded-md'
            placeholder='Enter Preference'
          />
          <button className='border-0 bg-purple-300/30 rounded-md px-3 py-1'>
            Search
          </button>
        </div>

        {/* Avatar + Dropdown */}
        <div className="relative mt-1" ref={dropdownRef}>
          <Avatar
            className="border-2 border-white shadow-lg cursor-pointer"
            onClick={() => setOpen(prev => !prev)}
          >
            <AvatarImage src="/panda.png" alt="panda" />
            <AvatarFallback>R</AvatarFallback>
          </Avatar>

          {open && (
            <div className="absolute right-0 mt-2 z-50">
              <ClickBar />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
