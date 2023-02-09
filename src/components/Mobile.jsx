import React from 'react'
import MobileSlider from './MobileSlider';

const Mobile = () => {
  return (
    <div className='smartWatch-parent'>
        <div className='smartWatchChild'>
            <div className='watchTitle'>
                <p className='watchPara'>APPLE IPHONE 14 & 14 PLUS  | </p>
                <a href='/' className='aWatch'>
                    <p className='watchView'>VIEW ALL</p>
                </a>
            </div>
        </div>
        
        <div className='watchesSlider'>
        <MobileSlider/>
                 <div className='watchImages' >
                    <img src='https://i.imgur.com/tkLHMZ8.png' alt='watch img' className='watchimg' id='watchTele'></img>
                </div>
               
            </div>
        </div>
  )
}

export default Mobile;