import Pannel from "./components/pannel";
import Chat from "./components/chat/chat";
import Auth from "./components/authentication/auth";
import { useSelector, useDispatch } from "react-redux";
// style 
import "./static/App.css";
import "./static/popup.css";
// react toastify 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// cookies 
import Cookies from "js-cookie";
// change user state 
import { changeUser } from "./reducers/user";
import { changeMessageToggle } from "./reducers/message";
// react router dom 
import { BrowserRouter } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// api 
import API, { getChats, getGroups } from "./authentication/auth";

let currentSocket = null;

const sendDataSocket = async (data) => {
    if (currentSocket) {
      currentSocket.send(JSON.stringify(data));
    }
  } ;

const App = () => {

  const mode = useSelector((state) => state.background.mode);
  const page = useSelector((state) => state.page.current);
  const dispatch = useDispatch();
  const socket = useRef(null);
  const [chats, setChats] = useState([]);
  const [groups, setGroups] = useState([]);

  // get chats and groups for current user 

  useEffect(() => {
    getChats(setChats);
    getGroups(setGroups);
  }, []);

  // config websocket  

  const getSocket = (type) => {
    socket.current = new WebSocket("ws://localhost:8000/ws/user/");
    currentSocket = socket.current;
    socket.current.onclose = () => {
      setTimeout(() => {
        getSocket();
      }, [2000]);
    };

    socket.current.onopen = async () => {
      if (socket.current.readyState === 1) {
        await type === "start" && socket.current.send(JSON.stringify({
          "chats": chats,
          "type": "start",
          "groups": groups,
        }));
      }
    }

    socket.current.onmessage = (event) => {
      if (JSON.parse(event.data).type === "message.send") {
        dispatch(changeMessageToggle());
      }
    };
  };

  useEffect(() => {
    getSocket("start");
  }, [groups, chats])

  // end config websocket

  if (Cookies.get("access")) {
    dispatch(changeUser({ "islogin": true }));
  }

  return (
    <div className={"container " + mode}>
      {
        page === "auth" && <Auth />
      }
      <BrowserRouter>

        {
          page === "chat" ? <Chat /> : ""
        }
        <Pannel />
      </BrowserRouter>
      <ToastContainer draggable={true} />
    </div>
  )
}; export default App; export { sendDataSocket };