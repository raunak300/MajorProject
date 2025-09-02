import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Home from '../Pages/Home'
import Footer from './Footer'
import { Button } from './ui/button'
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar'
const Nav = () => {
    const [run, setrun] = useState(false)
    return (
        <div className='flex md:h-[10vh] w-full flex-row justify-between  bg-black text-white' >
            <div>
                NAME
                <br />

            </div>
            <div className='flex flex-row mt-3 gap-8 '>
                <Link to={{ pathname: '/' }}>Home</Link>
                <Link to={{ pathname: '/' }}>About Us</Link>
            </div>
            <div className='flex flex-row  gap-8'>
                <div className='flex flex-row gap-4 items-center '>
                    <input type="text" className=' hover:border-purple-600 md:h-[4vh]  hover:shadow hover:border-1 bg-white ' />
                    <button>
                        <Avatar className="bg-white hover:border-purple-600 shadow ">
                            <AvatarImage src="/search.png" alt="search"  />
                            <AvatarFallback>S</AvatarFallback>
                        </Avatar>
                    </button>
                </div>
                <Avatar className="border-2 border-white shadow-lg mt-2 mr-8 ">
                    <AvatarImage src="/panda.png" alt="panda"  />
                    <AvatarFallback>R</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Nav