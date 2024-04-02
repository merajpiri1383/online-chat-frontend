import Pannel from "./components/pannel";
import Chat from "./components/chat";
import { useSelector } from "react-redux";
import "./App.css";
const App = () => {
  const mode = useSelector((state)=> state.background.mode);
  return (
    <div className={"container " + mode}>
      <Chat />
      <Pannel />
    </div>
  )
};export default App;