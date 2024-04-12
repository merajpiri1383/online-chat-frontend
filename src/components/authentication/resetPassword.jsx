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
// API 
import API from "../../authentication/auth";
import { useState } from "react";
// react toastify 
import { toast} from "react-toastify";





const ResetPassword = () => {

    const dispatch = useDispatch();
    const [password,setPassword] = useState("");
    const [confirmPassword,setComnfirmPassword] = useState("")
    const navigate = useNavigate() ;

    const sendData = async () => {
        await API.put("/auth/password/reset/",{"password":password,"confirm_password":confirmPassword}).then((response)=>{
            toast.success("رمز عبور شما تغییر کرد ")
            navigate("/")
        }).catch((error)=> toast.error(error.response.data[Object.keys(error.response.data)[0]][0]))
    }

    const submitHandeler = (e) => {
        e.preventDefault() ; 
        sendData();
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
                <form className="login-form" onSubmit={submitHandeler}>
                    <div className="login-form-group">
                        <label className="login-form-group-label">رمز ورود</label>
                        <input type="password" className="login-form-group-input" required
                        onChange={ ( e ) => setPassword( e.target.value ) }
                        placeholder="لطفا رمز ورود خود را وارد کنید" />
                    </div>
                    <div className="login-form-group">
                        <label className="login-form-group-label">تکرار رمز ورود</label>
                        <input type="password" className="login-form-group-input" required
                        onChange={ ( e )=> setComnfirmPassword( e.target.value ) }
                        placeholder="لطفا تکرار رمز عبور را وارد کنید " />
                    </div>
                    <div className="form-buttons">
                        <button>
                            <Link to={"/login"}>ورود به سایت</Link>
                        </button>
                        <button type="submit" className="form-buttons-register">
                            تغییر رمز عبور
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
}; export default ResetPassword;