import React, { Component } from 'react';
import axios from 'axios'
const   DOCTOR_AP_URL='http://localhost:3001/availableDoctors';
class CardService extends Component {
   
    getDoctors(){
        return axios.get(`${DOCTOR_AP_URL}`)
    }
    getDoctor(docID){
        return axios.get(`${DOCTOR_AP_URL}/${docID}`)
    }
    
    
}

export default new CardService;