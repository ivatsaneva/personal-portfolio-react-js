import React from 'react'
import Arrow from '../assets/images/arrow-right.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='entry-content-footer text-base'>
        
    <div className='wrapper'>
        <div className='section-title pb-4'>
            <h2 className='font-gallient text-[5.5rem] pb-8 leading-[5rem] text-center'>Just say Hi!</h2>
            <h3 className='text-center text-[1.4rem]'>Get in touch with me.</h3>
        </div>
        <div className='emails-container mb-8'>
            <a href='mailto:hello@ivatsaneva.com'className='flex py-4 align-middle justify-center  items-center text-[2rem]'>
            <img src={Arrow} alt='Profile Image' className='w-7 mr-4 h-7'/> hello@ivatsaneva.com </a>
        </div>
        <div className='socials-container flex list-none text-center justify-center pb-12'>
            <li className='m-1'><a href='https://github.com/ivatsaneva' target="_blank" className='icon p-2 text-[2rem]'> <FontAwesomeIcon icon={faGithub}/></a></li>
            <li className='m-1'><a href='https://www.linkedin.com/in/iva-tsaneva%E2%8E%9F-webdeveloper-boil%C2%AE-7a72931b8/' target="_blank" className='icon p-2 text-[2rem]'> <FontAwesomeIcon icon={faLinkedin}/></a></li>
        </div>
        <div className='text-center text-[1rem] pb-5 copyright'>&#169;{new Date().getFullYear()} — Web app designed and coded by Iva Tsaneva using React.js</div>
    </div>
    </div>
  )
}

export default Footer