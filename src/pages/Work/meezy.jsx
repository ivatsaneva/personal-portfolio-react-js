import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import FeatureImg from '../../assets/images/meezy_online-carousel.jpg'

import MeezyHome from '../../assets/images/designs/meezy/meezy-home.jpg'
import MeezyServices from '../../assets/images/designs/meezy/meezy-services.jpg'
import MeezyAbout from '../../assets/images/designs/meezy/meezy-about.jpg'

import MeezyHomeТhumb from '../../assets/images/designs/meezy/meezy-home-thumb.jpg'
import MeezyServicesThumb from '../../assets/images/designs/meezy/meezy-services-thumb.jpg'
import MeezyAboutThumb from '../../assets/images/designs/meezy/meezy-about-thumb.jpg'
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
                        <div className='text-base font-medium'><Link to="/work/meezy">Meezy </Link></div>
                        </div>
                    </div>
                    <div className='project-title pb-16'><h1 className='text-base text-[4.6rem]'>Meezy</h1></div>
                    <div className='role text-base flex justify-left pb-16'>
                        <div className='tools w-[50%]'>
                            <h2 className='font-medium'>Tools</h2>
                            <div className='tools-content text-sm'>
                            <p>Webflow, Figma, Miro</p>
                            </div>
                        </div>
                        <div className='role w-[50%]'>
                            <h2 className='font-medium'>Role</h2>
                            <div className='role-content text-sm'>
                                <p>UI/UX, Research, Content Strategy</p>
                                <p>Front-end development</p>
                            </div>
                        </div>
                    </div>
                    <div className='feature-image pb-12'>
                        <div className='pb-8'><img src={FeatureImg} className='w-full' alt='Iva Tsaneva logo' /></div>
                        <div className='website-link text-center'><span className='block text-s font-light'>Link to the project:</span><a href="https://www.meezy.eu/" target="_blank" className='inline-block text-base text-[1.5rem]'>www.meezy.eu </a> </div>
                    </div>
                    <div className='project-desc text-base text-center max-w-screen-md mx-auto pb-20 text-sm leading-7'>
                        <p>We help ecommerce companies expand business to Europe.
                            Meezy was founded by a team that has sold on marketplaces for years. That means we know the challenges that sellers face and we understand how to grow your business. We started Meezy because we saw an opportunity to share our knowledge and experience with other companies.
                            </p>
                    </div>
                
                    <div className='gallery-grid grid md:grid-cols-3 gap-6 pb-32'>
                        <Gallery>
                            <div className="open-image cursor-pointer"><Item className=''
                            original= {MeezyHome}
                            thumbnail={MeezyHomeТhumb}
                            width="1440"
                            height="5090"
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={MeezyHomeТhumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {MeezyAbout}
                            thumbnail={MeezyAboutThumb}
                            width="1440"
                            height="6000"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={MeezyAboutThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {MeezyServices}
                            thumbnail={MeezyServicesThumb}
                            width="1440"
                            height="4034"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={MeezyServicesThumb} />
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
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Taking Client Meetings</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> UX/UI Designs</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Webflow development</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> User personas</li>
                                    </ul>
                                </div>
                                <div className='right-column w-[45%]' >
                                    <ul>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Animation integration</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Interactive Prototype</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Defending UX Decisions</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Ideation</li>
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