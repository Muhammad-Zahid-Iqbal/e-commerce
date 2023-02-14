import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import '../Customstyles/microwaveStyle.css';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black"}}
        onClick={onClick}
      />
    );
  }

export default function AllProductSlider() {
  const [myState, setState] = useState([]);

  useEffect(()=>{
      const res = axios.get("https://rus-digital-televisions.onrender.com/allproduct")
      .then(res=>setState(res.data));
  },[]);

   {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 2,
      autoplay:true,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/> 
    };
    return (
      <div>
        <Slider {...settings}>
            {myState.map((value, ind)=>{

            return <div key={ind}>
          <div className="microWaveOvenParent">
            <div className="swiper-oven">
                <div className="swiper-wrapper-oven">
                    <div className="swiper-slider-oven">
                        <a href="#" className="aTopLinkOven" id="aLinkOven">
                            <div className="swiper-content-oven">
                                <img src={value.img} alt={value.name} className="imgOvenClass" />
                            </div>
                            <div className="swiper-title-oven">
                                <p className="para-oven">
                                    {value.name}
                                </p>
                            </div>  
                            <div className="details-oven">
                                <div className="dPrice-oven">
                                    <div className="dealPrice-oven">
                                        <p className='p1-oven'>Deal Price:</p>
                                    </div>
                                    <div className='dealPrice-oven'>
                                            <p className='p2-oven'>
                                                {value.price}   
                                            </p>
                                        </div>
                                </div>
                                <div className="dPrice-oven">
                                    <p className='mrp-oven'>MRP:</p>
                                        <s className='mrpS-oven'>
                                            {value.mrp}
                                        </s>
                                </div>
                                <div className='dPrice-oven'>
                                    <p className='mrp-oven'>You Save:</p>
                                    <p className='mrpS-oven'>{value.discount}</p>
                                </div>
                                <div className='offers-oven'>
                                    <p className='offer-p-oven' >OFFERS AVAILABLE</p>
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
}