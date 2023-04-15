import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/fontawesome-free-solid'
import FeatureImg from '../../assets/images/dileti-feature-image-hr.jpg'

import DiletiHome from '../../assets/images/designs/dileti/dileti-home.jpg'
import DiletiAbout from '../../assets/images/designs/dileti/dileti-about.jpg'
import DiletiJewelry from '../../assets/images/designs/dileti/dileti-jewelry.jpg'
import DiletiProduct from '../../assets/images/designs/dileti/dileti-product.jpg'

import DiletiHomeThumb from '../../assets/images/designs/dileti/dileti-home-thumb.jpg'
import DiletiAboutThumb from '../../assets/images/designs/dileti/dileti-about-thumb.jpg'
import DiletiJewelryThumb from '../../assets/images/designs/dileti/dileti-jewelry-thumb.jpg'
import DiletiProductThumb from '../../assets/images/designs/dileti/dileti-product-thumb.jpg'

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
                        <div className='text-base font-medium'><Link to="/work/dileti">Dileti </Link></div>
                        </div>
                    </div>
                    <div className='project-title pb-16'><h1 className='text-base text-[4.6rem]'>Dileti</h1></div>
                    <div className='role text-base flex justify-left pb-16'>
                        <div className='tools w-[50%]'>
                            <h2 className='font-medium'>Tools</h2>
                            <div className='tools-content text-sm'>
                            <p>Wordpress/WooCommerce, Figma, Miro</p>
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
                        <div className='website-link text-center'><span className='block text-s font-light'>Link to the project:</span><a href="https://dileti.com/" target="_blank" className='inline-block text-base text-[1.5rem]'>www.dileti.com</a> </div>
                    </div>
                    <div className='project-desc text-base text-center max-w-screen-md mx-auto pb-20 text-sm leading-7'>
                        <p className="pb-5">Make Diamonds Shine Bright Again For The New Generation.</p>
                        
                            <p className="pb-5">Dileti sells lab-grown diamond jewelry brought to the client by the diamond experts at Antwerp, one of the most famous cities for diamond trading. Dileti is all about putting the customer first. They know that the client doesn’t have time to search the internet or visit every jeweler in town. That's why they have done most of the hard work for them. </p>

                            <p>I worked in collaboration with the experts from Dileti to create their new website, I was responsible for the UX/UI design and the development of the e-shop.</p>

                            
                    </div>
                
                    <div className='gallery-grid grid md:grid-cols-4 gap-6 pb-32'>
                        <Gallery>
                            <div className="open-image cursor-pointer"><Item className=''
                            original= {DiletiHome}
                            thumbnail={DiletiHomeThumb}
                            width="1440"
                            height="6271"
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={DiletiHomeThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {DiletiAbout}
                            thumbnail={DiletiAboutThumb}
                            width="1440"
                            height="7847"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={DiletiAboutThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {DiletiJewelry}
                            thumbnail={DiletiJewelryThumb}
                            width="1440"
                            height="5910"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={DiletiJewelryThumb} />
                            )}
                            </Item></div>

                            <div className="open-image cursor-pointer"><Item
                            original= {DiletiProduct}
                            thumbnail={DiletiProductThumb}
                            width="1440"
                            height="3214"
                    
                            >
                            {({ ref, open }) => (
                                <img ref={ref} onClick={open} src={DiletiProductThumb} />
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
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> WooCommerce set-up</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Importing hundreds of products in Wordpress</li>
                                        <li className='flex'><img src={CheckIcon} className='w-[20px] mr-2' alt='check icon'/> Collaborating with Content writers</li>
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