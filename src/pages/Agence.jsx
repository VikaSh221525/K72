import React, { useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'

const Agence = () => {
    gsap.registerPlugin(ScrollTrigger);
    const imageDivRef = useRef(null);
    const imageRef = useRef(null);

    const imgarr = [
        'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
        'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg'
    ]

    useGSAP(function(){
        gsap.to(imageDivRef.current, {
            scrollTrigger:{
                trigger: imageDivRef.current,
                // markers:true,
                start: 'top 17%',
                end: 'top -170%',
                pin:true,
                scrub: true,
                onUpdate: function(elem){
                    const imgidx = Math.round(elem.progress * (imgarr.length-1))
                    imageRef.current.src = imgarr[imgidx]
                }
            }
        })
    })

    return (
        <div>
            <div className='section1'>
                <div ref={imageDivRef} className='h-80 w-60 rounded-3xl overflow-hidden absolute top-30 left-110 '>
                    <img ref={imageRef} className='w-full h-full object-cover ' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
                </div>
                <div className='relative font-[Lau500]'>
                    <div className='mt-[56vh] '>
                        <h1 className='text-[20vw] uppercase leading-[17vw] text-center'>Soixan7e <br /> Douze</h1>
                    </div>
                    <div className='pl-[40%] px-10'>
                        <p className='text-[3.5vw] text-right mr-12'>Notre curiosité nourrit</p>
                        <p className='text-[3.5vw] text-left leading-[4vw] '>
                            notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
                        </p>
                    </div>
                </div>
            </div>
            <div className='section2 h-screen'>

            </div>
        </div>
    )
}

export default Agence