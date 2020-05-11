import React, { useState } from 'react';
import './styles-add-admin/add-new-admin.scss'
import CustomCardHooks from './CustomCardHooks';

function AddDoctor (props)  {
    const [hide,setHide]=useState('none')
    const[classname,setClassname]=useState('play-icon')


    const handleClick = () =>
    {
        if (hide==='none'){
        setHide('block')
        setClassname('play-icon-rotate')
                }
        else 
        {
        setHide('none')
        setClassname('play-icon')
        }
        
    }


    return (
        <div className="add-main">
        <button className="basic-details-button" onClick={handleClick}><span className={classname}><i className="glyphicon glyphicon-play"></i></span><span className="basic-details">ADD DOCTORS</span></button>
        <div style={{display:hide}} className="doctor-container">
            <div>
        <span className="admin">Admin: </span><span className="admin-name"> {props.name}</span>
        </div>
        <div className="admin-status">
        <span className="info-icon"> <i class="glyphicon glyphicon-info-sign"></i></span> <span className="admin-user"> Admin user </span> <span className="admin-name">{props.name}</span> <span className="admin-user-created"> Created </span>
        </div>
         <CustomCardHooks></CustomCardHooks>
        
        </div>
        </div>
    );
};

export default AddDoctor;