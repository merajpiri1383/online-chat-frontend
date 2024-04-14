import axios from 'axios';
import Cookies from "js-cookie";

const API = axios.create({
    baseURL : "http://localhost:8000/",
});


const setToken = (access,refresh=null) => {
    Cookies.set("access",access,{expires:1,secure:true,sameSite:true});
    API.defaults.headers.common.Authorization = `Bearer ${access}`; 
    if(refresh) {
        Cookies.set("refresh",refresh,{expires:8,secure:true,sameSite:null});
    }
};
const clearToken = ()=> {
    Cookies.remove("access");
    Cookies.remove("refresh");
}

// API.defaults.withCredentials = true ;

API.interceptors.request.use((config) => {
    if(Cookies.get("access")){
        config.headers.Authorization = `Bearer ${Cookies.get("access")}`
    }
    return config
})

// handling 401 error 
const setAccessWhen401 =  (navigate,path) => {
    if(Cookies.get('refresh')){
        API.post("/auth/token/refresh/",{ "refresh" : Cookies.get( "refresh" )}).then( ( response ) => {
            setToken(response.data.access);
            navigate(path);
        } ).catch((error) => {
            clearToken();
            navigate("/login");
        })
    }
};


export default API ;export {setToken,clearToken,setAccessWhen401};
