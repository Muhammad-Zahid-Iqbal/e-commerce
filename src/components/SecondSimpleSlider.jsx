import React from 'react'
import Resizable from './SecondSliderChild'

const SecondSimpleSlider = () => {
  return (
    <div className='smartWatch-parent'>
        <div className='smartWatchChild'>
            <div className='watchTitle'>
                <p className='watchPara'>PRICE DROP ON APPLE SMARTWATCHES | </p>
                <a href='/' className='aWatch'>
                    <p className='watchView'>VIEW ALL</p>
                </a>
            </div>
        </div>
        
        <div className='watchesSlider'>
                 <div className='watchImages' >
                    <img src='https://i.imgur.com/8pxYJUB.png' alt='watch img' className='watchimg'></img>
                </div>
                <Resizable/>
            </div>
        </div>
  )
}

export default SecondSimpleSlider