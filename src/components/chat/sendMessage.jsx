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
const SendMessage = () => {
    const mode = useSelector((state) => state.background.mode);
    return ( 
        <Fade duration={300}>
            <div className={"send-message " + mode}>
                <PiTelegramLogoBold className="icon" />
                <HiMicrophone className="icon" />
                <input type="text" className={"message-input " + mode} placeholder="پیام خود را اینجا بنویسید..." />
                <FaPlus className="icon" />
                <FaRegFaceSmile className="icon" />
            </div>
        </Fade>
    )
}; export default SendMessage;  