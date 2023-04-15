import React from 'react'
import ProfileImg from '../assets/images/its-profile-img.jpg'
import AccordionItem from './accordion'



function About() {

    
  return (
    <div className='entry-content-about text-base py-10 pb-40'>
        <div className='wrapper'>
        <div className='flex elements-wrap-about justify-between items-center max-md:flex-col'>
            <div className='image-container mr-28 relative'><img src={ProfileImg} alt='Profile Image' className='min-w-[300px]'/></div>
            <div className='about-info-container w-2/3 max-md:w-auto'>
                <div className='section-title'><h2 className='font-gallient text-[5.5rem] pb-12 leading-[5rem]'>About</h2></div>
                <AccordionItem/>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default About