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
import { Link , useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../../authentication/auth";
// cookie 
import { setToken,clearToken } from "../../authentication/auth";
// react toastify 
import { toast } from "react-toastify";
// change state user 
import { changeUser } from "../../reducers/user";



const Login = () => {

    const dispatch = useDispatch();
    const [info,setInfo] = useState({});
    const form = new FormData();
    const navigate = useNavigate();
    

    const sendData = async (data) => {
        await API.post("/auth/login/",data).then(
            (response) => {
                const d = response.data.user.profile
                setToken(response.data.access_token,response.data.refresh_token) ;
                dispatch(changeUser({"islogin":true,...response.data.user,email:d.email,image:d.image,id:d.id,username:d.username}));
                toast.success("شما با موفقیت وارد شدید ");
                navigate("/")
            },
        ).catch((error) => {
            toast.error(error.response.data[Object.keys(error.response.data)[0]]);
        })
    }


    const submitHandeler = (e) => {
        clearToken();
        e.preventDefault();
        form.append("phone",info.phone);
        form.append("password",info.password);
        sendData(form)
    }


    return (
        <Slide duration={300}>
            <div className="login outlet" onClick={() => dispatch(closePannel())}>
                <div className="login-logo">
                    <img src={Logo} />
                </div>
                <div className="login-info">
                    <h2>پیام رسان ایمن و سریع</h2>
                    <p>.برای استفاده وارد حساب کاربری خود شوید</p>
                </div>
                <form className="login-form" method="post" onSubmit={submitHandeler}>
                    <div className="login-form-group">
                        <label className="login-form-group-label">شماره همراه</label>
                        <input type="number" min={0} className="login-form-group-input" required max={9999999999}
                        onChange={(e) => setInfo(Object.assign(info,{phone:e.target.value}))}
                        placeholder="لطفا شماره همراه خود را وارد کنید" />
                    </div>
                    <div className="login-form-group">
                        <label className="login-form-group-label">رمز ورود</label>
                        <input type="password" className="login-form-group-input" required
                        onChange={(e) => setInfo(Object.assign(info,{password:e.target.value}))}
                        placeholder="لطفا رمز ورود خود را وارد کنید" />
                    </div>
                    <div className="login-form-caption">
                        <div>
                            <input type="checkbox" />
                            <p>مرا به خاطر بسپار</p>
                        </div>
                        <Link to={"/password/forget"}> فراموشی رمز ورود</Link>
                    </div>
                    <div className="form-buttons">
                        <button type="submit">ورود به سایت</button>
                        <button className="form-buttons-register">
                            <Link to={"/register"}>ثبت نام</Link>
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
}; export default Login;