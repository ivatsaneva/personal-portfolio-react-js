import React from 'react'
import Basics from '../assets/images/basics-icon.svg'
import Principles from '../assets/images/principles-icon.svg'
import Graphics from '../assets/images/graphics-icon.svg'
import Wp from '../assets/images/wp-icon.svg'
import Webflow from '../assets/images/webflow-icon.svg'
import Softskills from '../assets/images/soft-skills-icon.svg'

function Skills() {
  return (
    <div className='entry-content-about text-base py-10 pb-28'>
        
    <div className='wrapper'>
        <div className='section-title pb-24'>
            <h2 className='font-gallient text-[5.5rem] pb-6 leading-[6rem] text-center'>Professional skills</h2>
            <h3 className='text-center text-[1.8rem]'>6 Years Of Experience</h3>
            </div>
            <div className='proff-skills cell'>
                <div className='grid md:grid-cols-3 gap-16 row align-top'>
                <div>
                    <div className='row-heading  bottom-1 '>
                        <div className='head-holder flex items-center'><img src={Basics} alt='Profile Image' className='w-10 mr-4 h-10'/><h3 className='text-[2.2rem]'>Basics</h3></div>
                    </div>
                        <div className='skills-listing'>
                            <ul className='ml-4'>
                                <li>HTML</li>
                                <li>CSS / Tailwind</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>MySQL</li>
                                <li>Git</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='row-heading bottom-1'>
                        <div className='head-holder flex items-center'><img src={Principles} alt='Profile Image' className='w-10 mr-4 h-10'/><h3 className='text-[2.2rem]'>Principles</h3></div>
                        </div>
                        <div className='skills-listing'>
                            <ul className='ml-4'>
                                <li>Responsive design</li>
                                <li>Accessibility</li>
                                <li>Usibility</li>
                                <li>Stability</li>
                                <li>Elegance</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='row-heading bottom-1'>
                        <div className='head-holder flex items-center'><img src={Graphics} alt='Profile Image' className='w-10 mr-4 h-10'/><h3 className='text-[2.2rem]'>Graphics</h3></div>
                        </div>
                        <div className='skills-listing'>
                            <ul className='ml-4'>
                                <li>Photoshop</li>
                                <li>Figma</li>
                                <li>Adobe XD</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-16 row mt-12'>
                <div>
                    <div className='row-heading bottom-1'><div className='head-holder flex items-center'><img src={Wp} alt='Profile Image' className='w-10 mr-4 h-10'/><h3 className='text-[2.2rem]'>Wordpress</h3></div></div>
                        <div className='skills-listing'>
                            <ul className='ml-4'>
                                <li>Converting designs into themes and pages</li>
                                <li>E-commerce</li>
                                <li>Performance</li>
                                <li>Troubleshooting issues</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='row-heading bottom-1'><div className='head-holder flex items-center'><img src={Webflow} alt='Profile Image' className='w-10 mr-4 h-10'/><h3 className='text-[2.2rem]'>Webflow</h3></div></div>
                        <div className='skills-listing'>
                            <ul className='ml-4'>
                                <li>Crafting intelligent, scalable, easy-to-use websites</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='row-heading bottom-1'><div className='head-holder flex items-center'><img src={Softskills} alt='Profile Image' className='w-10 mr-4 h-10'/><h3 className='text-[2.2rem]'>Soft skills</h3></div></div>
                        <div className='skills-listing'>
                            <ul className='ml-4'>
                                <li>A creative streak</li>
                                <li>Attention to detail</li>
                                <li>Team player</li>
                                <li>Adaptability</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills