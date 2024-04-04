// animation  
import { Slide } from "react-awesome-reveal";
// close pannel 
import { closePannel } from "../../reducers/background";
// style 
import "../../static/login/login.css";
// react redux 
import { useSelector, useDispatch } from "react-redux";
// logo 
import Logo from "../../static/logo/1711737127-duNm.svg";
// icons 
import { FaFacebook } from "react-icons/fa";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
const Login = () => {
    const dispatch = useDispatch();
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
                <form className="login-form">
                    <div className="login-form-group">
                        <label className="login-form-group-label">شماره همراه</label>
                        <input type="text" className="login-form-group-input" placeholder="لطفا شماره همراه خود را وارد کنید" />
                    </div>
                    <div className="login-form-group">
                        <label className="login-form-group-label">رمز ورود</label>
                        <input type="text" className="login-form-group-input" placeholder="لطفا رمز ورود خود را وارد کنید" />
                    </div>
                    <div className="login-form-caption">
                        <div>
                            <input type="checkbox" />
                            <p>مرا به خاطر بسپار</p>
                        </div>
                        <a>
                            فراموشی رمز ورود
                        </a>
                    </div>
                    <div className="form-buttons">
                        <button>ورود به سایت</button>
                        <button>ثبت نام</button>
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