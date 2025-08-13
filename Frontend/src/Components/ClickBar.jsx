import React from 'react'

const ClickBar = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5 text-white bg-purple-800/30 h-[20vh] w-[30vh] rounded-md'>
            <div>
                <button>
                    My Profile
                </button>
            </div>
            <div>
                <button>
                    Logout
                </button>
            </div>
        </div>
    )
}

export default ClickBar