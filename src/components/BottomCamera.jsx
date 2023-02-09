import React from 'react'
import BottomCameraSlider from './BottomCameraSlider';

const BottomCamera = () => {
  return (
    <div className='smartWatch-parent'>
        <div className='smartWatchChild'>
            <div className='watchTitle'>
                <p className='watchPara'>UP TO 75% ON CAMERA ACCESSORIES |  </p>
                <a href='/' className='aWatch'>
                    <p className='watchView'>VIEW ALL</p>
                </a>
            </div>
        </div>
        
        <div className='watchesSlider'>
        <BottomCameraSlider/>
                 <div className='watchImages' >
                    <img src='https://i.imgur.com/EGk9huk.png' alt='watch img' className='watchimg' id='watchTele'></img>
                </div>
               
            </div>
        </div>
  )
}

export default BottomCamera;