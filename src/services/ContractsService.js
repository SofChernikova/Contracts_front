import axios from "axios";

const BASE = "http://localhost:8080/contracts"

class ContractsService {
    getAll(id) {
        return axios.get(BASE + '/' + id);
    }

    getById(id, num) {
        return axios.get(BASE + '/' + id + '/' + num);
    }

    create(id, contractName, initiator, defendant, description,
           conclusionDate, expirationDate) {
        let form = {
            name: contractName,
            initiator: initiator,
            defendant: defendant,
            description: description,
            conclusionDate: conclusionDate,
            expirationDate: expirationDate
        }
        let opt = {
            headers: {
                'Content-Type': 'application/json',
                'charset': 'UTF-8'
            }
        }
        return axios.post(BASE + '/' + id + '/create', JSON.stringify(form), opt);
    }

    edit(id, num, contractName, initiator, defendant, description,
         conclusionDate, expirationDate) {
        let form = {
            name: contractName,
            initiator: initiator,
            defendant: defendant,
            description: description,
            conclusionDate: conclusionDate,
            expirationDate: expirationDate
        }
        let opt = {
            headers: {
                'Content-Type': 'application/json',
                'charset': 'UTF-8'
            }
        }
        return axios.post(BASE + '/' + id + '/' + num, JSON.stringify(form), opt);
    }

    delete(id, num) {
        return axios.delete(BASE + '/' + id + '/' + num)
    }

}

export default new ContractsService();