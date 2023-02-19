import axios from 'axios'


const URL = axios.create({
    baseURL: 'http://localhost:7000',
    headers: {
        'Content-type': 'application/json'
    }
})
const parameters = {
    state: 'Karnataka',
    region: 'East'
}

const DishApi = {
    getAll: () => {
        return URL.post('/dish/getall')
    }
}

export default DishApi