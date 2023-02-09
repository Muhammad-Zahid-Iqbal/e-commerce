import React from 'react'
import ITAccessoriesSlider from './ITAccessoriesSlider';

const ITAccessories = () => {
  return (
    <div className='smartWatch-parent'>
        <div className='smartWatchChild'>
            <div className='watchTitle'>
                <p className='watchPara'>IT ACCESSORIES STARTING FROM RS. 109 |  | </p>
                <a href='/' className='aWatch'>
                    <p className='watchView'>VIEW ALL</p>
                </a>
            </div>
        </div>
        
        <div className='watchesSlider'>
        
                 <div className='watchImages' >
                    <img src='https://i.imgur.com/tpj1BEM.png' alt='watch img' className='watchimg' id='ITimg'></img>
                </div>
               <ITAccessoriesSlider/>
            </div>
        </div>
  )
}

export default ITAccessories;