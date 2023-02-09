import React from 'react'
import TelevisionSlider from './TelevisionSlider'

const Television = () => {
  return (
    <div className='smartWatch-parent'>
        <div className='smartWatchChild'>
            <div className='watchTitle'>
                <p className='watchPara'>TRENDING IN TELEVISIONS | </p>
                <a href='/' className='aWatch'>
                    <p className='watchView'>VIEW ALL</p>
                </a>
            </div>
        </div>
            
            <div className='watchesSlider'>
                <TelevisionSlider/>
                 <div className='watchImages' >
                    <img src='https://i.imgur.com/fL1O6va.png' alt='watch img' className='watchimg' id='watchTele'></img>
                </div>
            </div>
    </div>
  )
}

export default Television