import React from 'react';
import '../../styles/admin-styles/delete-admin-styles.scss'
import closeicon from '../../assets/Admin-Assets/closeicon.svg'
import { useHistory } from 'react-router-dom';
const DeleteComponent = (props) => {
    const history = useHistory();

    const handleDelete=()=>{
        console.log('delete')
        history.push('/manage-admin')
    }
    return (
        <div className="delete-bg-modal">
            <div className="delete-modal-content">
                <span className="close-delete-modal"><img src={closeicon} alt="loading..." onClick={props.handleDeleteCancel}></img></span>
                <div className="delete-admin-text">
                    Delete Admin
                </div>
                <div className="delete-text">
                    Are you sure you want to delete the <span className="delete-admin-name">{props.adminName}?</span>
                </div> 
                <div className="cancel-delete-text">
                    <span className="cancel-text" onClick={props.handleDeleteCancel}>CANCEL</span>
                    <button className="delete-button" onClick={handleDelete}>DELETE</button>
                </div>
                
            </div>
        </div>
    );
};

export default DeleteComponent;