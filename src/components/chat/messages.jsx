// img 
import Image from "../../images/b-023.jpg";
// styling 
import "../../static/chat/messages.css";
// dark mode 
import { useDispatch, useSelector } from "react-redux";
// API 
import API, { setAccessWhen401, getCurrentUser } from "../../authentication/auth";
import { useState, useEffect } from "react";
// react awesome reveal 
import { Slide } from "react-awesome-reveal";
import { useLocation, useNavigate } from "react-router-dom";


const Messages = () => {

    const mode = useSelector((state) => state.background.mode);
    const contact = useSelector((state) => state.contact);
    const [messages, setMessages] = useState([]);
    const messageToggle = useSelector((state) => state.message.messagetoggle);
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const contactToggle = useSelector((state) => state.contact.toggle );


    const getMessages = async () => {
        await API.get(`/chat/${contact.chat_id}/`).then((response) => {
            setMessages(response.data.messages);
        }).catch((error) => {
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location);
                }
            } catch { }
        })
    };

    useEffect(() => {
        getCurrentUser(setCurrentUser, navigate, location);
    }, []);


    useEffect(() => {
        console.log("getting messages");
        getMessages();
    }, [messageToggle,contactToggle])

    return (
        <div className="chat-content">
            <div className="messages">
                {
                    messages.map((message, index) => {

                        return (
                            <Slide key={index} duration={200}>

                                <div className={`message ${message.create_by.phone === currentUser.phone ? "right-message" : ""}`} >
                                    <div className="message-user">
                                        <img src={Image} />
                                    </div>
                                    <div className="message-info">
                                        <div className="message-info-top">
                                            <h5 className={mode}>
                                                {
                                                    message.create_by.profile.username ? message.create_by.profile.username
                                                        : message.create_by.phone
                                                }
                                            </h5>
                                            <p className={mode}>{message.create_time}</p>
                                        </div>
                                        <p className={"message-info-text " + mode}>
                                            {
                                                message.text && message.text
                                            }
                                        </p>
                                    </div>
                                </div>
                            </Slide>
                        )
                    })
                }
            </div>
        </div>
    )
}; export default Messages;