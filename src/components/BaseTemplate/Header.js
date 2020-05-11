import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.png';
import superadmin1 from '../../assets/superadmin1.png';
import '../../styles/basetemplate-styles/Header.css'; 
import HospitalService from '../../services/HospitalService';


const Header = () => {
  const history = useHistory();
  const [superAdmin, setSuperAdmin] = useState([]);
  
  useEffect(() => {
    HospitalService.getSuperAdmin()
      .then(res => {
       console.log(res);
    
        setSuperAdmin(res.data);
        console.log(res.data);
      });
  },[]);


  const logout = () => {
    history.push(`/login`);  
     localStorage.setItem("loggedIn",false); 
  };
  return (
    <div>
      <div className="container">
        <img id="image1" src={logo} alt="img"/> 
        <img id="image2" src={superadmin1} alt="img"/>
        <span className="superadmin-name">{superAdmin.map((name, index) => (
          <div key={index}>{name.superAdminName}</div>
        ))
       }</span>
        <span className="profile">MY PROFILE</span>  

        <span className="loggedin">Logged In as:</span>
        <span className="superadmin">Super Admin</span>
        <span className="logout" onClick={logout}>LOGOUT</span>
           
      </div>
    </div>
  );
};

export default Header;
