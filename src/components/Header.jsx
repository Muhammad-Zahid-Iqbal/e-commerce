import { hover } from '@testing-library/user-event/dist/hover';
import React, { useState } from 'react'
import styled from 'styled-components'
import img from '../images/logo.png';


const Container =styled.div`
    width:100%;
    height:190px;
    border:1px solid red;
    background-color:red;
`;

const ChildContainer = styled.div`
    width:100%;
    height:189px;
`;

const TopLinks =styled.div`
    width:100%;
    display:flex;
    padding:10px 20px;
    justify-content:space-between;
`;

const AllBrandListStyle =styled.div`
    display:flex;
`;

const HeadH2 =styled.h2`
    color:white;
    font-size:17px;
`; 



const SearchArea =styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    margin:auto;
    position:relative;
    padding-top:5px;
`;

const LogoDiv =styled.div`
    left:25px;
    border: 1px solid black;
    position:absolute;
   bottom:0px;
   
`;

const SearchBox =styled.div`
    display:flex;
    width:520px;
    height:52px;
    position:relative;
    padding:5px 8px;
    border:1px solid white;
    background-color:white;
    border-radius:25px;
    left:295px;
    bottom:8px;
`;


const InputBox =styled.input`
    width:100%;
    height:40px;
    font-size:18px;
    font-weight:bold;
    border-radius:30px;
    padding: 0px 6px;
    border:none;
    
`;

const Mumbai =styled.div`
    display:flex;
    cursor: pointer;
    position: relative;
`;
const HeadH5 =styled.h2`
    font-size:17px;
    font-weight:bold;
    margin-left:4px;
    margin-top:10px;
    color:white;
    &&:hover{
        text-decoration:underline;
        color:white;
    }
`;

const HeadH3 =styled.h2`
    color:white;
    font-size:17px;
    font-weight:bold;
    margin-left:4px;
    margin-top:10px;
`;

const HeadH4=styled.h2`
    font-size:17px;
    font-weight:bold;
    margin-left:4px;
    margin-top:10px;
    &&:hover{
        text-decoration:underline;
        color:white;
    }
`;

const ShoppingCart =styled.div`
    display:flex;
    
`;

const Login =styled.div`
    display:flex;
    cursor: pointer;
`;



const Navigation =styled.div`
    display:flex;
    width:100%;
    height:65px;
    background:blue;
    text-align:center;
    align-items:center;
    justify-content:space-between;
    border:1px solid white;
    margin-top:18px;
`;

const NavDropLink =styled.div`
     /* visibility:hidden;   */
     
    min-width:max-content;
    position:absolute;
    transform:translate(0px, 40px); 
    left:25px;
    
    
    /* --popper-transform-origin: top left; */
`;

const NavDropChild =styled.div`
    border-width: 1px;
    background: rgb(1, 51, 128);
    min-width:14rem;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    border-radius:0.375rem;
    z-index:1;
    --popper-transform-origin: top left;
    color:inherit;
`;

const ContentParentDiv =styled.div`
    display:grid;
    gap:25px;
    grid-template-columns: repeat(3, 1fr);
    padding:15px;
    place-content: center space-around;
    text-align: center;
    width:95%;
    color:#FFFFFF;
`;

const televisionParentDiv = styled.div`
    min-width:max-content;
    position:absolute;
    transform:translate(0px, 40px); 
    left:25px;
    z-index:1;
    position:absolute;
`;

const televisionDropChild =styled.div`
    border-width: 1px;
    background: rgb(1, 51, 128);
    min-width:14rem;
    padding-top:0.5rem;
    padding-bottom:0.5rem;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
    border-radius:0.375rem;
    z-index:1;
    --popper-transform-origin: top left;
    color:inherit;
