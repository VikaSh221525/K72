import React from 'react'

const HomeHeroText = () => {
    return (
        <div className='font-[Lau300] text-[9.5vw] uppercase pt-2 text-center leading-[9vw]'>
            <div>L'étincelle</div>
            <div className='flex items-center justify-center'>qui <div className='w-[15vw] h-[16vh] rounded-full overflow-hidden'> <video className='h-full w-full object-cover rounded-4xl' autoPlay muted loop src="https://player.vimeo.com/progressive_redirect/playback/899938964/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6a2cb0320d09d02dcfdfa2ad504c89a510e6d93d55e9060b1b55d680fa2e2be9"></video> </div> génère</div>
            <div>la créativité</div>
        </div>
    )
}

export default HomeHeroText