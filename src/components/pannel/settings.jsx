// animation 
import { Slide } from "react-awesome-reveal";
// style 
import "../../static/pannel-apps/settings.css";
import "../../static/settings/components.css";
// icons 
import Multiple from "../../static/icons/multiple.svg";
import { FaRegEdit } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
// change app 
import { changeApp } from "../../reducers/pannel";
import { changeCurrent } from "../../reducers/settings";
import {changeUser} from "../../reducers/user";
// react redux 
import { useDispatch, useSelector } from "react-redux";
// react router dom 
import { Link,useNavigate,useLocation } from "react-router-dom";
// image 
import Image from "../../images/b-382.jpg";
// components 
import Chat from "../settings/chat";
import Account from "../settings/account";
import Info from "../settings/info";
import Integrate from "../settings/integrate";
// close pannel 
import {closePannel} from "../../reducers/background";
import API,{setAccessWhen401} from "../../authentication/auth";
import { useEffect, useState } from "react";



const Settings = () => {

    const mode = useSelector((state) => state.background.mode);
    const current = useSelector((state) => state.settings.current);
    const dispatch = useDispatch();
    // const navigate = useNavigate();
    // const location = useLocation();
    const user = useSelector((state) => state.user) ;
    // dispatch(changeUser({"phone":"ldd"}))
    const getProfileData = async () => {
        await API.get("/profile/").then((response)=> {
            
        }).catch((error)=>{
            console.log(error)
            // try {
            //     if (error.response.status === 401) {
            //         setAccessWhen401(navigate, location.pathname);
            //     }
            // } catch { }
        })
    };
    // useEffect(() => {
    //     getProfileData() ;
    // },[]);

    return (
        <Slide direction="left" duration={300}>
            <div className="settings outlet" onClick={()=> dispatch(closePannel())}>
                <div className="settings-top">
                    <Link to={"/"} onClick={() => dispatch(changeApp("none"))}>
                        <img src={Multiple} className="icon-pannel-link" />
                    </Link>
                    <div className="text">
                        <h2 className={mode}>تنظیمات</h2>
                        <p>بروزرسانی تنظیمات برنامه</p> 
                    </div>
                </div>
                {
                    current === "none" ? <Slide duration={300}>
                        <div className="settings-bottom">
                            <div className="text">
                                {/* {
                                    user.phone
                                } */}
                                {/* <h4 className={mode}>{user.username ? user.username : user.phone }</h4> */}
                                {/* <p>یزد ، یزد</p> */}
                            </div>
                            <div className="img">
                                {/* {
                                    user.image ? <img src={user.image} /> : <FaUser className="img-icon" />
                                } */}
                            </div>
                        </div>
                        <div className="options">
                            <div className="option">
                                <div onClick={() => dispatch(changeCurrent("account"))}>
                                    <FaAngleLeft className="icon-pannel" />
                                </div>
                                <div className="text">
                                    <h3 className={mode}>حساب کاربری</h3>
                                    <p>بروزرسانی جزئیات حساب کاربری</p>
                                </div>
                            </div>
                            <div className="option">
                                <div onClick={() => dispatch(changeCurrent("chat"))}>
                                    <FaAngleLeft className="icon-pannel" />
                                </div>
                                <div className="text">
                                    <h3 className={mode}> چت</h3>
                                    <p>کنترل پشتیبانگیری از گفتگوها</p>
                                </div>
                            </div>
                            <div className="option">
                                <div onClick={() => dispatch(changeCurrent("integrate"))}>
                                    <FaAngleLeft className="icon-pannel" />
                                </div>
                                <div className="text">
                                    <h3 className={mode}>ادغام </h3>
                                    <p>همگام سازی سایر حسابهای اجتماعی</p>
                                </div>
                            </div>
                            <div className="option">
                                <div onClick={() => dispatch(changeCurrent("info"))}>
                                    <FaAngleLeft className="icon-pannel" />
                                </div>
                                <div className="text">
                                    <h3 className={mode}>راهنما</h3>
                                    <p>اگر سوالی دارید برای ما ارسال کنید.</p>
                                </div>
                            </div>
                        </div>
                    </Slide> : ""
                }
                {
                    current === "chat" ? <Chat /> : ""
                }
                {
                    current === "info" ? <Info /> : ""
                }
                {
                    current === "account" ? <Account /> : ""
                }
                {
                    current === "integrate" ? <Integrate /> : ""
                }
            </div>
        </Slide>
    )
}; export default Settings;