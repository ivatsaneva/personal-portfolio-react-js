import React from 'react'
import { portfolioDataHome } from '../data'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'



function SelectedWork() {
  return (
    <div className='entry-content-about work text-base py-10 pb-28'>
        
    <div className='wrapper'>
        <div className='section-title'><h2 className='font-gallient text-[5.5rem] pb-24 leading-[6rem] text-center'>Selected Work</h2></div>
            <div className='selected-projects mb-28'>
                <div className='grid md:grid-cols-2 gap-16'>
                {portfolioDataHome.map((item, index) => (
                    <Link to={item.link} key={index} className=' md:even:pt-12 ease-in-out duration-500 hover:translate-y-[-4px] '>

                    <div className='pb-4'>
                    <img src={item.thumbnail} alt={item.alt} loading='lazy'/>
                    </div>
                    <div className='text-lg flex justify-between gap-4 items-center'>
                    <div>
                        <div className='pb-1'>{item.title} </div>
                        <div className='text-[1.2rem]'>{item.category}</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                    </Link>
                ))}
                </div>
            </div>
            <div className='more-btn text-center'> 
                <NavLink to='/projects' className='text-base type1 btn-link'>Discover more projects</NavLink>
            </div>
            
        </div>
    </div>
  )
}

export default SelectedWork