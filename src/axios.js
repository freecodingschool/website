import axios from 'axios'

const HTTP = axios.create({
    baseURL: 'http://localhost:4044/api',
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