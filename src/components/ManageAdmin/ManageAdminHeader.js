import React from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/ManageAdminStyles/manageAdminHeader.scss';


function ManageAdminHeader() {
  const history = useHistory();

  const onAddNewAdmin = () => {
    history.push('/createAdmin');
  };
  return (
    <div>
      <span id="admin-header">Manage Admins</span>
      <span id="admin-header-small">| Managing Administrators </span>
      <span id="quickLink-admin">Quick Links:</span>
      <button id="addNewAdmin-admin" onClick={onAddNewAdmin}><span id="addNewAdminText-admin">ADD NEW ADMIN</span></button>
    </div>
  );
}

export default ManageAdminHeader;
