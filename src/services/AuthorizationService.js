import axios from "axios";

const REG = "http://localhost:8080/authorization"

class AuthorizationService{
    authorization(email, password){
        let form = {
            email: email,
            password: password
        }
        let opt = {
            headers: {
                'Content-Type': 'application/json',
                'charset': 'UTF-8'
            }
        }
        return axios.post(REG, JSON.stringify(form), opt);
    }
}

export default new AuthorizationService();