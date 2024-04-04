import TopNavbar from "./chat/topNavbar";
import SendMessage from "./chat/sendMessage";
import Message from "./chat/messages";
const Chat = () => {
    return (
        <div className="chat">
            <TopNavbar />
            <Message />
            <SendMessage/>
        </div>
    ) 
};export default Chat;