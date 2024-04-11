import axios from 'axios';
import Cookies from "js-cookie";
const setToken = (access,refresh=null) => {
    Cookies.set("access",access,{expires:7,secure:true,sameSite:true});
    if(refresh) {
        Cookies.set("refresh",refresh,{expires:14,secure:true,sameSite:true});
    }
};
const API = axios.create({
    baseURL : "http://localhost:8000/",
});
// API.defaults.withCredentials = true ;

API.interceptors.request.use((config) => {
    console.log("pre request")
    if(Cookies.get("access")){
        config.headers.Authorization = `Bearer ${Cookies.get("access")}`
    }
    return config
})
export default API ;export {setToken};