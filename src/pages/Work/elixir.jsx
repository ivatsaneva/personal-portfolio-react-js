import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import FeatureImg from '../../assets/images/elixir-feature-image.jpg'

import ElixirHome from '../../assets/images/designs/elixir/elixir-home.jpg'
import ElixirWhy from '../../assets/images/designs/elixir/elixir-why-elixir.jpg'
import Elixir360 from '../../assets/images/designs/elixir/elixir-360method.jpg'

import ElixirHomeThumb from '../../assets/images/designs/elixir/elixir-home-thumb.jpg'
import ElixirWhyThumb from '../../assets/images/designs/elixir/elixir-why-elixir-thumb.jpg'
import Elixir360Thumb from '../../assets/images/designs/elixir/elixir-360method-thumb.jpg'

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
                        <div className='text-base font-medium'><Link to="/work/el-citadel">Elixir </Link></div>
                        </div>
                    </div>
                    <div className='project-title pb-16'><h1 className='text-base text-[4.6rem]'>Elixir</h1></div>
                    <div className='role text-base flex justify-left pb-16'>
                        <div className='tools w-[50%]'>
                            <h2 className='font-medium'>Tools</h2>
                            <div className='tools-content text-sm'>
                            <p>Figma, Miro</p>
                            </div>
                        </div>
                        <div className='role w-[50%]'>
                            <h2 className='font-medium'>Role</h2>
                            <div className='role-content text-sm'>
                                <p>UI/UX, Design, Content Strategy</p>
                            </div>
                        </div>
                    </div>
                    <div className='feature-image pb-12'>
                        <div className='pb-8'><img src={FeatureImg} className='w-full' alt='El-Citadel-feature-image' /></div>
                        <div className='website-link text-center'><span className='block text-s font-light'>Link to the project:</span><a href="https://www.elixir-solutions.net/" target="_blank" className='inline-block text-base text-[1.5rem]'>www.elixir-solutions.net/</a> </div>
                    </div>
                    <div className='project-desc text-base text-center max-w-screen-md mx-auto pb-20 text-sm leading-7'>
                        <p>Elixir transforms commercial departments. We do this by implementing advanced Hubspot solutions giving you a 360° view of your customers. Together we re-imagine your digital processes and systems to make your organisation smarter, no mtatter how complex.</p>
                    </div>
                
                    <div className='gallery-grid grid md:grid-cols-3 gap-6 pb-32'>
                        <Gallery>
                            <div className="open-image cursor-pointer"><Item className=''
                            original= {ElixirHome}
                            thumbnail={ElixirHomeThumb}
                            width="1448"
                            height="7612"
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={ElixirHomeThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {ElixirWhy}
                            thumbnail={ElixirWhyThumb}
                            width="1448"
                            height="8119"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={ElixirWhyThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {Elixir360}
                            thumbnail={Elixir360Thumb}
                            width="1448"
                            height="6458"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={Elixir360Thumb} />
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
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Taking design meetings</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Creative Direction</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Wireframing</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Creating a design system</li>
                                    </ul>
                                </div>
                                <div className='right-column w-[45%]' >
                                    <ul>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Branding</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Collaborating with developers</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Defending UX Decisions</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> UX/UI Design</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Exporting Assets</li>
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