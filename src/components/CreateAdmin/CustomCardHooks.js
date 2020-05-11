import React, { useState, useEffect } from "react";
import CardService from "../../services/CardService";
import "../CreateAdmin/styles-add-admin/DoctorComponent.css"
import {useHistory} from 'react-router-dom';



function CustomCardHooks() {
  const [doctors, setDoctors] = useState([]);
  const history=useHistory();  
  const [doctorsTemp2, setDoctorsTemp2] = useState([]);
  const [doctorsTemp, setDoctorsTemp] = useState([]);
  const [arrayTemp, setArrayTemp] = useState([]);
  
  const [addTemp, setAddTemp] = useState([]);
  const [doctorsToBeAdded, setDoctorsToBeAdded] = useState([]);
  
  const [checkedItems, setCheckedItems] = useState(new Map());
  const [doctorId, setDoctorId] = useState(0);
  const [doctorName, setDoctorName] = useState("");
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  

  useEffect(() => {
    CardService.getDoctors().then(response => {
      setDoctors(response.data);
      setDoctorsTemp(response.data)
      console.log(doctors);
    });
    console.log("useeffect called")
    
  },[]);

  const selectAll1=(e)=>{
    const isChecked = e.target.checked;
    setChecked1(isChecked)
    
    
    doctors.map(doctors=>{
      setCheckedItems(checkedItems.set(doctors.doctorName, isChecked));
    })
  }
  const selectAll2=(e)=>{
    
    const isChecked = e.target.checked;
    setChecked2(isChecked)
    doctorsToBeAdded.map(doctors=>{
      setCheckedItems(checkedItems.set(doctors.doctorName, isChecked));
    })
  }

  const filterDoctors = event => {
    const filteredDoctors = doctorsTemp.filter(doctors => {
      return (
        doctors.doctorName
          .toLowerCase()
          .indexOf(event.target.value.toLowerCase()) !== -1
      );
    });
    setDoctors(filteredDoctors);
  };
 const createAdmin=()=>{
  history.push(`/admin/2`)

 }
  const filterDoctors2 = event => {
    
    const filteredDoctors = doctorsTemp2.filter(doctors => {
      return (
        doctors.doctorName
          .toLowerCase()
          .indexOf(event.target.value.toLowerCase()) !== -1
      );
    });
    setDoctorsToBeAdded(filteredDoctors);
    

  };
  const handleChange = e => {
    

    const isChecked = e.target.checked;
    setDoctorId(e.target.id);

    setDoctorName(e.target.name);

    setCheckedItems(checkedItems.set(e.target.name, isChecked));
    
  };
  const handleChange2=(e)=>{
    CardService.getDoctor(e.target.id).then(response => {
        setArrayTemp([response.data, ...arrayTemp]);
      });
  
      const isChecked = e.target.checked;
      const checked={checked:isChecked}
     
      setDoctorId(e.target.id);

      console.log()
      setDoctorName(e.target.name);
  
      setCheckedItems(checkedItems.set(e.target.name, isChecked));

  }


  const handleClick = () => {
    let tempArray=doctors

    let temp=[]
    doctors.map(response=>{

        if(checkedItems.get(response.doctorName)===true){
          temp=[response,...temp]
          tempArray=tempArray.filter(
            item=>item.doctorName!==response.doctorName
          );
        //  delete tempArray[tempArray.indexOf(response)]
       }

    setCheckedItems(checkedItems.set(response.doctorName,false))
    setChecked1(false)
    })
    setDoctors(tempArray);

    let tempFinal=doctorsToBeAdded
    temp.map(response=>{
      tempFinal=[...tempFinal,response]
    })
    setDoctorsToBeAdded(tempFinal)
    setDoctorsTemp2(tempFinal)
    
  };
  const handleRemove=()=>{
    console.log(doctors)
    
      let tempArray=doctorsToBeAdded;
      let temp=[]
console.log(tempArray)
      doctorsToBeAdded.map(response=>{
        if(checkedItems.get(response.doctorName)===true){
          console.log("value of temp")
          
          temp=[response,...temp]
          console.log(temp)
          tempArray=tempArray.filter(
            item=>item.doctorName!==response.doctorName
          );
        //  delete tempArray[tempArray.indexOf(response)]
         console.log("Value of temp array is")
         console.log(tempArray)
       }
   
      setCheckedItems(checkedItems.set(response.doctorName,false))
      setChecked2(false)
    })

    setDoctorsToBeAdded(tempArray);
  console.log("value of temp is ")
  console.log(temp)
    let tempFinal=doctors
    temp.map(response=>{
      tempFinal=[...tempFinal,response]
    })
    console.log(tempFinal)
    setDoctors(tempFinal)


   
  }

  

  return (
    <div className="mainDiv">
      <div className="available-doctors">Available Doctors  
    <span className="select1">  <Checkbox 
                  
                  checked={checked1}
                  onChange={selectAll1}
                /> Select All </span> </div>
      <div className="leftCard">
        <input
          placeholder="Search"
          className="filterCss"
          onChange={filterDoctors}
        ></input>
        <div className="cardCss">
          <ul>
            {doctors.map((doctor, index) => (
              <div key={index}>
                <Checkbox
                  id={doctor.id}
                  name={doctor.doctorName}
                  checked={checkedItems.get(doctor.doctorName)}
                  onChange={handleChange}
                />
                <span className="cardFont" style={{ paddingLeft: 30 }}>
                  {doctor.doctorName}
                </span>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <button type="button" id="buttonCss" onClick={() => handleClick()}>
        ADD >>
      </button>
      <button type="button" id="removeCss" onClick={() => handleRemove()}>
        REMOVE
      </button>

      {/* Right card */}
      <div className="leftCard">
      
        <input
          placeholder="Search"
          className="filterCss"
          onChange={filterDoctors2}
        ></input>

<div className="added-doctors">Added Doctors  
    <span className="select2">  <Checkbox 
                  
                  checked={checked2}
                  onChange={selectAll2}
                /> Select All </span> </div>
        
        <div className="cardCss">
          <ul>
            {doctorsToBeAdded.map((doctor, index) => (
              <div key={index}>
                <Checkbox
                  id={doctor.id}
                  name={doctor.doctorName}
                  checked={checkedItems.get(doctor.doctorName)}
                  onChange={handleChange2}
                />
                <span className="cardFont" style={{ paddingLeft: 30 }}>
                  {doctor.doctorName}
                </span>
              </div>
            ))}
          </ul>
          
        </div>
        <div className="buttons2">
        <button type="submit" className="create_admin_button" onClick={createAdmin}>CREATE ADMIN</button>
        <button type="button" className="cancel_button">CANCEL</button>
        </div>
      </div>
     
    </div>
  );
}
const Checkbox = ({
  type = "checkbox",
  name,
  id,
  checked = false,
  onChange
}) => (
  <input
    type={type}
    id={id}
    name={name}
    checked={checked}
    onChange={onChange}
  />
);
export default CustomCardHooks;
