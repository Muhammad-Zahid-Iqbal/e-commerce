import React from 'react'
import AceSlider from './AceSlider'

const Ace = () => {
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
        <AceSlider/>
                 <div className='watchImages' >
                    <img src='https://i.imgur.com/ntyAjRL.png' alt='watch img' className='watchimg' id='watchTele'></img>
                </div>
               
            </div>
        </div>
  )
}

export default Ace;