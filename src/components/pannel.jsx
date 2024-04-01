import { BrowserRouter,Route,Routes } from "react-router-dom";
import { useSelector } from "react-redux";
// components
import PannelApps from "./pannelApps";
import Status from "./pannel/status";
import Document from "./pannel/document";
import Evenets from "./pannel/events";
import Favorit from "./pannel/favorit";
import Settings from "./pannel/settings";
import Users from "./pannel/users";
import "../static/pannel.css";
const Pannel = () => {
    const background = useSelector((state)=> state.background);
    console.log(background)
    return (
        <div className="pannel">
            <BrowserRouter>
            {/* routes for componets  */}
            <Routes>
                <Route path="/" element={<Status />} />
                <Route path="/document" element={<Document />} />
                <Route path="/events" element={<Evenets />} />
                <Route path="/favorit" element={<Favorit />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/users" element={<Users />} />
            </Routes>
            <PannelApps />
            </BrowserRouter>
        </div>
    )
};export default Pannel;