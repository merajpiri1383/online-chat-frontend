//  style 
import "../../static/chat/sendMessage.css";
// get mode of background 
import { useSelector, useDispatch } from "react-redux";
// icons 
import { FaPlus } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";
// animation 
import { Fade } from "react-awesome-reveal";
import { useEffect, useRef, useState } from "react";
// API 
import API, { setAccessWhen401, getCurrentUser,getChats } from "../../authentication/auth";
// react toastify
import { toast } from "react-toastify";
// change contact
import { changeContact, contactToggle } from "../../reducers/contact";
import { changeMessageToggle } from "../../reducers/message";
import { useLocation, useNavigate } from "react-router-dom";
// react emoji
import InputEmoji from 'react-input-emoji'
// socket 
import { sendDataSocket } from "../../App";




const SendMessage = () => {

    const mode = useSelector((state) => state.background.mode);
    const [content, setContent] = useState("");
    const contact = useSelector((state) => state.contact);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUser, setCurrentUser] = useState({});
    const chatType = useSelector((state) => state.page.chat_type);
    const group = useSelector((state) => state.group);


    const sendData = async () => {
        const formData = new FormData();
        formData.append("text", content)

        if (chatType === "chat") {

            sendDataSocket({
                "type" : "message.send" ,
                "id" : `chat_${contact.chat_id}`
            })


            await API.post(`/chat/${contact.chat_id}/message/create/`, formData).then((response) => {
                const contact = response.data.with_who === currentUser ? response.data.create_by : response.data.with_who;
                dispatch(changeContact({ "chat_id": response.data.chat, ...contact, ...contact.profile }))
                dispatch(changeMessageToggle());
            }).catch((error) => {
                try {
                    if (error.response.status === 401) {
                        setAccessWhen401(navigate, location.pathname, dispatch)
                    }
                    toast.error(Object.values(error.response.data)[0][0])
                } catch { }
            })
        }

        if (chatType === "group") {

            sendDataSocket({
                "type" : "message.send" ,
                "id" : `group_${group.id}`
            })

            formData.append("group", group.id);
            await API.post("/group/message/create/", formData).then((response) => {
                console.log(response.data)
            }).catch((error) => {
                try {
                    if (error.response.status === 401) {
                        setAccessWhen401(navigate, location.pathname, dispatch)
                    }
                    toast.error(Object.values(error.response.data)[0][0])
                } catch { }
            })
        }

        setContent("");
        
        dispatch(contactToggle());
    };

    useEffect(() => {
        getCurrentUser(setCurrentUser, navigate, location);
    }, []);

    const onEnterHandeler = (text) => {
        sendData();
    }


    return (
        <Fade duration={300}>
            <form className={"send-message " + mode}>
                <PiTelegramLogoBold className="icon" onClick={() => sendData()} />
                <InputEmoji
                    value={content}
                    onChange={setContent}
                    cleanOnEnter
                    onEnter={onEnterHandeler}
                    placeholder="پیام خود را اینجا بنویسید..."
                    className={"message-input " + mode}
                />
                <FaPlus className="icon" />
            </form>
        </Fade>
    )
}; export default SendMessage;  