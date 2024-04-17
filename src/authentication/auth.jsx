import axios from 'axios';
import Cookies from "js-cookie";
import { changePage,changeShowPannel } from '../reducers/page';


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
const setAccessWhen401 =  (navigate,path,dispatch=null) => {
    console.log("setAccessWhen401 working ")
    if(Cookies.get('refresh')){
        API.post("/auth/token/refresh/",{ "refresh" : Cookies.get( "refresh" )}).then( ( response ) => {
            setToken(response.data.access);
            if (dispatch){
                window.screen.width > 992 ? dispatch(changePage("chat")) : dispatch(changePage("none"))
                dispatch(changeShowPannel(true));
            }
            navigate(path);
        } ).catch((error) => {
            clearToken();
            delete API.defaults.headers.common.Authorization;
            if (dispatch){
                window.screen.width > 992 ? dispatch(changePage("auth")) : dispatch(changePage("none"))
                dispatch(changeShowPannel(true));
            }
            navigate("/login");
        })
    }navigate("/login")
};

// get current user 
const getCurrentUser = async (setCurrentUser,navigate,location) => {
    await API.get("/profile/").then((response) => {
        setCurrentUser({...response.data,...response.data.profile});
    }).catch((error) => {
        try {
            if (error.response.status === 401) {
                setAccessWhen401(navigate, location.pathname);
            }
        } catch { }
    })
};

const getChats = async (setState,navigate,location) => {
        await API.get("/chat/").then((response) => {
            setState(response.data);
        }).catch((error) => {
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
            } catch { }
        })
    };


export default API ;export {setToken,clearToken,setAccessWhen401,getCurrentUser,getChats};
