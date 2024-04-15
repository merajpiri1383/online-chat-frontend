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
import { useState } from "react";
// API 
import API,{setAccessWhen401} from "../../authentication/auth";
// react toastify
import { toast } from "react-toastify";
// change contact
import {changeContact} from "../../reducers/contact";
import {changeMessageToggle} from "../../reducers/message";
import { Navigate } from "react-router-dom";


const SendMessage = () => {

    const mode = useSelector((state) => state.background.mode);
    const [content,setContent] = useState("");
    const contact = useSelector((state) => state.contact) ;
    const dispatch = useDispatch();

    const sendData = async () => {
        await API.post(`/chat/${contact.chat_id}/message/create/`,{"text":content}).then((response) => {
            dispatch(changeContact({"chat_id" : response.data.chat,...response.data.create_by,...response.data.create_by.profile}))
            dispatch(changeMessageToggle());
        }).catch((error)=>{ 
            try{
                if(error.response.status === 401){
                    return <Navigate to={"/login"} />
                }
                toast.error(Object.values(error.response.data)[0][0])
            }catch{}
        })
        setContent("")
    };
 
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