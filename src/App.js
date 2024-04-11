import Pannel from "./components/pannel";
import Chat from "./components/chat/chat";
import Auth from "./components/authentication/auth";
import { useSelector , useDispatch } from "react-redux";
import "./static/App.css";
// change page 
import {changePage} from "./reducers/page";
// react toastify 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const mode = useSelector((state)=> state.background.mode);
  const page = useSelector((state)=> state.page.current);
  const user = useSelector((state)=> state.user) ;
  const dispatch = useDispatch() ; 
  window.addEventListener("resize",()=>{
    window.screen.width > 992 ? dispatch(user.islogin ? changePage("chat") : changePage("auth")) : dispatch(changePage("none")) 
  })
  return (
    <div className={"container " + mode}>
      {
        page === "auth" && !user.islogin ? <Auth /> : ""
      }
      {
        page ==="chat" && user.islogin ? <Chat /> : ""
      }
      {
        page !== "none" && window.screen.width < 992 ? "" : <Pannel />
      }
      <ToastContainer  />
    </div>
  )
};export default App;