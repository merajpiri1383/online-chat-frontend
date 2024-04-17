//  style 
import "../../static/chat/sendMessage.css";
// get mode of background 
import { useSelector , useDispatch  } from "react-redux";
// icons 
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { HiMicrophone } from "react-icons/hi2";
import { PiTelegramLogoBold } from "react-icons/pi";
// animation 
import { Fade } from "react-awesome-reveal";
import { useEffect, useState } from "react";
// API 
import API,{setAccessWhen401,getCurrentUser} from "../../authentication/auth";
// react toastify
import { toast } from "react-toastify";
// change contact
import {changeContact,contactToggle} from "../../reducers/contact";
import {changeMessageToggle} from "../../reducers/message";
import { useLocation, useNavigate } from "react-router-dom";


const SendMessage = () => {

    const mode = useSelector((state) => state.background.mode);
    const [content,setContent] = useState("");
    const contact = useSelector((state) => state.contact) ;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [currentUser,setCurrentUser] = useState({});
    const chatType = useSelector((state) => state.page.chat_type);
    const group = useSelector((state) => state.group );
 
    const sendData = async () => {
        const formData = new FormData();
        formData.append("text",content)

        if(chatType === "chat") {
            await API.post(`/chat/${contact.chat_id}/message/create/`,formData).then((response) => {
                const contact = response.data.with_who === currentUser ? response.data.create_by : response.data.with_who ;
                dispatch(changeContact({"chat_id" : response.data.chat,...contact,...contact.profile}))
                dispatch(changeMessageToggle());
            }).catch((error)=>{ 
                try{
                    if(error.response.status === 401){
                        setAccessWhen401(navigate,location.pathname,dispatch)
                    }
                    toast.error(Object.values(error.response.data)[0][0])
                }catch{}
            })
        }

        if(chatType === "group") {
            formData.append("group",group.id);
            await API.post("/group/message/create/",formData).then((response) => {
                console.log(response.data)
            }).catch((error) => {
                try{
                    if(error.response.status === 401){
                        setAccessWhen401(navigate,location.pathname,dispatch)
                    }
                    toast.error(Object.values(error.response.data)[0][0])
                }catch{}
            })
        }

        setContent("");
        dispatch(contactToggle());
    };

    useEffect(() => {
        getCurrentUser(setCurrentUser,navigate,location);
    },[]);
 
    return (  
        <Fade duration={300}> 
            <form className={"send-message " + mode}>
                <PiTelegramLogoBold className="icon" onClick={() => sendData()} />
                {/* <HiMicrophone className="icon" /> */}
                <input type="text" className={"message-input " + mode} placeholder="پیام خود را اینجا بنویسید..."
                onChange={(e) => setContent(e.target.value) } value={content} />
                <FaPlus className="icon" />
                {/* <FaRegFaceSmile className="icon" /> */}
            </form>
        </Fade>
    )
}; export default SendMessage;  