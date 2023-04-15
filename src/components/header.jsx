import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from '../assets/images/iv-ts-logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import $ from 'jquery'

var pathUrl =  window.location.href;
if(pathUrl == 'http://127.0.0.1:5173/'){
  $(".logo-section").addClass("test");
}


function Header() {
const { pathname } = useLocation();
  return (
    <div className='main-header py-5'>
        <div className='wrapper'>
            <div className='inner-wrapper flex justify-between items-center'>
                <div className='logo-section'>
                    <Link to='/' style={{ display: pathname === '/' ? 'none' : 'block' }}>
                        <img src={Logo} className='max-w-xs' alt='Iva Tsaneva logo' width='150' height='50' />	
                    </Link>
                </div>
                <div className='main-nav'>
                    <ul className='flex place-items-center'>
                        <li ><NavLink to='/projects' className='text-base type1 btn-link'>Work</NavLink></li>
                        <li><a href='https://github.com/ivatsaneva' target="_blank" className='icon'> <FontAwesomeIcon icon={faGithub}/></a></li>
                        <li><a href='https://www.linkedin.com/in/iva-tsaneva%E2%8E%9F-webdeveloper-boil%C2%AE-7a72931b8/' target="_blank" className='icon'> <FontAwesomeIcon icon={faLinkedin}/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}

export default Header