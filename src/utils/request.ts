import axios from 'axios';

let request = axios.create({
    baseURL: 'http://localhost:3555/api'
})

export default request;