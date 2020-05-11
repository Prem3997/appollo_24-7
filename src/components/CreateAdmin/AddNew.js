import React, { useState } from 'react';
// import './styles-add-admin/add-new-admin.scss';
import {Formik,Form,Field,ErrorMessage} from 'formik' ;
import AddDoctor from './AddDoctor';

function AddNew (props)  {
    const [hide,setHide]=useState('block')
    const [userId,setUserId]=useState('')
    const[email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [phone,setPhone]=useState('')
    const [description,setDescription]=useState('')
    const [height,setHeight]=useState()
    const[icon,setIcon]=useState('none')
    const[classname,setClassname]=useState('play-icon')
    const [errors]=useState({})

    const handleClick = () =>
    {
        if (hide==='none'){
        setHide('block')
        setHeight(0)
        setClassname('play-icon-rotate')
      }
        else 
        {
        setHide('none')
        setHeight(-550)
        setClassname('play-icon')
        }
        
    }

    const handleSubmit = () =>
    console.log('dd')
    {
      if (errors=="")
     setHide('none')
    }
    const validateForm =(values) => {
        setUserId(values.userId)
        setEmail(values.email)
        setPassword(values.password)
        setPhone(values.phone)
        setDescription(values.description)

       
        if(!values.userId){
            errors.userId="Enter your UserId"
        }
        if (values.userId)
        {
          errors.userId=""
        }

        if(!values.email){
            errors.email="Enter your email"
        }

        
      
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

         if(values.email){
          errors.email=""
      }

        if (!values.password){
            errors.password="Enter Password"
        }

        if (values.password){
          errors.password=""
      }

        if (values.password.length < 8){
            errors.password="Password should be a minimum of 8 characters"
        }

        if (!values.phone){
          errors.phone="Enter your number"
      }
      if (values.phone){
        errors.phone=""
    }

        if (values.phone.length !== 10)
        {
          errors.phone="Enter a valid mobile number"
        }

        if (!values.description){
            errors.description="Enter some description"
        }
        
        
        else {
          setHide('none')
          setHeight(-550)
          setClassname('play-icon')
          setIcon('block')
        }

         return errors
      
    }
    return (
      <div>
        <div className="add-main">
            <button className="basic-details-button"  onClick={handleClick}><span className={classname}><i className="glyphicon glyphicon-play"></i></span>
            <span className="basic-details">BASIC DETAILS</span><span className="ok-icon" style={{display:icon}}><i class="glyphicon glyphicon-ok-sign"></i></span></button>

            <div style={{display:hide}} className="slider">
            <Formik  initialValues={{userId,email,phone,password,description}}
                    validateOnBlur={false}  validateOnChange={false} validate={validateForm}>
        <Form>
        
        
        <div className="label">USER ID</div>
        <div className="message">
        <fieldset>
        <Field className="i1" type="text" id="userId" name="userId">
          </Field>
        </fieldset>
        <ErrorMessage name="userId" className="error-message"  component="span"></ErrorMessage>
        </div>

        <div className="label" >Email Address</div>
        <div className="message">
        <fieldset>
          <Field className="i1" type="text" id="email" name="email" 
          placeholder="name@company.com">
          </Field>
        </fieldset>
        <ErrorMessage name="email" className="error-message"  component="span"></ErrorMessage>
        </div>

        <div className="label">Password</div>
        <div className="message">
        <fieldset>
          <Field className="i1" type="password" id="password" name="password">
          </Field>
        </fieldset>
        <ErrorMessage name="password" className="error-message"  component="span"></ErrorMessage>
        </div>

        <div className="label">Mobile Number</div>
        <div className="message">
        <fieldset>
        <span className="number">+91</span>
          <Field className="i2" type="text" id="phone" name="phone" 
          placeholder="9123456789">
          </Field>
        </fieldset>
        <ErrorMessage name="phone" className="error-message"  component="span"></ErrorMessage>
        </div>

        <div className="label">Description</div>
        <div className="message">
        <fieldset>
          <Field className="i3" type="textarea" id="description" name="description">
          </Field>
        </fieldset>
        <ErrorMessage name="description" className="error-message" id="e3" component="span"></ErrorMessage>
        </div>
        
        <a className="cancel" href="CANCEL">CANCEL</a>
        <button className="button1" type="submit" onClick={handleSubmit}><span className="submit-text">CREATE ADMIN{props.buttonname}</span></button>
        
        </Form>
      </Formik>
     </div> 
        </div>
              <div style={{marginTop:height}}>
                     <AddDoctor name={userId}></AddDoctor>
               </div>
        </div>
    );
};

export default AddNew;