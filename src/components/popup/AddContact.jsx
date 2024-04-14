// react tools 
import { useState, useEffect } from "react";
// react router dom 
import { useNavigate, useLocation } from "react-router-dom";
// API 
import API, { setAccessWhen401 } from "../../authentication/auth";
// react reveal 
import { Fade, Slide } from "react-awesome-reveal";
// react toastify 
import { toast } from "react-toastify";
import { useSelector } from "react-redux";





const AddContactPopUp = () => {

    const [user, setUser] = useState("");
    const phone = useSelector((state) => state.user.phone) ;
    const navigate = useNavigate();
    const [result, setResult] = useState([]);
    const location = useLocation();

    const addContact = async (phone) => {

        await API.post("/user/contacts/",{"phone":phone}).then( (response) => {
            console.log(response.data)
            toast.success( phone + ` به مخاطبین افزوده شد  `)
        } ).catch( (error) => {
            console.log(error.response.data)
        } )

    } ;

    useEffect(() => {

        API.get("/user/list/").then((response) => {
            setResult(response.data.filter((item) => {
                return item.phone.includes(user) && item.phone !== phone ;
            }))
        }).catch((error) => {
            try{
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
            }catch(error){
                console.log(error.response.data)
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
                        result.map((user, index) => {
                            return (
                                <Slide duration={200} key={index}>
                                    <div className="popup-result">
                                        <p>{user.phone}</p>
                                        <button onClick={() => addContact(user.phone) }>افزودن به مخاطبین</button>
                                    </div>
                                </Slide>
                            )
                        })
                    }
                </div>
            </div>
        </Fade>
    )
}; export default AddContactPopUp;