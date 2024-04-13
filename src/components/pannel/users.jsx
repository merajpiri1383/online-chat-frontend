// style
import "../../static/pannel-apps/contact.css";
// icons 
import Multiple from "../../static/icons/multiple.svg";
import Search from "../../static/icons/search.svg";
import Plus from "../../static/icons/plus.svg";
// dark mode 
import { useSelector, useDispatch } from "react-redux";
// react router dom 
import { Link } from "react-router-dom";
// img 
import Image from "../../images/b-314.jpg";
import { changeApp } from "../../reducers/pannel";
// animation 
import { Slide, Fade } from "react-awesome-reveal";
// close pannel 
import { closePannel } from "../../reducers/background";
// react pop up 
import Popup from "reactjs-popup";
import { useEffect, useState } from "react";
import AddContactPopUp from "../popup/AddContact";
// API
import API from "../../authentication/auth";
// react router dom 
import { useNavigate } from "react-router-dom";





const SearchContact = () => {
    const [user, setUser] = useState("");
    const [contacts, setContacts] = useState([]);
    const navigate = useNavigate();
    

    useEffect(() => {
        API.get("/user/list/").then((response) => {
            // response.data.map((item) => {
            //     console.log(item.phone.includes(user));
            // })
        }).catch((error) => {
            try {
                if (error.response.status === 401) {
                    navigate("/login")
                }
            } catch { }
        })
    }, [user])
    return (
        <Fade duration={300}>
            <div className="popup">
                <p className="popup-title">جستجوی مخاطب</p>
                <input onChange={(e) => setUser(e.target.value)} className="popup-input" type="text" placeholder="شماره مخاطب " />
            </div>
        </Fade>
    )
}


const Users = () => {


    const mode = useSelector((state) => state.background.mode);
    const dispatch = useDispatch();


    return (
        <Slide direction="left" duration={300}>
            <div className="contact outlet" onClick={() => dispatch(closePannel())}>
                <div className="contact-info">
                    <div className="contact-info-icons">
                        <Link to={"/"} onClick={() => dispatch(changeApp("none"))} >
                            <div><img src={Multiple} className="icon-pannel-link" /></div>
                        </Link>
                        <div>
                            <Popup trigger={<img src={Plus} className="icon-pannel-link" />}>
                                <AddContactPopUp />
                            </Popup>
                        </div>
                        <div>
                            <Popup trigger={<img src={Search} className="icon-pannel-link" />}>
                                <SearchContact />
                            </Popup>
                        </div>
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