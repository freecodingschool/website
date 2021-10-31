import axios from 'axios'
import baseURL from './config';
const HTTP = axios.create({
    baseURL: baseURL+ 'api', 
    headers: {
        'Content-Type': 'application/json'
    },
})
HTTP.interceptors.request.use(function (config) {
    const token = localStorage.getItem('_ut');
    if (token)
     config.headers.authtoken =  token;
    return config;
});

export default HTTP;