import React ,{useState,useEffect} from 'react'
import '../../styles/dashboard-styles.scss' 
import CardComponent from './CardComponent'
import DashboardDataService from '../../services/DashboardDataService'
import {useHistory} from 'react-router-dom';
function Dashboard(){
    const history=useHistory();
    let [onlineDoctorsCount,setOnlineDoctorsCount]=useState(0)
    let [offlineDoctorsCount,setOfflineDoctorsCount]=useState(0)
    let [onConsultDoctorsCount,setOnConsultDoctorsCount]=useState(0) 
    let [adminCount,setAdminCount]=useState(0)
    let [doctorCount,setDoctorCount]=useState(0)
    useEffect(()=>{
        DashboardDataService.getSuperAdminDetails().then(res =>{
            countDoctors(res.data)
        })
    },[])
    const handleClick=()=>{
        history.push(`/createAdmin`);

    }
    const countDoctors=(data)=>{
        /* console.log(data) */
        data.map((superAdmin)=>{
            /* console.log(superAdmin) */
            superAdmin.admin.map((admin)=>{
                /* console.log(admin) */
                adminCount+=1
                /* console.log(adminCount) */
                admin.doctors.map((doctor)=>{
                    doctorCount+=1
                    /* console.log(doctor.status) */
                    if(doctor.status==='online'){
                        onlineDoctorsCount=onlineDoctorsCount+1 
                    }
                    if(doctor.status==='offline'){
                        offlineDoctorsCount=offlineDoctorsCount+1
                    }
                    if(doctor.status==='on consult'){
                        onConsultDoctorsCount+=1
                    } 
                })
            })
        })
        setOnlineDoctorsCount(onlineDoctorsCount)
        setOfflineDoctorsCount(offlineDoctorsCount)
        setOnConsultDoctorsCount(onConsultDoctorsCount)
        setAdminCount(adminCount)
        setDoctorCount(doctorCount)
    }
    return(

        <div>

            <div id='dashboard'>
                <span id="user">Welcome, JohnVincent</span>
                <span id="quickLink">Quick Links: <button id='addNewAdmin' onClick={handleClick}><span id="addNewAdminText">ADD NEW ADMIN</span></button></span> 
            </div>
            
            <div id="cardComponent">
                <CardComponent imgName="AdminsCardComponent" name="Admins" count={adminCount}></CardComponent>
                <CardComponent imgName="Doctor'sAdminCardComponent" name="Doctors" count={doctorCount}></CardComponent>
            </div>
            <p id="doctorStatus">Doctor's Status</p>
            <div id="cardComponent">
                <CardComponent imgName="OnlineDoctorStatusCardComponent" name="Online" count={onlineDoctorsCount}></CardComponent>
                <CardComponent imgName="OnConsultDoctorStatusCardComponent" name="On Consult" count={onConsultDoctorsCount}></CardComponent>
                <CardComponent imgName="OfflineDoctorStatusCardComponent" name="Offline" count={offlineDoctorsCount}></CardComponent>
            </div>
        </div>
    )
}

export default Dashboard