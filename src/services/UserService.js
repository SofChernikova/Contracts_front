import axios from "axios";

const REG = "http://localhost:8080/user"

class UserService{
    findById(id){
        return axios.get(REG + '/' + id);
    }
}

export default new UserService();