import React from 'react'
import SimpleSlider from './SimpleSlider';
import SecondSimpleSlider from './SecondSimpleSlider';
import CustomStyle from '../Customstyles/CustomStyle.css';
import MicrowaveOven from './MicrowaveOven';
import TopandMiddle from './TopandMiddle';
import PersonalCare from './PersonalCare';
import Television from './Television';
import Ace from './Ace';
import ITAccessories from './ITAccessories';
import Mobile from './Mobile';
import Headphones from './HeadPhone';
import BottomCamera from './BottomCamera';
import AllProductSlider from './AllProductSlider';
import Footer from './Footer';

const Slider = () => {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w5OTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGM5Lzk5MjgzODQ4Mzk3MTAuanBnfGUxZTBiNDNlOGU2ZWUzMzg2YjU3MWMwYmJiNTBhZjM5ODdkMzhjYjNiYWZhYzllYWJmNzE0MGY4MTFmMjY3MDU" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/MIdnight-Sale-Carousel-07-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w5OTA2OXxpbWFnZS9qcGVnfGltYWdlcy9oNzYvaGM5Lzk5MjgzODQ4Mzk3MTAuanBnfGUxZTBiNDNlOGU2ZWUzMzg2YjU3MWMwYmJiNTBhZjM5ODdkMzhjYjNiYWZhYzllYWJmNzE0MGY4MTFmMjY3MDU" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Year-End-Sale-5000-Instant-Discount-Carousel-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxNDcwODh8aW1hZ2UvanBlZ3xpbWFnZXMvaDkzL2hiNS85OTI4MTY1NTg5MDIyLmpwZ3w4NDk3ZDFhZTM1YzUxYTg3MDFiMWZkZjhmMGE0ZWI2ZWZmYjU0MWNmOGJkMTAzZTYwMTdlNjI5MGNjYzZiOTIx" className="d-block w-100" alt="..."/>
                </div>
            </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    

        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://www.reliancedigital.in/medias/Apple-S8-CLP-Banner-14-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NzY3M3xpbWFnZS9qcGVnfGltYWdlcy9oNjAvaDBkLzk5MzExODU1MjA2NzAuanBnfDA3MWZiOGZlMzdjOTYzZDFhZGUyZWMzMjdmOTgxZmJjOGY1MTI2OGI0ZjA3YjU1YzUzNDllZjlkMmQwMmFkMjA" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Smartwatch-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTMyMnxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGFmLzk5Mjk4MzI1NjI3MTguanBnfDBkOTJjZDk5YTI1MTU3NWU5MDc1NGQ0ZDg2YjFlOWRhOGRhN2FiMzgxMDY3YWI5Y2M1NDk0MjNjZjU1MzNjYjY" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Accessories-Fiesta-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTAwN3xpbWFnZS9qcGVnfGltYWdlcy9oY2MvaDI5Lzk5Mjk4MTAyMTQ5NDIuanBnfGUxYTc3MTMzNThhNzlkZGQyNTNlYTYxMzM3OWM4NzQzYjY2YWYwYzFkNjhhMjA5M2YwNDhiYTMwMzA2ZGY5MTY" className="d-block w-100" alt="..."/>
                </div>
                <div className='carousel-item'>
                    <img src="https://www.reliancedigital.in/medias/Entertainment-Fest-Carousel-Banner-08-D.jpg?context=bWFzdGVyfGltYWdlc3wyMDEwMzl8aW1hZ2UvanBlZ3xpbWFnZXMvaGQxL2g2MS85OTI5MTgxNjI2Mzk4LmpwZ3w2MjQzNGNlODRiMmRkZmE1ZDA1Njg3MTNmM2ExMWE5ZDQ4MDJhN2VkYTBmOWVjMjg1MTdhNTM3YmNhM2E3YjM0" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Laptop-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTcwNXxpbWFnZS9qcGVnfGltYWdlcy9oM2UvaDJiLzk5MzA5MTgwNjgyNTQuanBnfDM0NDIxMjI1ZmE2NjQ1MDk4MWY2MjJlMjU2Mjg0YzAxNDViYTRiM2YzMTEyYjU5OGUwNTZlNDY4NzcxYzk3M2Y" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Winter-Sale-Carousel-Banner-2022.jpg?context=bWFzdGVyfGltYWdlc3w3ODA1OXxpbWFnZS9qcGVnfGltYWdlcy9oOGMvaDU3Lzk5MTgzMzY0MzQyMDYuanBnfDkxOGNjMWJiMjExYWUzYTQ0ODMzMTk5MjQ0YzY0YmVhNTE5ZjQxZTZjNzc4ZTRhNDhjYjc3N2I3NmZjNmM2ZDI" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Moto-G42-Carousel-Banner-09-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wxMDMyNDN8aW1hZ2UvanBlZ3xpbWFnZXMvaGQ2L2g2ZC85OTI5ODI3Mzg1Mzc0LmpwZ3w4MzEyODVmNTUyNWIwODNlNTA1YThjNTA4Njg5ZmU1YTU1ZjZlMzM5NWY5ODI0ZWNmOTAwYjY5M2RhNWVkOTky" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Apple-Accessories-Carousel-Banner-01-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3MjY3M3xpbWFnZS9qcGVnfGltYWdlcy9oZTIvaDg3Lzk5MjgxNzE1NTI3OTguanBnfDkzOTI0MDE5YzgxOTVmNzdiMTBlNWZhMTQwMWZmNDc1ZTU2MzY5YmIwZTBlZWQ2ZjRkYWVhYzBkZTkzMTM3Y2M" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Monitors-Carousel-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w4Mjc4NHxpbWFnZS9qcGVnfGltYWdlcy9oNTEvaDNlLzk5MzExODEzNTkxMzQuanBnfDA5Nzc0YWExYjdjM2YzNTg4Njk4MDJjZGU1ZWQ4NzAzOTIzZDgxMWU2MjVhYjdkNTI2MzBhNWJhYzg0ZTZjMTk" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Apple-S8-CLP-Banner-14-11-2022.jpg?context=bWFzdGVyfGltYWdlc3w5NzY3M3xpbWFnZS9qcGVnfGltYWdlcy9oNjAvaDBkLzk5MzExODU1MjA2NzAuanBnfDA3MWZiOGZlMzdjOTYzZDFhZGUyZWMzMjdmOTgxZmJjOGY1MTI2OGI0ZjA3YjU1YzUzNDllZjlkMmQwMmFkMjA" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.reliancedigital.in/medias/Smartwatch-Carnival-Carousel-Banner-D.jpg?context=bWFzdGVyfGltYWdlc3w5MTMyMnxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaGFmLzk5Mjk4MzI1NjI3MTguanBnfDBkOTJjZDk5YTI1MTU3NWU5MDc1NGQ0ZDg2YjFlOWRhOGRhN2FiMzgxMDY3YWI5Y2M1NDk0MjNjZjU1MzNjYjY" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-dark rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-dark rounded-circle" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>


        <div className='TrendingLaptop'>
            <div className='trendingChild'>
                <div className='trendingContent'>
                    <p className='trending-para'>TRENDING LAPTOPS  |</p>
                    <a href='/' className='aLink'>
                        <p className='aLinkP'>VIEW ALL</p>
                    </a>
                </div>
            </div>
            <SimpleSlider />
            <br/>
            <hr/>
            <SecondSimpleSlider/>
            <hr/>
            <div>
                <div className='Entertainment-FEST'>
                    <p className='entertainment-Title'>ENTERTAINMENT FEST</p>
                </div>
                <br/>
                <br/>
                <div className='entertainmentImages'>
                    <div className='slide-1Img'>
                        <a href='/'>
                            <img src='https://www.reliancedigital.in/medias/43-inch-UHD-TV-Small-Banner-05-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w2MTc5NXxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaGM2Lzk5MjgxNjcyNjAxOTAuanBnfDg4MjdjN2IwZWViMTNlNmM2ODdiOWZjNzU2M2RkZmVlZTMxMmM4ODRlZWQ3MWNhMWIwYWI3NmNhMDcxNjkxY2M' alt='slide-1' className='accessories'/>
                        </a>
                    </div>
                    <div className='slide-1Img'>
                        <a href='/'>
                            <img src='https://www.reliancedigital.in/medias/Headphones-and-Earphones-Entertainment-Fest-Small-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w0MDQzNHxpbWFnZS9qcGVnfGltYWdlcy9oYTAvaDU0Lzk5MjY3ODEzMzc2MzAuanBnfGI1Y2Q4MDExYTAwOGEzYzhlNWQxOTI0MzU2ZWIyY2YyYWQ5NDE1M2EwYzNmMTNjNjA4MGZiMTU2Y2VlZGNlZDQ' alt='slide-2' className='accessories'/>
                        </a>
                    </div>
                    <div className='slide-1Img'>
                        <a href='/'>
                            <img src='https://www.reliancedigital.in/medias/OnePlus-Smart-TV-Small-Banner-13-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w1NjMwMXxpbWFnZS9qcGVnfGltYWdlcy9oYmYvaDk5Lzk5MzExODY3MDAzMTguanBnfDAxYmI1YmI5OGE3NzIxNmY3MTMxODBiZTEyYmQ4N2RmOGM4OWE3ZmM1NzFiYWIzYjNjYmE0YmFmZDhlYWZhNDQ' alt='slide-3' className='accessories'/>
                        </a>
                    </div>
                    <div className='slide-1Img'>
                        <a href='/'>
                            <img src='https://www.reliancedigital.in/medias/Soundbars-Entertainment-Fest-Small-Banner-02-12-2022.jpg?context=bWFzdGVyfGltYWdlc3wzMTg3NHxpbWFnZS9qcGVnfGltYWdlcy9oMzYvaGQ1Lzk5MjY3ODE0MDMxNjYuanBnfDY5ODQ2ZDU3NDFlMjgxYTY2YTViZmQ1ZTA4Y2U5ZTMwYjVlNjYzNTk3YzJjNzkyMDUwY2VkY2ZlZTViODQ1NjQ' alt='slide-4' className='accessories'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className='microwaveOven'>
                <div className='microwave-Title'>
                    <div className='title-child'>
                        <p className='title-para'>BIGGEST PRICE DROP ON  MICROWAVE OVEN | </p>
                        <a className='/'>
                            <p className='para-view-oven'>VIEW ALL</p>
                        </a>
                    </div>
                </div>
                <MicrowaveOven/>
                <br/>
                <hr/>

                <div>
                    <div className='electronics'>
                        <p className='para-electronic'>GREAT DEALS ON ELECTRONICS</p>
                    </div>
                    <br/>
                    <br/>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <img src='https://www.reliancedigital.in/medias/Smartwatches-Small-Banners-01.jpg?context=bWFzdGVyfGltYWdlc3w0NDA0MnxpbWFnZS9qcGVnfGltYWdlcy9oNTAvaGRiLzk5MjgzNzA5MTMzMTAuanBnfGYwOWU2ZjQ3Y2Y0OWI2NmVhZGVkYWM2M2ZiMzQ4YTlhODRkZDY4ODZmODA1OGQyZWNiYWVhODNmNWM2YWMwMmY' alt='slide-1' className='Imgslide'/>
                            </div>
                            <div className="col">
                                <img src='https://www.reliancedigital.in/medias/Realme-Smart-TV-Great-Deals-Banner-13-12-2022.jpg?context=bWFzdGVyfGltYWdlc3w3NzY3MHxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDg2Lzk5MzExODY3NjU4NTQuanBnfDA5YzNlMTkwNmM0ZWI3ZGJlYjI5Y2E0ZmQ5M2M5YjNkZmZjZmVlMjBmOGU1ZGIwNDY3NjFhNTcwMWM4ZmFlOWI' alt='slide-2' className='Imgslide'/>
                            </div>
                            <div className="col">
                                <img src='https://www.reliancedigital.in/medias/Printers-Small-Banners-01-1-.jpg?context=bWFzdGVyfGltYWdlc3w0MDAwNHxpbWFnZS9qcGVnfGltYWdlcy9oNGYvaGQxLzk5Mjg3MzAzNDU1MDIuanBnfGMyNTg3NWQyZWRmMGU2M2EzZmEwM2U2MWNlMTA3ZWQzYjk4MmRhM2EzYjY0N2FiZGM4OGFlYWQ2NjBlZjE4YWE' alt='slide-3' className='Imgslide'/>
                            </div>
                            <div className="col">
                                <img src='https://www.reliancedigital.in/medias/Washing-Machines-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NDcwMHxpbWFnZS9qcGVnfGltYWdlcy9oNWIvaDUwLzk5MTM3Nzc3MTcyNzguanBnfGMyNWJhNDNiMTFkMjE4YmQ2OGRiMzdkMGIxNmZmZDhiYzViMTBjY2I1ZDllYzAyMWFjN2FlZTU1ZGVmMDk4MmU' alt='slide-4' className='Imgslide'/>
                            </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <img src='https://www.reliancedigital.in/medias/Smart-Home-Products-Great-Deals-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wzOTAxM3xpbWFnZS9qcGVnfGltYWdlcy9oMDYvaDMxLzk5MzExOTE5NDMxOTguanBnfDhiY2ZkOWE5YmQ3OWFkYmM2OWUwNjIwODQ4NGFkMWI4MDExZGQ5ZTIyNzkyMmZiMDM2ZDcyYjRkM2M4NmQ0MTA' alt='slide-5' className='Imgslide'/>
                            </div>
                            <div className="col">
                                <img src='https://www.reliancedigital.in/medias/True-Wireless-Small-Banners.jpg?context=bWFzdGVyfGltYWdlc3w0NjcyOXxpbWFnZS9qcGVnfGltYWdlcy9oODAvaDljLzk5MTM3NzcyNTg1MjYuanBnfGY3MDIxZDZlYTBhMjEwYjQ4NGIzMmQwZjdjMzQ2M2FhYzIwYWE0NGE4MzFmYjRlZjQwNzFlZjk2NWMwMzYxN2Y' alt='slide-6' className='Imgslide'/>
                            </div>
                            <div className="col">
                                <img src='https://www.reliancedigital.in/medias/Samsung-M13-5G-Great-Deals-Banner-22-11-2022.jpg?context=bWFzdGVyfGltYWdlc3wzNDUzN3xpbWFnZS9qcGVnfGltYWdlcy9oNDgvaGY3Lzk5MjM5MDIzNDExNTAuanBnfDdiZjliNDZlOWUxZDFjZDQ2MDkzYjdjZDZhNDVlNWI0MGYwNTAwOWJkOWM4MWUzMTUyYmNmZmRmZjk3NjIwYjk' alt='slide-7' className='Imgslide'/>
                            </div>
                            <div className="col">
                                <img src='https://www.reliancedigital.in/medias/MackBook-Appliances-Small-banners.jpg?context=bWFzdGVyfGltYWdlc3w0Mjc0NXxpbWFnZS9qcGVnfGltYWdlcy9oNTYvaDkyLzk5MTkwODgzMjg3MzQuanBnfDcxYmMyMDMxMjdiMzUxYzE2NmJkYTU4ZDBlNTQxNjBkZWViYjQ1Mzc2Y2IyOWYwNTllODhkNmRlZjA0NjM3NmI' alt='slide-7' className='Imgslide'/>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <TopandMiddle/>
            <div className='digital-brand'>
                <div className='brandTitle'>
                    <p className='brndPara'>THE RELIANCE DIGITAL BRAND PROMISE</p>
                </div>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col parentInsta'>
                            <div className='instaDelivery'>
                                <img src='https://www.reliancedigital.in/medias/Insta-Delivery-Brand-Promise-Icon.png?context=bWFzdGVyfGltYWdlc3wxNTM3fGltYWdlL3BuZ3xpbWFnZXMvaGI2L2gwNS85NDQ3MTcwMzQyOTQyLnBuZ3w2Yzc1ZmY1ZjYwOWIyNWU0ZTgwMjFlYmRkMTU5ZTgzMGI4ZDNmZTE2NjVjYmRlMmUwMmRiODI2OTExNWM5ZTdk' className='instaImg'/>
                            </div>
                            <div className='instaDelivery'>
                                <p className='instaPara'>INSTA DELIVERY</p>
                            </div>
                            <div className='instaDelivery'>
                                <p className='hrsPara'>LESS THAN 3 HRS.</p>
                            </div>
                        </div>
                        <div className='col parentInsta'>
                            <div className='instaDelivery'>
                                <img src='https://www.reliancedigital.in/medias/Best-Finance-Options-2.png?context=bWFzdGVyfGltYWdlc3wxMjM4fGltYWdlL3BuZ3xpbWFnZXMvaDJmL2gxOS85NDQ3MTcwNDA4NDc4LnBuZ3xlMDBiNjY4YWI5YzMzYjZkZDhlZTMyMDhjYjE2YzI2OTY2NWJhYjk2M2VkNzdjZDg3NTNlMGEyMTA1ZjFlODZh' className='instaImg'/>
                            </div>
                            <div className='instaDelivery'>
                                <p className='instaPara'>BEST FINANCE OPTIONS</p>
                            </div>
                            <div className='instaDelivery'>
                                <p className='hrsPara'>WIDE RANGE</p>
                            </div>
                        </div>
                        <div className='col parentInsta'>
                            <div className='instaDelivery'>
                                <img src='https://www.reliancedigital.in/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY' className='instaImg'/>
                            </div>
                            <div className='instaDelivery'>
                                <p className='instaPara'>SERVICE GUARANTEE</p>
                            </div>
                            <div className='instaDelivery'>
                                <p className='hrsPara'>HASSLE FREE</p>
                            </div>
                        </div>
                        <div className='col parentInsta' id='instaRight'>
                            <div className='instaDelivery'>
                                <img src='https://www.reliancedigital.in/medias/unmatched-network-img.png?context=bWFzdGVyfGltYWdlc3w3NDV8aW1hZ2UvcG5nfGltYWdlcy9oODIvaDJhLzkwOTA3OTgwNTk1NTAucG5nfDFmMThjYzdiYTNiOTgxYjA5YzdlZTFiMmQyODI5MGY2NTM4ZTcxOWZkZTA1ZjAzY2Q1ZTk5YjQ1NTMxMWViYzU' className='instaImg'/>
                            </div>
                            <div className='instaDelivery'>
                                <p className='instaPara'>UNMATCHED NETWORK</p>
                            </div>
                            <div className='instaDelivery'>
                                <p className='hrsPara'>700 CITIES, 2000 STORES</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <hr/>
        <PersonalCare/>
        <hr/>
        <Television/>
        <hr/>
        <SecondSimpleSlider/>
        <hr/>
        <Ace/>
        <hr/>
        <ITAccessories/>
        <hr/>
        <Mobile/>
        <hr/>
        <Headphones/>
        <hr/>
        <BottomCamera/>
        <hr/>
        <div className='AllProduct'>
            <div className='AllProductTitle'>
                <p className='AllTitlePara'>EXPLORE OUR RANGE OF PRODUCTS</p>
            </div>
            <br/>
            <br/>
            <br/>
            <div className='AllproSlider'>
                <AllProductSlider/>
            </div>
            <br/>
            <div className='ViewAllBtn'>
                <button type='button' className='btn'>
                    <p className='btnP'>View All</p>
                </button>
            </div>
        </div>
        <br/>
        <Footer/>
</div>
  )
}

export default Slider