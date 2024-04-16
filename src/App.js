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
// react router dom 
import { BrowserRouter } from "react-router-dom";



const App = () => {

  const mode = useSelector((state) => state.background.mode);
  const page = useSelector((state) => state.page.current);
  const dispatch = useDispatch();

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
}; export default App;