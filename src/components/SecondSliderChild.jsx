import React, { Component } from "react";
import Slider from "react-slick";
import { Watches } from "../data";

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
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

export default class Resizable extends Component {
  state = {
    display: true,
    width: 820
  };
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplay:true
    };
    return (
      <div>
        <div
          style={{
            width: this.state.width + "px",
            display: this.state.display ? "block" : "none"
          }}
        >
          <Slider {...settings}>
            {Watches.map((value,ind)=>{
                return <div key={ind}>
            <div className="ComputersClass" id="ComputerId">
                <div className="swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <a href="#" className='aTopLink'>
                                <div className="swiper-content" id="swipercontentId">
                                    <img src={value.img} id="watchStyle" alt="HP 14s-dr3001TU Laptop (Intel Pentium Silver N6000/8 GB/256 GB SSD/UHD Graphics/Windows 11 Home/MSO/HD), 35.6 cm (14 inch)" className='imgClass'/>
                                </div>
                                <div className="swiper-title">
                                    <p className="para" id="paraId">
                                        {value.name}
                                     </p>
                                </div>
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
                                    <div className='offers' id="offerId">
                                        <p className='offer-p' >OFFERS AVAILABLE</p>
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
      </div>
    );
  }
}