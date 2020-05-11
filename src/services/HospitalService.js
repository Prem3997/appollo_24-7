import axios from 'axios'

class HospitalService {
        getSuperAdmin(){
            return axios.get('http://localhost:3001/superAdmin')
        }
}

export default new HospitalService()
