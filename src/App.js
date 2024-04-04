import Pannel from "./components/pannel";
import PannelApps from "./components/pannelApps";
import Chat from "./components/chat";
import { useSelector , useDispatch } from "react-redux";
import "./static/App.css";
// change page 
import {changePage} from "./reducers/page";
const App = () => {
  const mode = useSelector((state)=> state.background.mode);
  const page = useSelector((state)=> state.page.current);
  const dispatch = useDispatch() ; 
  window.addEventListener("resize",()=>{
    window.screen.width > 992 ? dispatch(changePage("chat")) : dispatch(changePage("none")) 
  })
  return (
    <div className={"container " + mode}>
      {
        page ==="chat" ? <Chat /> : ""
      }
      {
        page !== "none" && window.screen.width < 992 ? "" : <Pannel />
      }
    </div>
  )
};export default App;