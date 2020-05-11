import axios from 'axios'

class DashboardDataService {
    getSuperAdminDetails(){
        return axios.get(`http://localhost:3001/superAdmin`)
    }
}

export default new DashboardDataService()