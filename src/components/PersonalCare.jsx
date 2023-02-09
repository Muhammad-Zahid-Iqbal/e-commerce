import React from 'react'
import PersonalCareSlider from './PersonalCareSlider'

const PersonalCare = () => {
  return (
    <div className='smartWatch-parent'>
        <div className='smartWatchChild'>
            <div className='watchTitle'>
                <p className='watchPara'>UP TO 80% OFF ON PERSONAL CARE APPLIANCES | </p>
                <a href='/' className='aWatch'>
                    <p className='watchView'>VIEW ALL</p>
                </a>
            </div>
        </div>
        
        <div className='watchesSlider'>
                 <div className='watchImages' >
                    <img src='https://i.imgur.com/FPm2ngR.png' alt='watch img' className='watchimg'></img>
                </div>
                <PersonalCareSlider/>
            </div>
        </div>
  )
}

export default PersonalCare