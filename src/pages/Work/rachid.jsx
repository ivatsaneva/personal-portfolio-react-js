import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import FeatureImg from '../../assets/images/rachid-mockup.jpg'

import RachidHome from '../../assets/images/designs/rachid/rachid-home.jpg'
import RachidCertificate from '../../assets/images/designs/rachid/rachid-dni-crtified.jpg'
import RachidPrograma from '../../assets/images/designs/rachid/rachid-dni-programa.jpg'

import RachidHomeThumb from '../../assets/images/designs/rachid/rachid-home-thumb.jpg'
import RachidCertificateThumb from '../../assets/images/designs/rachid/rachid-dni-crtified-thumb.jpg'
import RachidProgramaThumb from '../../assets/images/designs/rachid/rachid-dni-programa-thumb.jpg'

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
                        <div className='text-base font-medium'><Link to="/work/el-citadel">Rachid </Link></div>
                        </div>
                    </div>
                    <div className='project-title pb-16'><h1 className='text-base text-[4.6rem]'>Rachid </h1></div>
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
                        <div className='website-link text-center'></div>
                    </div>
                    <div className='project-desc text-base text-center max-w-screen-md mx-auto pb-20 text-sm leading-7'>
                        <p>Rachid Et-Taïbi is an expert in Diversity and Inclusion and, thanks to his migration background, he personally experienced what inequality does to a person. After all, everyone wants to belong somewhere, and for Rachid this was different for a long time. Nevertheless, he turned out to be a successful entrepreneur. With his extreme drive and iron self-discipline, he found his own way to success.</p>

                        <p>Today, Rachid helps people and organizations become more self-confident so that they can transcend themselves. He gives them guidance and devises concrete solutions tailored to each challenge, based on his own methodology in which pushing boundaries is central. Literally and figuratively. </p>
                    </div>
                
                    <div className='gallery-grid grid md:grid-cols-3 gap-6 pb-32'>
                        <Gallery>
                            <div className="open-image cursor-pointer"><Item className=''
                            original= {RachidHome}
                            thumbnail={RachidHomeThumb}
                            width="1440"
                            height="5935"
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={RachidHomeThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {RachidCertificate}
                            thumbnail={RachidCertificateThumb}
                            width="1440"
                            height="5016"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={RachidCertificateThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {RachidPrograma}
                            thumbnail={RachidProgramaThumb}
                            width="1440"
                            height="6692"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={RachidProgramaThumb} />
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