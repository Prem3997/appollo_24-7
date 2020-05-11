import React from 'react';
import AddNew from './AddNew';
import './styles-add-admin/add-new-admin.scss'



const AddNewAdminMain = () => {
    return (
        <div>
        <div className="main-heading1">
        <span className="heading1">MANAGE ADMINS></span><span className="heading2">Add New Admin</span>
        </div>
        <div className="main-heading2">
        <span className="heading3">Add New Admin</span><span className="heading4">|Create New Administrator</span>
        </div>
          <AddNew></AddNew>  
        
        
        </div>
    );
};

export default AddNewAdminMain;