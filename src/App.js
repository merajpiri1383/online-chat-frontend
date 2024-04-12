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
  return (
    <div className={"container " + mode}>
      {
        page === "auth" && <Auth /> 
      }
      {
        page ==="chat" && user.islogin ? <Chat /> : ""
      }
      <Pannel />
      <ToastContainer  />
    </div>
  )
};export default App;