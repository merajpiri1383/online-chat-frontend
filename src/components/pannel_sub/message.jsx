// style
import "../../static/sub_pannels/message.css";
// react redux 
import { useSelector, useDispatch } from "react-redux";
import { changeMode, changeUser } from "../../reducers/messageSubPannlel";
import { changeContact ,contactToggle} from "../../reducers/contact";
import { changePage } from "../../reducers/page";
import {changeMessageToggle} from "../../reducers/message";
// animation 
import { Slide } from "react-awesome-reveal";
// image 
import Image from "../../images/b-382.jpg";
// API 
import API, { setAccessWhen401,getCurrentUser,getChats } from "../../authentication/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";



const Message = () => {

    const dispatch = useDispatch();
    // to show witch component should show 
    const currentMode = useSelector((state) => state.message_sub_pannel.mode);
    // dark or light mode 
    const mode = useSelector((state) => state.background.mode);
    const navigate = useNavigate();
    const location = useLocation();
    const [chats, setChats] = useState();
    const [currentUser,setCurrentUser] = useState({});

    const getOrCreateChatWithContact = async (withWho) => {
        await API.post("/chat/",{"with_who" : withWho.id}).then((response) => {
            const contact = response.data.with_who.phone === currentUser.phone ? response.data.create_by : response.data.with_who
            dispatch(changeContact({"chat_id" : response.data.id,...contact,...contact.profile}));
            dispatch(changeMessageToggle());
        }).catch((error) => {
            dispatch(changeMessageToggle());
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
            } catch { } 
        });
    };

    // change state of contact 
    const userClick = (user) => {
        getOrCreateChatWithContact(user);
        dispatch(changePage("chat"));
    };    


    useEffect(() => {
        getCurrentUser(setCurrentUser,navigate,location);
        getChats(setChats,navigate,location);
    }, [])


    return (
        <div className="message sub-pannel">
            <div className="message-type">
                <p onClick={() => dispatch(changeMode("group"))}
                    className={currentMode === "group" ? "active" : ""}>گروه ها</p>
                <p onClick={() => dispatch(changeMode("personal"))}
                    className={currentMode === "personal" ? "active" : ""}>پیام خصوصی</p>
            </div>
            {
                currentMode === "personal" ? <Slide duration={300}>
                    <div className="message-content">
                        {
                            chats && chats.map((chat, index) => {
                                const lastMessage = chat.messages[chat.messages.length - 1];
                                const contact = chat.create_by.phone === currentUser.phone ? chat.with_who : chat.create_by
                                return (
                                    <div className="user" onClick={() => userClick(contact)} key={index}>
                                        <div className="user-time">
                                            <p className={mode}>{lastMessage.update_date}</p>
                                            <p className="seen">دیده شده</p>
                                        </div>
                                        <div className="user-text">
                                            <h3 className={mode}>
                                                {
                                                    contact.profile.username || contact.phone
                                                }
                                            </h3>
                                            <p>
                                                {
                                                    lastMessage.text ? lastMessage.text : "file"
                                                }
                                            </p>
                                        </div>
                                        <div className="user-img">
                                            <img src={Image} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </Slide> : ""
            }
            {
                currentMode === "group" ? <Slide duration={300}>
                    <div className="message-content">
                        <div className="user">
                            <div className="user-time">
                                <p className="count">35</p>
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>الهام جعفری</h3>
                                <p>لورم ایپسوم متن ساختگی با </p>
                            </div>
                            <div className="user-img">
                                <img src={Image} />
                            </div>
                        </div>
                        <div className="user">
                            <div className="user-time">
                                <p className="count">35</p>
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>الهام جعفری</h3>
                                <p>لورم ایپسوم متن ساختگی با </p>
                            </div>
                            <div className="user-img">
                                <img src={Image} />
                            </div>
                        </div>
                        <div className="user">
                            <div className="user-time">
                                <p className="count">35</p>
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>الهام جعفری</h3>
                                <p>لورم ایپسوم متن ساختگی با </p>
                            </div>
                            <div className="user-img">
                                <img src={Image} />
                            </div>
                        </div>
                    </div>
                </Slide> : ""
            }
        </div>
    )
}; export default Message;