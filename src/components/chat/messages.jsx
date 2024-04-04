// img 
import Image from "../../images/b-023.jpg";
// styling 
import "../../static/chat/messages.css";
// dark mode 
import { useSelector } from "react-redux";
const Messages = () => {
    const mode = useSelector((state) => state.background.mode);
    return (
        <div className="chat-content">
            <div className="messages">
            <div className="message">
                <div className="message-user">
                    <img src={Image} />
                </div>
                <div className="message-info">
                    <div className="message-info-top">
                        <h5 className={mode}>سعید مظفری</h5>
                        <p className={mode}>01:35 صبح</p>
                    </div>
                    <p className={"message-info-text " + mode}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                </div>
            </div>
            <div className="message right-message">
                <div className="message-user">
                    <img src={Image} />
                </div>
                <div className="message-info">
                    <div className="message-info-top">
                        <h5 className={mode}>سعید مظفری</h5>
                        <p className={mode}>01:35 صبح</p>
                    </div>
                    <p className={"message-info-text " + mode}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                </div>
            </div>
            <div className="message right-message">
                <div className="message-user">
                    <img src={Image} />
                </div>
                <div className="message-info">
                    <div className="message-info-top">
                        <h5 className={mode}>سعید مظفری</h5>
                        <p className={mode}>01:35 صبح</p>
                    </div>
                    <p className={"message-info-text " + mode}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                </div>
            </div>
            <div className="message">
                <div className="message-user">
                    <img src={Image} />
                </div>
                <div className="message-info">
                    <div className="message-info-top">
                        <h5 className={mode}>سعید مظفری</h5>
                        <p className={mode}>01:35 صبح</p>
                    </div>
                    <p className={"message-info-text " + mode}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                    <p className={"message-info-text " + mode}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                </div>
            </div>
            <div className="message right-message">
                <div className="message-user">
                    <img src={Image} />
                </div>
                <div className="message-info">
                    <div className="message-info-top">
                        <h5 className={mode}>سعید مظفری</h5>
                        <p className={mode}>01:35 صبح</p>
                    </div>
                    <p className={"message-info-text " + mode}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                </div>
            </div>    
        </div>
        </div>
    )
};export default Messages ;