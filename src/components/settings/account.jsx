// icon
import { FaAngleLeft } from "react-icons/fa";
// change current component
import { changeCurrent } from "../../reducers/settings";
import { useDispatch, useSelector } from "react-redux";
// react reveal 
import { Slide } from "react-awesome-reveal";
// API 
import API, { setAccessWhen401 } from "../../authentication/auth";
import { useEffect, useState } from "react";
// react router dom 
import { useNavigate,useLocation } from "react-router-dom";
// toast 
import { toast } from "react-toastify";



const Account = () => {
    const dispatch = useDispatch();
    const form = new FormData();
    const [user,setUser] = useState({});
    const navigate = useNavigate() ; 
    const location = useLocation() ;

    const getData = async (data) => {
        await API.get("/profile/",data).then((response) => {
            setUser({...response.data,...response.data.profile})
        }).catch((error) => {
            try{
                if(error.response.status === 401) {
                    setAccessWhen401(navigate,location.pathname)
                }
            }catch(error){}
        })
    }

    const senddata = async (data) => {
        await API.put("/profile/", data).then((response) => {
            setUser({...response.data})
            toast.success("تغییرات با موفقیت دخیره شد")
        }).catch((error) => {
            try{
                if(error.response.status === 401) {
                    setAccessWhen401(navigate,location.pathname)
                }
            }catch(error){console.log(error)}
        })
    }

    const formSubmit = (event) => {
        event.preventDefault();
        senddata(form);
    };

    useEffect(() => {
        getData();
    },[])

    return (
        <Slide duration={300} direction="left">
            <div className="settings-info">
                <div onClick={() => dispatch(changeCurrent("none"))}>
                    <FaAngleLeft className="icon-pannel" />
                </div>
                <h3>حساب کاربری</h3>
            </div>
            <form className="settings-content" method="post" onSubmit={formSubmit}>

                <div className="settings-group">
                    <label className="settings-label">تغییر پروفایل</label>
                    <input className="settings-input" type="file"
                    onChange={(e) => form.append("image", e.target.files[0])} />
                </div>

                <div className="settings-group">
                    <label className="settings-label">تغییر نام کاربری</label>
                    <input className="settings-input" type="text" accept="image/*"
                    placeholder={user.username ? user.username : "نام کاربری"}
                    onChange={(e) => form.append("username", e.target.value)}  />
                </div>

                <div className="settings-group">
                    <label className="settings-label">تغییر ایمیل</label>
                    <input className="settings-input" type="email" 
                    placeholder={user.email ? user.email : "ایمیل"}
                    onChange={(e) => form.append("email", e.target.value)} />
                </div>
                <button className="settings-button" type="submit">ذخیره</button>
            </form>
        </Slide>
    )
}; export default Account;