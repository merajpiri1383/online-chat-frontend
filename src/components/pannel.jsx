import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useSelector  } from "react-redux";
// components
import PannelApps from "./pannelApps";
import Status from "./pannel/status";
import Document from "./pannel/document";
import Evenets from "./pannel/events";
import Favorit from "./pannel/favorit";
import Settings from "./pannel/settings";
import Users from "./pannel/users";
import Recent from "./pannel/recent";
// components for authentication 
import Login from "./authentication/login";
import Register from "./authentication/register";
import ForegetPassword from "./authentication/forgetPassword";
import ResetPassword from "./authentication/resetPassword";
import Activation from "./authentication/activation";
// style 
import "../static/pannel.css";
const Pannel = () => {
    const user = useSelector((state) => state.user);
    const background = useSelector((state)=> state.background);
    return (
        <div className={`pannel ${background.showPannel?"show":"hide"} ${background.mode}`} >
            <BrowserRouter>
            {/* routes for componets  */}
            <Routes>
                <Route path="/" element={ user.islogin ? <Recent /> : <Login /> } />
                <Route path="/status" element={<Status />} />
                <Route path="/document" element={<Document />} />
                <Route path="/events" element={<Evenets />} />
                <Route path="/favorit" element={<Favorit />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/users" element={<Users />} />
                {/* routes for authentications */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/activate" element={<Activation />} />
                <Route path="/password/forget" element={<ForegetPassword />} />
                <Route path="/password/reset/" element={<ResetPassword />} />
            </Routes>
            <PannelApps  />
            </BrowserRouter>
        </div>
    )
};export default Pannel;