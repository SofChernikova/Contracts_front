import axios from "axios";

const REG = "http://localhost:8080/registration"

class RegistrationService{
    registration(companyName, inn, ogrn, surname, name, lastname, email, password){
        let form = {
            companyName: companyName,
            inn: inn,
            ogrn: ogrn,
            surname: surname,
            name: name,
            lastname: lastname,
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

export default new RegistrationService();