import React from 'react'

const Hero = () => {
    return (
        <div className='flex flex-row'>
            <h1 className='text-4xl text-white flex flex-col gap-2'>
                Express Yourself
                <span>
                    Anonomously with 
                </span>
                UNMUTE!
            </h1>
            <div className='text-white flex flex-col gap-30 ml-50 text-2xl '>
                <div className='flex flex-row gap-25 '>
                    <div>
                        <button>
                        AI Features
                        </button>
                    </div>
                    <div>
                        <button>
                        Journaling
                        </button>
                    </div>
                </div>
                <div className='flex flex-row gap-25'>
                    <div>
                        <button>
                        Excercise
                        </button>
                    </div>
                    <div>
                        <button>
                        Personal Touch
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero