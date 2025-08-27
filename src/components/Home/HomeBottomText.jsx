import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className='font-[Lau500] text-[6vw] flex items-center justify-center gap-5 leading-[6vw]'>
            <Link to='/projects' className='px-6 pt-2 rounded-full border-3 border-white hover:text-[#d3fd50] hover:border-[#d3fd50] transition-all duration-300 ease-in-out'>PROJECTS</Link>
            <Link to='/agence' className='px-6 pt-2 rounded-full border-3 border-white hover:text-[#d3fd50] hover:border-[#d3fd50] transition-all duration-300 ease-in-out'>AGENCE</Link>
        </div>
    )
}

export default HomeBottomText