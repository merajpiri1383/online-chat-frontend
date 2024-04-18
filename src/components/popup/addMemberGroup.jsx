// react tools 
import { useState, useEffect } from "react";
// react router dom 
import { useNavigate, useLocation } from "react-router-dom";
// API 
import API, { setAccessWhen401 ,getCurrentUser} from "../../authentication/auth";
// react reveal 
import { Fade, Slide } from "react-awesome-reveal";
// react toastify 
import { toast } from "react-toastify";
import { useSelector } from "react-redux";




const AddMemeberGroup = ({state}) => {
    
    const navigate = useNavigate(); 
    const location = useLocation();
    const [currentUser,setCurrentUser] = useState({});
    const [results,setResults] = useState([]);
    const [phone,setPhone] = useState("");
    const group = useSelector((state) => state.group);


    const getListUser = async () => {
        await API.get("/user/list/").then((response) => {
            const users =  response.data.filter((user) => {
                return user.phone !== currentUser.phone && user.phone.includes(phone) ;
            });
            setResults(users);
        }).catch((error)=>{
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
            } catch (error) {
                console.log(error.response.data)
            }
        })
    };

    const AddGroup = async (user) => {
        await API.post("/group/user/change/",{"group":group.id,"phone":user.phone}).then( ( response ) => { 
            toast.success("کاربر به گروه اضافه شد")
        }).catch( (error) => {
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
            } catch (error) {
                console.log(error.response.data)
            }
        })
    }

    useEffect(() => {
        getCurrentUser(setCurrentUser,navigate,location);
    },[]);

    useEffect(() => {
        getListUser();
    },[phone,currentUser]);

    
    return (
        <div className={state ? "popup-show" : "popup-hide"}>
            <form className={`popup-form`}>
            <input type="number" className="popup-input" onChange={(e)=> setPhone(e.target.value)} placeholder="شماره کاربر" />
        </form>
        <div className="popup-results">
            {
                results && results.map((result,index) =>{
                    return (
                        <div className="popup-result" key={index} onClick={() => AddGroup(result)}>
                            <p>{result.phone}</p>
                            <button>افزودن به گروه</button>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
};export default AddMemeberGroup ; 