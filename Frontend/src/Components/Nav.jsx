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
        <div className='flex md:h-[10vh] w-full flex-row justify-between  bg-black text-white' >
            <div>
                UNMUTE
                <br />

            </div>
            <div className='flex flex-row mt-3 gap-8 '>
                <Link to={{ pathname: '/' }}>Home</Link>
                <Link to={{ pathname: '/' }}>About Us</Link>
            </div>
            <div className='flex flex-row  gap-8'>
                <div className='flex flex-row gap-4 items-center '>
                    <input type="text" className='border-0 md:h-[4vh] bg-purple-800/30 p-4' placeholder='Search Connection' />
                    <button
                    className='border-0  bg-purple-800/30  rounded-md pl-3 pr-3 pt-1 pb-1 '
                    >
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