`;

const Header = () => {

    const [toggle, setToggle] = useState("hideNav");
    console.log(toggle);

    const toggleNav = () => {

    if(toggle=="showNav"){
        setToggle("hideNav");
    }
    else{
       setToggle('showNav'); 
    }
    
}
  return (
    <Container>
        <ChildContainer>
        <TopLinks>
            <AllBrandListStyle>
                <HeadH2> OUR BRAND PROMISE</HeadH2>
            </AllBrandListStyle>

            <AllBrandListStyle>
                <i className="fa-solid fa-turn-down"></i>
                <HeadH2>OUR BRAND PROMISE</HeadH2>
            </AllBrandListStyle>

            <AllBrandListStyle>
                <i className="fa text-light fa-truck"></i>
                <HeadH2>NEXT DAY DELIVERY</HeadH2>
            </AllBrandListStyle>

            <AllBrandListStyle>
                <i className="fa-sharp fa-solid fa-gears"></i>
                <HeadH2>SERVICE GUARANTEE</HeadH2>
            </AllBrandListStyle>

            <AllBrandListStyle>
                <i className="fa fa-light text-light fa-diagram-project"></i>
                <HeadH2>UNMATCHED NETWORK</HeadH2>
            </AllBrandListStyle>

            <AllBrandListStyle>
                <i className="fa-solid text-light fa-location-dot"></i>
                <HeadH2>UNMATCHED NETWORK</HeadH2>
            </AllBrandListStyle>
            <a href='#'>
                <AllBrandListStyle>
                <i className="fa fa-solid fa-mobile text-white"></i>
                <HeadH2>Contact Us</HeadH2>
                </AllBrandListStyle>
            </a>
        </TopLinks>



        <SearchArea>
            <a href='#'>
                <LogoDiv>
                    <img src={img} alt='logo' className='logoImg'/>
                </LogoDiv>
            </a>


            <SearchBox>
                <InputBox placeholder='Find Your Favoriate Product'></InputBox>
                <i className="fas fasClass fa-search"></i>
            </SearchBox>

            <Mumbai>
                <i className="fa-solid fasMumbai text-light fa-location-dot"></i>
                <HeadH5>Deliver to Mumbai 400059</HeadH5>
            </Mumbai>

            <a href='#' className='cartLink'>
                <ShoppingCart>
                    <i className="fa cart text-white fa-cart-shopping"></i>
                    <HeadH4>Cart</HeadH4>
                </ShoppingCart>
            </a>


            <Login>
            <i className="fa cart text-white fa-up-right-from-square"></i>
            <a href='#' className='LoginLink'>
                <HeadH3>Login</HeadH3>
            </a>
            </Login>
        </SearchArea>

        
        <Navigation>
            <button type='button' className='button' onClick={toggleNav}>
                <span>
                    Mobiles & Tablets <br/>
                    <i className="fa fa-angle-down"></i>
                </span>
            </button>
            <a href='#' className='linkClassSmartPhone'>
                <NavDropLink className={toggle}>
                    <NavDropChild>
                        <ContentParentDiv>
                            <div>
                                <h2 className='smartPhone'>Smartphones</h2>
                            </div>
                            <div>
                                <h2 className='smartPhone'>Headphones & Headsets</h2>
                            </div>
                            <div>
                                <h2 className='smartPhone'>AI Learning Robots</h2>
                            </div>
                            <div>
                                <h2 className='smartPhone'>Wearable Technology</h2>
                                <p className='smartPhonePara'>Top Selling Smartwatches</p>
                                <p className='smartPhonePara'>Apple Price Drop</p>
                            </div>
                            <div>
                                <h2 className='smartPhone'>Tablets & eReaders</h2>
                                <p className='smartPhonePara'>Every Day use Tablets below 15000</p>
                                <p className='smartPhonePara'>Premium Tablets, Above 15001</p>
                            </div>
                            <div>
                                <h2 className='smartPhone'>Power Banks</h2>
                            </div>
                            <div>
                                <h2 className='smartPhone'>Accessories</h2>
                                <p className='smartPhonePara'>Mobile Accessories</p>
                                <p className='smartPhonePara'>Tablet Accessories</p>
                                <p className='smartPhonePara'>Car Mobile Holders</p>
                                <p className='smartPhonePara'>Memory Cards</p>
                                <p className='smartPhonePara'>Cables & Cords</p>
                                <p className='smartPhonePara'>Chargers & Adapters</p>
                            </div>
                            <div>
                                <h2 className='smartPhone'>eSlates</h2>
                            </div>
                        </ContentParentDiv>
                    </NavDropChild>
                </NavDropLink>
            </a>

            


            <button type='button' className='button'>
                <span>
                    Televisions <br/>
                    <i className="fa fa-angle-down"></i>
                </span>
            </button>
            



            <button type='button' className='button'>
                <span>
                    Audio <br/>
                    <i className="fa fa-angle-down"></i>
                </span>
            </button>

            <button type='button' className='button'>
                <span>
                    Home Appliances <br/>
                    <i className="fa fa-angle-down"></i>
                </span>
            </button>

            <button type='button' className='button'>
                <span>
                    Computers <br/>
                    <i className="fa fa-angle-down"></i>
                </span>
            </button>

            <button type='button' className='button'>
                <span>
                    Cameras <br/>
                    <i className="fa fa-angle-down"></i>
                </span>
            </button>

            <button type='button' className='button'>
                <span>
                    Kitchen Appliances <br/>
                    <i className="fa fa-angle-down"></i>
                </span>
            </button>

            <button type='button' className='button'>
                <span>
                    Personal Care <br/>
                    <i className="fa fa-angle-down"></i>
                </span>
            </button>

            <button type='button' className='button'>
                <span>
                    Acessories <br/>
                    <i className="fa fa-angle-down"></i>
                </span>
            </button>
            
        </Navigation>
        </ChildContainer>
    </Container>
    
  )
}

export default Header
