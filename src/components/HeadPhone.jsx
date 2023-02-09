import React from 'react'
import HeadphoneSlider from './HeadPhoneSlider';

const Headphones = () => {
  return (
    <div className='smartWatch-parent'>
        <div className='smartWatchChild'>
            <div className='watchTitle'>
                <p className='watchPara'>BEST SELLING AUDIO ACCESSORIES  | </p>
                <a href='/' className='aWatch'>
                    <p className='watchView'>VIEW ALL</p>
                </a>
            </div>
        </div>
        
        <div className='watchesSlider'>
        
                 <div className='watchImages' >
                    <img src='https://i.imgur.com/7J25A1o.png' alt='watch img' className='watchimg' id='ITimg'></img>
                </div>
               <HeadphoneSlider/>
            </div>
        </div>
  )
}

export default Headphones;