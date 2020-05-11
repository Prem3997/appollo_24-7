import React,{useState} from 'react';
import '../../styles/admin-styles/Edit-styles.scss'
import {Formik,Form,Field,ErrorMessage} from 'formik' ;
import closeicon from '../../assets/Admin-Assets/closeicon.svg'
const EditComponent = (props) => {

    const [hide,setHide]=useState('block')
        const [userId,setUserId]=useState(props.adminId)
        const[email,setEmail]=useState(props.adminEmail)
        const [password,setPassword]=useState(props.adminPassword)
        const [phone,setPhone]=useState(props.adminPhone)
        const [description,setDescription]=useState(props.adminDescription)
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
        {
          console.log('handleSubmit')
         
          if(props.buttonname==='SAVE')
           props.handleEditSave(userId,email,password,phone,description)
           props.handleEditCancel()

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
            if(!values.email){
                errors.email="Enter your email"
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
        
            if (!values.password){
                errors.password="Enter Password"
            }
            if (!values.phone){
              errors.phone="Enter your number"
            }
            if (values.phone.toString().length !== 10)
            {
              errors.phone="Enter a valid mobile number"
            }
            if (!values.description){
                errors.description="Enter some description"
            }
              console.log(errors,'') 
             return errors
        }
        return (
            
            <div className="edit-bg-modal">
                <div className="edit-modal-content">
                {/* {console.log(email,'render')} */}
            <div className="add-main">
                <button className="basic-details-button" style={{display:'none'}} onClick={handleClick}><span className={classname}><i className="glyphicon glyphicon-play"></i></span>BASIC DETAILS<span className="ok-icon" style={{display:icon}}><i className="glyphicon glyphicon-ok-sign"></i></span></button>
                <p className="edit-admin-text">Edit Admin</p><div><img src={closeicon} onClick={props.handleEditCancel} className="delete-close-icon"></img></div>
                <div style={{display:hide}} className="slider">
                <Formik  initialValues={{userId,email,phone,password,description}}
                        validateOnBlur={false}  validateOnChange={false} validate={validateForm} onSubmit={handleSubmit}>
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
            
            <a className="cancel" onClick={props.handleEditCancel}>CANCEL</a>
            <button className="button1" type="submit"><span className="submit-text">{props.buttonname}</span></button>
            
            </Form>
          </Formik>
         </div> 
            </div>
            </div>
        </div>
        );
    
        
};

export default EditComponent;
