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
import { Link,useNavigate } from "react-router-dom";
// API 
import API from "../../authentication/auth";
import {  useState } from "react";
// react toastify 
import { toast} from "react-toastify";
// set token in cookie 
import { setToken } from "../../authentication/auth";
// change user state
import { changeUser } from "../../reducers/user";



const Activation = () => {
    const user = useSelector((state)=> state.user);
    const dispatch = useDispatch();
    const [info,setInfo] = useState({});
    const form = new FormData() ;
    const navigate = useNavigate();

    const sendData = async (data) => {
        await API.post("/auth/verify/",data).then((response) => {
            user.is_forget_password ? toast.success(`رمز عبور خود را تغییر دهید  `) : toast.success(`شماره شما فعال شد `)
            setToken(response.data.access_token,response.data.refresh_token);
            dispatch(changeUser({"islogin":true,"is_forget_password":false}))
            user.is_forget_password ? navigate("/password/reset") : navigate("/activate");


        }).catch((error) => {
            if(error.response.status === 400){
                console.log(user)
                console.log(error.response.data)
                toast.error(error.response.data[Object.keys(error.response.data)[0]])
            }
        })
    }
    const submitHandeler = (e) => {
        e.preventDefault();
        console.log(info.code)
        form.append("otp",info.code);
        form.append("phone",user.phone);
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
                        <label className="login-form-group-label">کد تایید</label>
                        <input type="text" className="login-form-group-input"
                        required onChange={(e)=> setInfo(Object.assign(info,{code:e.target.value}))}
                        placeholder="لطفا کد تایید را وارد کنید " />
                    </div>
                    <div className="form-buttons">
                        <button>
                            <Link to={"/login"}>ورود به سایت</Link>
                        </button>
                        <button className="form-buttons-register" type="submit">
                            {
                                user.is_forget_password ? "بازیابی رمز عبور" : "فعال کردن شماره"
                            }
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
}; export default Activation;