import React ,{useState}from 'react'
import '../../styles/admin-styles/Admin-details-styles.scss'
import adminUserIcon from '../../assets/Admin-Assets/adminUserIcon.svg'
import doctorUserIcon from '../../assets/Admin-Assets/doctorUserIcon.svg'
import emailIcon from '../../assets/Admin-Assets/emailIcon.svg'
import phoneIcon from '../../assets/Admin-Assets/phoneIcon.svg'
import editAdminIcon from '../../assets/Admin-Assets/editAdminIcon.svg'
import addRemoveDoctorsIcon from '../../assets/Admin-Assets/addRemoveDoctorsIcon.svg'
import deleteAdminIcon from'../../assets/Admin-Assets/deleteAdminIcon.svg'
import EditComponent from './EditComponent'
import AddRemoveComponent from './AddRemoveComponent'
import DeleteComponent from './DeleteComponent'
function AdminDetailsComponent(props){
    const [editModal,setEditModal] = useState('none')
    const [addRemoveModal,setAddRemoveModal] = useState('none')
    const [deleteModal,setDeleteModal] = useState('none')

const handleEditClick=()=>{
    setEditModal('block')
   }

   const handleAddRemoveClick=()=>{
    setAddRemoveModal('block')
   }

   const handleDeleteClick=()=>{
    setDeleteModal('block')
   }

   const handleDeleteCancel=()=>{
       setDeleteModal('none')
   }

   const handleEditCancel=()=>{
       setEditModal('none')
   }

   const handleAddRemoveCancel=()=>{
       setAddRemoveModal('none')
   }

   
    return(
        <div>
            <div id='adminUser'>
                <div id='admin-details-left'>
                    <img src={adminUserIcon} alt=""></img><span id="admin-username">{props.adminName}</span>
                    <div id='admin-description'>
                    {props.adminDescription}
                    </div>
                </div>
                <div id='admin-details-right'>
                    <p><img id='doctor-user-icon alt="' src={doctorUserIcon}></img><span id="doctor-count">{props.adminDoctorCount} Doctors</span></p>
                    <p><img id='doctor-email-icon alt="'src={emailIcon}></img><span id="doctor-email">{props.adminEmail}</span></p>
                    <p><img id='doctor-phone-icon alt="'src={phoneIcon}></img><span id="doctor-phone">{props.adminPhone}</span></p>
                </div>
                <div id='admin-details-bottom'>
                    <span onClick={handleEditClick}><img id='edit-admin-icon' src={editAdminIcon} alt="" ></img><span id='edit-admin-text'>EDIT ADMIN</span></span>
                    <span onClick={handleAddRemoveClick}><img id='addremove-doctor-icon'src={addRemoveDoctorsIcon} alt=""></img><span id='addremove-admin-text'>ADD/REMOVE DOCTORS</span></span>
                    <span onClick={handleDeleteClick}><img id='delete-admin-icon' src={deleteAdminIcon} alt=""></img><span id='delete-admin-text'>DELETE ADMIN</span></span>
                </div>
            </div>
            {editModal==='block'&& <EditComponent buttonname="SAVE" handleEditCancel={handleEditCancel} 
            adminName={props.adminName} adminDescription={props.adminDescription} adminPhone={props.adminPhone} 
            adminPassword={props.adminPassword} adminId={props.adminId} adminEmail={props.adminEmail} handleEditSave={props.handleEditSave}></EditComponent>}
            {addRemoveModal==='block' && <AddRemoveComponent handleAddRemoveCancel={handleAddRemoveCancel} adminName={props.adminName}></AddRemoveComponent>}
            {deleteModal==='block' && <DeleteComponent adminName={props.adminName} handleDeleteCancel={handleDeleteCancel}></DeleteComponent>}
        </div>

    )
}
export default AdminDetailsComponent