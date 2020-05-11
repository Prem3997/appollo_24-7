import React, { useState, useEffect } from 'react';
import '../../styles/admin-styles/Admin-styles.scss' 
import Pagination from './Pagination'
import AdminDetailsComponent from './AdminDetailsComponent'
import DashboardDataService from '../../services/DashboardDataService';
import {useParams} from 'react-router-dom'
function AdminComponent(props){
    const [adminName,setAdminName]=useState('')
    const [adminDescription,setAdminDescription]=useState('')
    const [adminEmail,setAdminEmail]=useState('')
    const [adminId,setAdminId]=useState('')
    const [adminPhone,setAdminPhone]=useState('')
    const [adminPassword,setAdminPassword]=useState('')
    const [tableData,setTableData] = useState([])
    const [adminDoctorCount,setAdminDoctorCount]=useState('')
    let {id}=useParams()
    var data
    var adminIdToMatch=id
    
    useEffect(()=>{
        DashboardDataService.getSuperAdminDetails().then(res=>{
            var doctorArray=[]
            data=res.data
            data.map(superAdmin=>{
                superAdmin.admin.map(admin=>{
                    if(admin.id==adminIdToMatch){
                        setAdminName(admin.adminName)
                        setAdminId(admin.id)
                        setAdminDescription(admin.description)
                        setAdminEmail(admin.email)
                        setAdminPhone(admin.phone)
                        setAdminPassword(admin.password)
                        setAdminDoctorCount(admin.doctors.length)
                        admin.doctors.map(doctor=>{
                            let requiredDoctorData={}
                            Object.assign(requiredDoctorData,{
                                'Full Name': doctor.doctorName,
                                'Speciality':doctor.speciality,
                                'MCI Number': doctor.MCINumber,
                                'Location': doctor.location,
                                'Type': doctor.type
                            })
                            doctorArray.push(requiredDoctorData)
                        })
                    }
                })
            })
            setTableData(doctorArray)
        })
    },[])
    const handleEditSave=(userId,email,password,phone,description)=>{
        setAdminId(userId)
        setAdminEmail(email)
        setAdminPassword(password)
        setAdminPhone(phone)
        setAdminDescription(description)
       }
    
    return(
        <div>
            <div className="admin-details">
                <span id="manage-admins">MANAGE ADMINS> </span>
                <span id="admin-user">{adminName}</span>
            </div>
            <AdminDetailsComponent handleEditSave={handleEditSave} adminName={adminName} adminId={adminId} adminDescription={adminDescription} adminEmail={adminEmail} adminPhone={adminPhone} adminDoctorCount={adminDoctorCount} adminPassword={adminPassword}></AdminDetailsComponent>
            <Pagination tableData={tableData}></Pagination>
            
        </div>

    )
}
export default AdminComponent