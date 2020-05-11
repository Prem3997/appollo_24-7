import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import '../../styles/Login.css';
import logo from '../../assets/logo.png';
import key from '../../assets/key.png';
import HospitalService from '../../services/HospitalService';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from '../../assets/background.png';

const Login = (props) => {

    const history=useHistory();
  
    const [superAdmin,setSuperAdmin] = useState([]);

    useEffect(() => {
      HospitalService.getSuperAdmin()
     .then(res => {
      console.log(res)
   
      setSuperAdmin(res.data)
      console.log(res.data)
  })
   },[])

    const {userid,password,admin} = props

    const onHandleSubmit = (event) => {
      console.log("Inside onsubmit")
      console.log(event)
      if (event.admin === 'superadmin')
 {
    {superAdmin.map(name => {if(name.superAdminName === event.userid && 
      name.password === event.password){
        localStorage.setItem("loggedIn",true);
        history.push(`/dash-board`);
  }
    else
    console.log('Please enter valid username')})}
    }
    else{
      console.log('You should select one:admin or super-admin')
    }     
}
  
  
const validateForm = (values) =>
  {
    let errors = {}
  
    if (!values.userid)
    {
        errors.userid = 'Enter UserID'
    }
    else if (!values.password){
        errors.password = 'Enter Password'
    }
    else if(!values.admin){
      errors.userid = 'Select any one: SuperAdmin or Admin?'
    }
    else if(values.admin === 'admin'){
      (superAdmin.map(name => {if (name.superAdminName === values.userid || name.password === values.password) 
        errors.userid = 'Enter correct credentials'
      }))
    }
    else{
      (superAdmin.map(name => {if (name.superAdminName !== values.userid || name.password !== values.password) 
        errors.userid = 'Enter valid userid or password'
      }))
    }
    
    return errors
  } 
  return (
  
     <div className="wrapper1"> 
      <img className="background" src={background} alt=""></img>
      <div className="form-wrapper1">
        <Formik initialValues={{ userid, password, admin }}
        enableReinitialize={true}
        onSubmit={onHandleSubmit} 
        validateOnChange={false}
        validateOnBlur={false} 
        validate={validateForm}>
           <Form>
      <img className="logo" src={logo} alt="Apollo logo"></img>
                <span className="loginas">Login as: </span>
        <Field id="superadmin" value="superadmin" name="admin" type="radio">
          </Field><span className="superadmin-span">SuperAdmin</span>
        <Field id="admin" value="admin" name="admin" type="radio" >
          </Field><span className="admin-span1">Admin</span>
          <div className="errormsg">            
        <ErrorMessage name="userid" component="div" className="alert alert-warning"></ErrorMessage>
          </div>     
              <div className="userid">
                  <Field  type="text" placeholder="User ID" 
                      id="placeholder"
                       name="userid" 
                       value={userid}
                        required ></Field>
               </div>  
          <div className="errormsg">
        <ErrorMessage name="password" component="div" className="alert alert-warning"></ErrorMessage>
          </div>  
              <div className="password">
                  <Field type="password" placeholder="Password" 
                       name="password" 
                       value={password} 
                       required ></Field>
                     <img className="key" src={key} alt=""></img><br/>
                </div>
             

              <div className="createAccount">
                       <button className="login" type="submit">LOG IN</button>
                       <span className="forgot_password">FORGOT PASSWORD?</span>
              </div>
          </Form>
      </Formik>
      
          </div>
          </div>
  )
     
};

export default Login;
