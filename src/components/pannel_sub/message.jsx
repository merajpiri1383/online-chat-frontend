// style
import "../../static/sub_pannels/message.css";
// react redux 
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../../reducers/messageSubPannlel";
import { changeContact, contactToggle } from "../../reducers/contact";
import { changePage,changeChatType } from "../../reducers/page";
import { changeMessageToggle } from "../../reducers/message";
// animation 
import { Slide } from "react-awesome-reveal";
// image 
import Image from "../../images/b-382.jpg";
// API 
import API, { setAccessWhen401, getCurrentUser, getChats } from "../../authentication/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Groups from "./groups";




const Message = () => {

    const dispatch = useDispatch();
    // to show witch component should show 
    const currentMode = useSelector((state) => state.message_sub_pannel.mode);
    // dark or light mode 
    const mode = useSelector((state) => state.background.mode);
    const navigate = useNavigate();
    const location = useLocation();
    const [chats, setChats] = useState();
    const [currentUser, setCurrentUser] = useState({});
    const deleteUserToggle = useSelector((state) => state.message_sub_pannel.delete_toggle );


    const getOrCreateChatWithContact = async (contact) => {
        await API.post("/chat/", { "with_who":  contact.id }).then((response) => {
            const contact = response.data.with_who.phone === currentUser.phone ? response.data.create_by : response.data.with_who
            dispatch(changeContact({ "chat_id": response.data.id, ...contact, ...contact.profile }));
            dispatch(changeMessageToggle());
        }).catch((error) => {
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
            } catch { }
            dispatch(changeMessageToggle());
        });
        dispatch(contactToggle());
        
    };

    

    // change state of contact 
    const userClick = (chat,contact) => {
        getOrCreateChatWithContact(contact);
        dispatch(changeChatType("chat"))
        dispatch(changePage("chat"));
        dispatch(changeContact({"chat_id" : chat.id,...contact,...contact.profile}));
    };


    useEffect(() => {
        getCurrentUser(setCurrentUser, navigate, location);
        getChats(setChats, navigate, location);
    }, [deleteUserToggle])

    


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
                                    <div className="user" onClick={() => userClick(chat,contact)} key={index}>
                                        <div className="user-time">
                                            <p className={mode}>
                                                {lastMessage  ? lastMessage.update_date : ""}
                                            </p>
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
                                                    lastMessage ? lastMessage.text ? lastMessage.text :"file" : ""
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
                currentMode === "group" && <Slide duration={200}>
                    <Groups />
                </Slide>
            }
        </div>
    )
}; export default Message;