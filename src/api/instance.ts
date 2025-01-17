import axios from "axios";
import { API_BASE_URL, CLIENT_ID, FORMAT } from "./api_constants";
const instance = axios.create({
    baseURL: API_BASE_URL,
    params: {
        client_id: CLIENT_ID,
        format: FORMAT,
    }

});


// instance.interceptors.request.use((config:InternalAxiosRequestConfig) => {
//     // Add your own logic here
//     config.params = {
        
//         limit: 10,
//         lang: 'ru',
//         fuzzytags: '',
        
//     }
//     config.headers.Authorization = `Bearer ${localStorage.getItem('Bearer')}`;
//     return config;
// }) 

export default instance;