import React from 'react'
import "../Customstyles/LoginStyle.css";
import Header from '../components/Header';
import Footer from "../components/Footer";
import { useFormik } from 'formik';

const initialValues = {
    email: "",
    password:"",
    checkbox:""
};

const Login = () => {
    const {values, errors, handleBlur,touched, handleChange, handleSubmit}=useFormik({
        
        initialValues:initialValues,
        onSubmit:(values)=>{
            console.log("onsubmit values", values);
        },
    });
    
    

    // const handleClick =() =>{
    //     alert("Login Faild");
    // }
  return (
    <div>
        <Header/>
            <div className='loginParent'>
                <div className='loginChild'>
                    <div className='left-img'>
                        <img src='https://delightful-twilight-10e5bd.netlify.app/login.jpg' alt='login image' className='imgClass'/>
                    </div>
                    <div className='LoginAccount'>
                        <div className='LoginAccountChild'>
                            <div className='HeadingLogin'>
                                <h2 className='LoginTitle'>Sign in to your account</h2>
                                <p className='shopping'>to enjoy your shopping<a className='experience'> experience</a> ✌️
                                </p>
                            </div>
                            <form className='formLogin' onSubmit={handleSubmit}>
                                <div className='formChild'>
                                    <div className='emailPasswrdClass'>
                                        <label id='email-label' htmlFor="email" className='labelClass'>Email address</label>
                                        <input
                                         type="email"
                                         id='email' 
                                         name="email" 
                                         placeholder='Enter Email'
                                         className='InputemailClass'
                                         value={values.email}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         />
                                    </div>
                                    <div className='emailPasswrdClass' id='passID'>
                                        <label id='password-label' htmlFor="password" className='labelClass'>Password</label>
                                        <input 
                                        type="password" 
                                        id='password'
                                        name="password" 
                                        placeholder='Enter Password...' 
                                        className='InputemailClass'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        />
                                    </div>
                                    <div className='rememberArea'>
                                        <div className='rememberMe'>
                                            <label className='chkboxlabel' id='lblID'>
                                                <input 
                                                type="checkbox" 
                                                name='checkbox'
                                                id='checkbox'
                                                className='chkbox'
                                                value={values.checkbox}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                />
                                                <span className='emptySpan' aria-hidden="true"></span>
                                                <span className='spanClass'>Remember me</span>
                                            </label>
                                            <a className='forgotClass' id='lblID'>Forgot password?</a>
                                        </div>
                                        <input type='submit' className='signInBtn' value="Sign in"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
  )
}

export default Login