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
import { Link } from "react-router-dom";
const ForgetPassword = () => {
    const dispatch = useDispatch();
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
                <form className="login-form">
                    <div className="login-form-group">
                        <label className="login-form-group-label">شماره همراه</label>
                        <input type="text" className="login-form-group-input" placeholder="لطفا شماره همراه خود را وارد کنید" />
                    </div>
                    <div className="form-buttons">
                        <button>
                            <Link to={"/login"}>ورود به سایت</Link>
                        </button>
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
}; export default ForgetPassword;