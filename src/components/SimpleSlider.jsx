import React,{Component} from 'react'
import Slider from "react-slick";
import { Computers } from '../data';

export default function SimpleSlider() {
    
      const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true
      };
      return (
        <div>
          <Slider {...settings}>
          {Computers.map((value,ind)=>{
            
          return <div key={ind}>
          <div className='ComputersClass'>
              <div className='swiper'>
                <div className='swiper-wrapper'>
                    <div className='swiper-slide'>
                        <a href='#' className='aTopLink'>
                            <div className='swiper-content'>
                                <img src={value.img} alt="HP 14s-dr3001TU Laptop (Intel Pentium Silver N6000/8 GB/256 GB SSD/UHD Graphics/Windows 11 Home/MSO/HD), 35.6 cm (14 inch)" className='imgClass'/>
                            </div>
                            <div className='swiper-title'>
                                <p className='para'>
                                  {value.name}
                                </p>
                                <div className='details'>
                                    <div className='dPrice'>
                                        <div className='dealPrice'>
                                            <p className='p1'>Deal Price:</p>
                                        </div>
                                        <div className='dealPrice'>
                                            <p className='p2'>
                                                {value.price}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='dPrice'>
                                        <p className='mrp'>MRP:</p>
                                        <s className='mrpS'>
                                            {value.mrp}
                                        </s>
                                    </div>
                                    <div className='dPrice'>
                                        <p className='mrp'>You Save:</p>
                                        <p className='mrpS'>{value.discount}</p>
                                    </div>
                                    <div className='offers'>
                                        <p className='offer-p'>OFFERS AVAILABLE</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
              </div>
            </div>
          </div>
          })}
          </Slider>
        </div>
      );
    }
  