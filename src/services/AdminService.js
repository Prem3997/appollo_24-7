import axios from 'axios';

class UserService {
  getAdmin() {
    return axios.get('http://localhost:3001/superAdmin');
  }
}
export default new UserService();
