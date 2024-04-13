// react tools 
import { useState, useEffect } from "react";
// react router dom 
import {useNavigate,useLocation} from "react-router-dom";
// API 
import API,{setAccessWhen401} from "../../authentication/auth";
// react reveal 
import {Fade} from "react-awesome-reveal";





const AddContactPopUp = () => {

    const [user, setUser] = useState("");
    const navigate = useNavigate();
    const [result ,setResult] = useState([]);
    const location = useLocation() ;

    useEffect(() => {

        API.get("/user/list/").then((response) => {
            setResult(response.data.filter((item) => {
                return item.phone.includes(user);
            }))
        }).catch((error) => {
            if(error.response.status === 401){
                setAccessWhen401(navigate,location.pathname);
            }
        })
    }, [user])
    return (
        <Fade duration={300}>
            <div className="popup">
                <p className="popup-title">افزودن مخاطب</p>
                <input onChange={(e) => setUser(e.target.value)} className="popup-input" type="text" placeholder="شماره مخاطب " />
                <div className="popup-results">
                    {
                        result.map((item,index) => {
                            return (
                                <div key={index} className="popup-result">
                                    <p>{item.phone}</p>
                                    <button>افزودن به مخاطبین</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Fade>
    )
};export default AddContactPopUp;