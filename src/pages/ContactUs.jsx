import { useFormik } from 'formik'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../Customstyles/ContactUs.css'
import { SignUpSchema } from '../schema/SchemaIndex'

const initialValues ={
  fname:"",
  lname:"",
  country:"",
  subject:""
};

const ContactUs = () => {
  const {values, errors, handleBlur,touched, handleChange, handleSubmit} = useFormik({
    
    initialValues,
    validationSchema:SignUpSchema,
    onSubmit:(values,action)=>{
      // console.log("onsubmit values",values);
      action.resetForm();
    },
  });
  // console.log('errors', errors);
  return (
    
    <div>
      <Header/>
        <div className='body'>
          <div className='mainClass'>
            <h3>Contact Us Form</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fname">First Name</label>
                    <input
                     type="text"
                     id="fname"
                     autoComplete='off'
                     name="fname"
                     placeholder="Your name.."
                     value={values.fname}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     />
                     {errors.fname && touched.fname?<p className='errorsPara'>{errors.fname}</p>: null}
                <label htmlFor="lname">Last Name</label>
                    <input
                     type="text"
                      id="lname"
                      autoComplete='off'
                      name="lname"
                      placeholder="Your last name.."
                      value={values.lname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      />
                      {errors.lname && touched.lname? <p className='errorsPara'>{errors.lname}</p>: null}
                
                <label htmlFor="country">Country</label>
                <select
                 id="country"
                 name="country"
                 value={values.country}
                 onChange={handleChange}
                 onBlur={handleBlur}
                  >
                    <option>Select Country</option>
                    <option value="australia">Australia</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                </select>
                  {errors.country && touched.country?<p className='errorsPara'>{errors.country}</p>:null}

                <label htmlFor="subject">Subject</label>
                    <textarea
                     id="subject"
                     name="subject"
                     placeholder="Write something.."
                     value={values.subject}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     >
                     </textarea>
                     {errors.subject && touched.subject?<p className='errorsPara'>{errors.subject}</p>:null}
                    <input type="submit" value="Submit"/>
            </form>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ContactUs