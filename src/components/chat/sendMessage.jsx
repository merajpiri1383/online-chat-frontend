//  style 
import "../../static/chat/sendMessage.css";
// get mode of background 
import { useSelector } from "react-redux";
// icons 
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { HiMicrophone } from "react-icons/hi2";
import { PiTelegramLogoBold } from "react-icons/pi";
// animation 
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
// API 
import API from "../../authentication/auth";


const SendMessage = () => {

    const mode = useSelector((state) => state.background.mode);
    const [content,setContent] = useState("");
    const contact = useSelector((state) => state.contact) ;

    const sendData = async () => {
        await API.post(`/chat/${contact.chat_id}/message/create/`).then((response) => {
            console.log(response.data)
        }).catch((error)=>{
            console.log(error)
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