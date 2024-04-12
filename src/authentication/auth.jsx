import axios from 'axios';
import Cookies from "js-cookie";
const setToken = (access,refresh=null) => {
    Cookies.set("access",access,{expires:1,secure:true,sameSite:true});
    if(refresh) {
        Cookies.set("refresh",refresh,{expires:8,secure:true,sameSite:true});
    }
};
const clearToken = ()=> {
    Cookies.remove("access");
    Cookies.remove("refresh");
}
const API = axios.create({
    baseURL : "http://localhost:8000/",
});
// API.defaults.withCredentials = true ;

API.interceptors.request.use((config) => {
    // console.log(Cookies.get("access"))
    if(Cookies.get("access")){
        config.headers.Authorization = `Bearer ${Cookies.get("access")}`
    }
    if(Cookies.get("refresh") && !Cookies.get("access")){
        API.post("/auth/token/refresh/",{"refresh":Cookies.get("refresh")}).then(
            (response) => {
                console.log(response.data);
            }
        )
    }
    return config
})
export default API ;export {setToken,clearToken};