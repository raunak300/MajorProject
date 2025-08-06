import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
const Home = () => {
    return (
        <div className='flex flex-col h-[100vh] w-full bg-zinc-900 '>
            <div className='flex-1'>
                <div>
                    <Nav />
                </div>
                <div>
                    Content
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home