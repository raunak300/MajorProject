import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Footer from './Footer'
import { Button } from './ui/button'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
const Nav = () => {
    const [run, setrun] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        <div className='flex md:h-[10vh] w-full flex-row justify-between  bg-black text-white items-center' >
            <div className="font-atma text-2xl ">
                   🎙️ UNMUTE
                

            </div>
            <div className='flex flex-row gap-10 '>
                <Link to={{ pathname: '/' }} className='hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] transition duration-300'>Home</Link>
                <Link to={{ pathname: '/' }} className='hover:text-purple-400 hover:drop-shadow-[0_0_10px_rgba(255,255,255,1)] transition duration-300'>About Us</Link>
            </div>
            <div className='flex flex-row  gap-8'>
                <div className='flex flex-row gap-4 items-center '>
                    <input type="text" className='border-0 md:h-[4vh] bg-purple-800/30 p-4' placeholder='Enter Preference' />
                    <button
                    className='border-0  bg-purple-300/30  rounded-md pl-3 pr-3 pt-1 pb-1 '>
                        Search
                    </button>
                </div>
                <Avatar className="border-2 border-white shadow-lg mt-2 mr-8 "
                onClick={()=>setOpen(!run)}
                >
                    <AvatarImage src="/panda.png" alt="panda"  />
                    <AvatarFallback>R</AvatarFallback>
                </Avatar>
            </div>
            {
                open && (
                    <div>
                        
                    </div>
                )
            }
        </div>
    )
}

export default Nav