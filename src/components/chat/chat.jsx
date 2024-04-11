import TopNavbar from "./topNavbar";
import SendMessage from "./sendMessage";
import Message from "./messages";
const Chat = () => {
    return (
        <div className="chat">
            <TopNavbar />
            <Message />
            <SendMessage/>
        </div>
    ) 
};export default Chat;