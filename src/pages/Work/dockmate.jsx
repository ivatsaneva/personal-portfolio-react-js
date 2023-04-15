import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import FeatureImg from '../../assets/images/dockmate-feature-image.jpg'

import DockmateHome from '../../assets/images/designs/dockmate/dockmate-home.jpg'
import WhyDock from '../../assets/images/designs/dockmate/why-dockmate.jpg'

import DockmateHomeThumb from '../../assets/images/designs/dockmate/dockmate-home-thumb.jpg'
import WhyDockThumb from '../../assets/images/designs/dockmate/why-dockmate-thumb.jpg'

import CheckIcon from '../../assets/images/check-icon.svg'

import 'photoswipe/dist/photoswipe.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import Footer from '../../components/footer'



function Meezy() {

  return (
    <div className='inner-project-info pt-16'>
        <div className="inner-project-info-entry pb-28 mb-28">
            <div className='wrapper'>
                <div className='project-data '>
                    <div className='project-intro pb-16'>
                        <div className='breadcrumbs flex align-middle'>
                        <div className='text-base '><Link to="/projects">Work</Link> </div>
                        <div className='text-base px-2 text-[0.8rem]'><FontAwesomeIcon icon={faChevronRight} /></div>
                        <div className='text-base font-medium'><Link to="/work/dockmate">Dockmate </Link></div>
                        </div>
                    </div>
                    <div className='project-title pb-16'><h1 className='text-base text-[4.6rem]'>Dockmate</h1></div>
                    <div className='role text-base flex justify-left pb-16'>
                        <div className='tools w-[50%]'>
                            <h2 className='font-medium'>Tools</h2>
                            <div className='tools-content text-sm'>
                            <p>Wordpress, Figma, Amazon Web Services,</p>
                            <p>Google Maps API</p>
                            </div>
                        </div>
                        <div className='role w-[50%]'>
                            <h2 className='font-medium'>Role</h2>
                            <div className='role-content text-sm'>
                                <p>UI/UX, Research, Content Strategy</p>
                                <p>Web development</p>
                            </div>
                        </div>
                    </div>
                    <div className='feature-image pb-12'>
                        <div className='pb-8'><img src={FeatureImg} className='w-full' alt='Iva Tsaneva logo' /></div>
                        <div className='website-link text-center'><span className='block text-s font-light'>Link to the project:</span><a href="https://dockmate.eu/" target="_blank" className='inline-block text-base text-[1.5rem]'>dockmate.eu</a> </div>
                    </div>
                    <div className='project-desc text-base text-center max-w-screen-md mx-auto pb-20 text-sm leading-7'>
                        <p className="pb-5">Dockmate® is a Belgian company that has been in business worldwide since 2012. </p>
                        
                        <p className="pb-5">They proudly present the next generation of wireless remote control systems. Dockmate® is the most reliable and accurate wireless remote docking system.</p>
                        <p>In 2022 Dockmate® decided they needed a new vision and rebranding. I took part in this by being responsible for building a new design for their website and the overall development after that.</p>

                    </div>
                
                    <div className='gallery-grid grid md:grid-cols-2 gap-6 pb-32'>
                        <Gallery>
                            <div className="open-image cursor-pointer"><Item className=''
                            original= {DockmateHome}
                            thumbnail={DockmateHomeThumb}
                            width="1440"
                            height="7076"
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={DockmateHomeThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {WhyDock}
                            thumbnail={WhyDockThumb}
                            width="1440"
                            height="6743"
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={WhyDockThumb} />
                            )}
                            </Item></div>
                            
                        </Gallery>
                    </div>
                    <div className='project-tasks'>
                        <div className='heading-section w-full m-auto'>
                            <h3 className="pb-6  text-base">Stuff I did</h3>
                            <div className='tasks-columns flex justify-between text-base text-sm'>
                                <div className='left-column w-[45%] '>
                                    <ul>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Research</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Wireframing</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> UX/UI designs</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Client meetings</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Wordpress development</li>
                                        
                                    </ul>
                                </div>
                                <div className='right-column w-[45%]' >
                                    <ul>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Building price configurator</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Development of distributors list using Google Maps API</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Defending Decisions</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Testing with users</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Drank Lots of Coffee</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        <Footer/>
    </div>

  )
}

export default Meezy