import React from 'react'
import Video from '../components/Home/video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'

const Home = () => {
    return (
        <>
            <div className='h-screen w-full fixed'>
                <Video/>
            </div>
            <div className='h-screen w-screen relative flex flex-col justify-between'>
                <HomeHeroText/>
                <HomeBottomText/>
            </div>
        </>
    )
}

export default Home