// animation  
import { Slide } from "react-awesome-reveal";
// reducers 
import { closePannel } from "../../reducers/background";
import { changeUser } from "../../reducers/user";
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
import {  useState } from "react";
// react toastify 
import { toast} from "react-toastify";
const Register = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [info,setInfo] = useState({});
    const navigate = useNavigate();
    const form = new FormData() ;
    const sendData = async (data) => {
        await API.post("/auth/register/",data).then((response) => {
            toast.success(`کد تایید ارسال شد`)
            dispatch(changeUser({"phone":info.phone}));
            navigate("/activate");
        }).catch((error) => {
            if(error.response.status === 400){
                toast.error(error.response.data[Object.keys(error.response.data)[0]][0])
            }
        })
    }
    const submitHandeler = (e) => {
        e.preventDefault();
        form.append("phone",info.phone);
        form.append("password",info.password);
        form.append("confirm_password",info.confirm_password);
        sendData(form);
    }
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
                <form className="login-form" method="post" onSubmit={submitHandeler}>
                    <div className="login-form-group">
                        <label className="login-form-group-label">شماره همراه</label>
                        <input type="text" className="login-form-group-input"
                        required onChange={(e)=> setInfo(Object.assign(info,{phone:e.target.value}))}
                        placeholder="لطفا شماره همراه خود را وارد کنید" />
                    </div>
                    <div className="login-form-group">
                        <label className="login-form-group-label">رمز ورود</label>
                        <input type="password" className="login-form-group-input" 
                        required onChange={(e)=> setInfo(Object.assign(info,{password:e.target.value}))}
                        placeholder="لطفا رمز ورود خود را وارد کنید" />
                    </div>
                    <div className="login-form-group">
                        <label className="login-form-group-label">تکرار رمز ورود</label>
                        <input type="password" className="login-form-group-input" 
                        required onChange={(e)=> setInfo(Object.assign(info,{confirm_password:e.target.value}))}
                        placeholder="لطفا تکرار رمز عبور را وارد کنید " />
                    </div>
                    <div className="form-buttons">
                        <button>
                            <Link to={"/login"}>ورود به سایت</Link>
                        </button>
                        <button className="form-buttons-register" type="submit">
                            ثبت نام
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
}; export default Register;