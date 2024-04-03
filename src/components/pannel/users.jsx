// style
import "../../static/pannel-apps/contact.css";
// icons 
import { IoIosSearch } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";
// dark mode 
import { useSelector, useDispatch } from "react-redux";
// react router dom 
import { Link } from "react-router-dom";
// img 
import Image from "../../images/b-314.jpg";
import { changeApp } from "../../reducers/pannel";
// animation 
import { Slide } from "react-awesome-reveal";
const Users = () => {
    const mode = useSelector((state) => state.background.mode);
    const dispatch = useDispatch();
    return (
        <Slide direction="left" duration={300}>
            <div className="contact outlet">
                <div className="contact-info">
                    <div className="contact-info-icons">
                        <Link to={"/"} onClick={() => dispatch(changeApp("none"))} >
                            <div><CiCircleRemove className={"icon-pannel-link " + mode} /></div>
                        </Link>

                        <div><IoIosSearch className={"icon-pannel-link " + mode} /></div>
                    </div>
                    <div className={"contact-info-text " + mode}>
                        <h3>مخاطبین</h3>
                        <p>اینجا پیام رسانی کنید</p>
                    </div>
                </div>
                <div className="users">
                    <div className="user">
                        <div className="user-img">
                            <img src={Image} />
                        </div>
                        <div className="user-text">
                            <div className="user-text-top">
                                <h4 className={mode} >الهام جعفری</h4>
                                <p>1401/01/01</p>
                            </div>
                            <div className="user-text-middle">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            </div>
                            <div className="user-text-bottom seen">
                                دیده شده
                            </div>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-img">
                            <img src={Image} />
                        </div>
                        <div className="user-text">
                            <div className="user-text-top">
                                <h4 className={mode} >الهام جعفری</h4>
                                <p>1401/01/01</p>
                            </div>
                            <div className="user-text-middle">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            </div>
                            <div className="user-text-bottom">
                                در حال ارسال
                            </div>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-img">
                            <img src={Image} />
                        </div>
                        <div className="user-text">
                            <div className="user-text-top">
                                <h4 className={mode} >الهام جعفری</h4>
                                <p>1401/01/01</p>
                            </div>
                            <div className="user-text-middle">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            </div>
                            <div className="user-text-bottom fail">
                                ناموفق
                            </div>
                        </div>
                    </div>
                    <div className="user">
                        <div className="user-img">
                            <img src={Image} />
                        </div>
                        <div className="user-text">
                            <div className="user-text-top">
                                <h4 className={mode} >الهام جعفری</h4>
                                <p>1401/01/01</p>
                            </div>
                            <div className="user-text-middle">
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                            </div>
                            <div className="user-text-bottom seen">
                                دیده شده
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}; export default Users;