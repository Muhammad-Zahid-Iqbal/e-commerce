import React from 'react'
import '../Customstyles/Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
    <div className='container'>
        <div className='row'>
            <div className='col col1'>
                <p className='proCat'>PRODUCT CATEGORIES</p>
                <div>
                    <div className='colDiv'>
                        <p className='colPara'>Smartphones</p>
                    </div>
                    <div className='colDiv'>
                        <p>Laptops</p>
                    </div>
                    <div className='colDiv'>
                        <p>DSLR Cameras</p>
                    </div>
                    <div className='colDiv'>
                        <p>Televisions</p>
                    </div>
                    <div className='colDiv'>
                        <p>Air Conditioners</p>
                    </div>
                    <div className='colDiv'>
                        <p>Refrigerators</p>
                    </div>
                    <div className='colDiv'>
                        <p>Kitchen Appliances</p>
                    </div>
                    <div className='colDiv'>
                        <p>Accessories</p>
                    </div>
                    <div className='colDiv'>
                        <p>Personal Care & Grooming</p>
                    </div>
                </div>
            </div>
            

            <div className='col col1'>
                <p className='proCat'>SITE INFO</p>
                <div>
                    <div className='colDiv'>
                        <p className='colPara'>About Reliance Digital</p>
                    </div>
                    <div className='colDiv'>
                        <p>resQ Services</p>
                    </div>
                    <div className='colDiv'>
                        <p>Site Map</p>
                    </div>
                    <div className='colDiv'>
                        <p>Gift Cards</p>
                    </div>
                    <div className='colDiv'>
                        <p>Corporate Enquires</p>
                    </div>
                    <div className='colDiv'>
                        <p>Contact Us</p>
                    </div>
                    <div className='colDiv'>
                        <p>Kitchen Appliances</p>
                    </div>
                    <div className='colDiv'>
                        <p>Accessories</p>
                    </div>
                    <div className='colDiv'>
                        <p>Personal Care & Grooming</p>
                    </div>
                </div>
            </div>


            <div className='col col1'>
                <p className='proCat'>Product Reviews</p>
                <div>
                    <div className='colDiv'>
                        <p className='colPara'>Product Reviews</p>
                    </div>
                    <div className='colDiv'>
                        <p>Buying Guides</p>
                    </div>
                    <div className='colDiv'>
                        <p>How Tos</p>
                    </div>
                    <div className='colDiv'>
                        <p>Featured Stories</p>
                    </div>
                    <div className='colDiv'>
                        <p>Events & Happenings</p>
                    </div>
                    <div className='colDiv'>
                        <p>Refrigerators</p>
                    </div>
                    <div className='colDiv'>
                        <p>Kitchen Appliances</p>
                    </div>
                    <div className='colDiv'>
                        <p>Accessories</p>
                    </div>
                    <div className='colDiv'>
                        <p>Personal Care & Grooming</p>
                    </div>
                </div>
            </div>

            <div className='col col1'>
                <p className='proCat'>POLICIES</p>
                <div>
                    <div className='colDiv'>
                        <p className='colPara'>Terms of Use</p>
                    </div>
                    <div className='colDiv'>
                        <p>FAQs</p>
                    </div>
                    <div className='colDiv'>
                        <p>Cancellation and Return Policy</p>
                    </div>
                    <div className='colDiv'>
                        <p>Pricing and Payments Policy</p>
                    </div>
                    <div className='colDiv'>
                        <p>Shipping and Delivery Policy</p>
                    </div>
                    <div className='colDiv'>
                        <p>Privacy Policy</p>
                    </div>
                    <div className='colDiv'>
                        <p>E-waste Recycling Policy</p>
                    </div>
                    <div className='colDiv'>
                        <p>EMI and Additional Cashback T&C</p>
                    </div>
                    <div className='colDiv'>
                        <p>RelianceOne Loyalty Program T&C</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
    <div className='middle-footer'>
        <div className='middle-content'>
            <div className='follow'>
                <div>
                    <p className='followP'>FOLLOW US</p>
                </div>
                <div className='socialApp'>
                    <div className='social-Content'>
                        <div className='cursor'>
                        <i className="fa faclass fa-facebook-square" aria-hidden="true"></i>
                        </div>
                        <div  className='cursor'>
                        <i className="fa faclass fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div className='cursor'>
                        <i className="fa-brands faclass fa-youtube"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='AppIcon'>
                <p className='appP'>EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</p>
                <div className='icons'>
                    <img src='https://www.reliancedigital.in/build/client/images/google_play_store.png' className='playStoreIcon' alt='google paly store'/>
                    <img src='https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png' className='playStoreIcon' alt='apple Store'/>
                </div>
            </div>
        </div>
    </div>
    <div className='disclamir'>
        <div className='disclamir-child'>
            <p className='discl-P'>
                <u>Disclaimer</u>
            </p>
        </div>
        <div className='paragraph-disclamir'>
            <p className='paraDetail'>
            Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.
            </p>
        </div>
        <hr/>
        <div className='rights'>
            <p className='rightsP'>© 2022 Reliance Digital. All Rights Reserved.</p>
        </div>
    </div>
</div>
  )
}

export default Footer