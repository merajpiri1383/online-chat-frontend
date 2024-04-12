// animation  
import { Slide } from "react-awesome-reveal";
// close pannel 
import { closePannel } from "../../reducers/background";
// style 
import "../../static/auth/auth.css";
// react redux 
import { useSelector, useDispatch } from "react-redux";
// logo 
import Logo from "../../static/logo/1711737127-duNm.svg";
// icons 
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
// react router dom 
import { Link ,useNavigate} from "react-router-dom";
// API 
import API from "../../authentication/auth";
import { useState } from "react";
// react toastify 
import { toast } from "react-toastify";
// change user 
import {changeUser} from "../../reducers/user";




const ForgetPassword = () => {

    const dispatch = useDispatch();
    const [phone,setPhone] = useState("");
    const navigate = useNavigate() ;
    


    const sendData = async () => {
        await API.post("/auth/password/forget/",{"phone":phone}).then((response) => {
            toast.success(`کد تایید ارسال شد`);
            dispatch(changeUser({"phone":phone,"is_forget_password":true}));
            navigate("/activate")
        }).catch((error)=>{
            toast.error(error.response.data[Object.keys(error.response.data)[0]]);
        })
    };

    const submitHandeler = (e) =>{
        e.preventDefault();
        console.log("submit")
        sendData();
    };

    return (
        <Slide duration={300}>
            <div className="login outlet" onClick={() => dispatch(closePannel())}>
                <div className="login-logo">
                    <img src={Logo} />
                </div>
                <div className="login-info">
                    <h2>پیام رسان ایمن و سریع</h2>
                    <p>.برای استفاده  ثبت نام کنید </p>
                </div>
                <form className="login-form" onSubmit={submitHandeler}>
                    <div className="login-form-group">
                        <label className="login-form-group-label">شماره همراه</label>
                        <input type="text" className="login-form-group-input" required 
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="لطفا شماره همراه خود را وارد کنید" />
                    </div>
                    <div className="form-buttons">
                        <button>
                            <Link to={"/login"}>ورود به سایت</Link>
                        </button>
                        <button className="form-buttons-register" type="submit">
                            ارسال کد تایید
                        </button>
                    </div>
                    <p className="form-caption">یا ورود با</p>
                    <div className="form-socials">
                        <FaFacebook className="icon-pannel" />
                        <AiFillGoogleCircle className="icon-pannel" />
                        <FaTwitter className="icon-pannel" />
                        <FaApple className="icon-pannel" />
                    </div>
                    <p className="form-caption">*شرایط و قوانین استفاده&سیاست حریم خصوصی</p>
                </form>
            </div>
        </Slide>
    )
}; export default ForgetPassword;