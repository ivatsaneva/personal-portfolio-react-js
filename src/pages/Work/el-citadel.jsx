import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import FeatureImg from '../../assets/images/el-citadel-feature-image.jpg'

import ElCitadelHome from '../../assets/images/designs/el-citadel/el-citadel-home.jpg'
import ElCitadelAbout from '../../assets/images/designs/el-citadel/el-citadel-about.jpg'
import ElCitadelProject from '../../assets/images/designs/el-citadel/el-citadel-project.jpg'

import ElCitadelHomeThumb from '../../assets/images/designs/el-citadel/el-citadel-home-thumb.jpg'
import ElCitadelAboutThumb from '../../assets/images/designs/el-citadel/el-citadel-about-thumb.jpg'
import ElCitadelProjectThumb from '../../assets/images/designs/el-citadel/el-citadel-project-thumb.jpg'

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
                        <div className='text-base font-medium'><Link to="/work/el-citadel">El Citadel </Link></div>
                        </div>
                    </div>
                    <div className='project-title pb-16'><h1 className='text-base text-[4.6rem]'>El Citadel</h1></div>
                    <div className='role text-base flex justify-left pb-16'>
                        <div className='tools w-[50%]'>
                            <h2 className='font-medium'>Tools</h2>
                            <div className='tools-content text-sm'>
                            <p>Wordpress, Figma, Amazon Web Services </p>
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
                        <div className='pb-8'><img src={FeatureImg} className='w-full' alt='El-Citadel-feature-image' /></div>
                        <div className='website-link text-center'><span className='block text-s font-light'>Link to the project:</span><a href="https://elcitadel.be/" target="_blank" className='inline-block text-base text-[1.5rem]'>elcitadel.be</a> </div>
                    </div>
                    <div className='project-desc text-base text-center max-w-screen-md mx-auto pb-20 text-sm leading-7'>
                    <p className="pb-5"> Citadel invests in premium infrastructure for padel players who consider the social aspect as important as the sporting aspect. They also want to be a 'connecting hub' for everyone from the neighborhood who wants to participate in the activities in and around our center. </p>

                    <p>Starting from scratch, I was involved in building their website. I built the vision of their website and took over the overall development after that.
                    Elixir</p>

                    </div>
                
                    <div className='gallery-grid grid md:grid-cols-3 gap-6 pb-32'>
                        <Gallery>
                            <div className="open-image cursor-pointer"><Item className=''
                            original= {ElCitadelHome}
                            thumbnail={ElCitadelHomeThumb}
                            width="1920"
                            height="9184"
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={ElCitadelHomeThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {ElCitadelAbout}
                            thumbnail={ElCitadelAboutThumb}
                            width="1920"
                            height="11339"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={ElCitadelAboutThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {ElCitadelProject}
                            thumbnail={ElCitadelProjectThumb}
                            width="1920"
                            height="5907"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={ElCitadelProjectThumb} />
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
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Wordpress development</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> User personas</li>
                                    </ul>
                                </div>
                                <div className='right-column w-[45%]' >
                                    <ul>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Video integration</li>
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