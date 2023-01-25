import React from 'react'
import Intro from '../../components/intro'
import About from '../../components/about'
import Footer from '../../components/footer'
import SelectedWork from '../../components/selectedwork'
import Skills from '../../components/skills'
import Pug from '../../assets/images/pug-icon.png'

function Home() {
  return (
    <div>
      <Intro/>
      <About/>
      <SelectedWork/>
      <div className='personal-info pb-28'>
        <div class='wrapper'>
          <div className='personal-info-wrap bg-black'>
            <div className='text-wrap font-light text-white text-center'>
              <div className='pb-4'>I pour my ❤️️ into every Design.</div>
              <div>Designing high-quality sites focused on strong usability and simple aesthetics is my main goal.</div>
            </div>
          </div>
        </div>
      </div>
      <Skills/>
      <div className='personal-info pug mb-28'>
        <div class='wrapper'>
          <div className='personal-info-wrap bg-black'>
            <div className='text-wrap font-light text-white text-center flex items-center justify-between'>
              <div className='pb-4 pt-4'>Also I love ❤️️ pugs.</div>
              <div><img src={Pug} alt='Profile Image' className=''/></div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Home