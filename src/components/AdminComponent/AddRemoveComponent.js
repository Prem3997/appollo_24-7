import React from 'react';
import '../../styles/admin-styles/Add-remove-styles.scss'
import closeicon from '../../assets/Admin-Assets/closeicon.svg'
import CustomCardHooks from '../AddDoctor/CustomCardHooks';

const AddRemoveComponent = (props) => {
    return(
      <div className="remove-bg-modal">
        <div className="remove-modal-content">
          <p className="add-remove-text">Add/Remove Doctors-{props.adminName}</p>
          <div><img src={closeicon} onClick={props.handleAddRemoveCancel} className="remove-close-icon"></img></div>
          <CustomCardHooks handleAddRemoveCancel={props.handleAddRemoveCancel}></CustomCardHooks>
        </div>
      </div>
    )  
};

export default AddRemoveComponent;