import { useSelector , useDispatch } from "react-redux";
import { changeMode  } from "../reducers/background";
import {changeApp} from "../reducers/pannel";
import {changePage} from "../reducers/page";
// icons 
import { Link , Outlet } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdSettings } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";
import { CiPower } from "react-icons/ci";
// logo 
import Logo from "../static/logo/1711737127-duNm.svg";
const PannelApps = () => {
    const colorMode = useSelector((state)=> state.background.mode);
    const showPannel = useSelector((state) => state.background.showPannel);
    const app = useSelector((state)=> state.pannel.app);
    const dispatch = useDispatch();
    const linkClick = (app) => {
        dispatch(changeApp(app));
    }
    return (
        <div className={`pannel-apps ${showPannel? "show":"hide"}`}>
            <div className={"links "+colorMode}>
            <div className="logo">
                <img src={Logo} className="logo-image" />
            </div>
            <Link className={`link ${colorMode} ${app === "status"?"active":""}`} to={"/status"} onClick={() => linkClick("status")}>
                <FaUserAlt className={"link-icon "+colorMode} />
            </Link>
            <Link className={`link ${colorMode} ${app === "favorit"?"active":""}`} to={"/favorit"} onClick={() => linkClick("favorit")}>
                <FaStar className={"link-icon "+colorMode} />
            </Link>
            <Link className={`link ${colorMode} ${app === "document"?"active":""}`} to={"/document"} onClick={()=>linkClick("document")}>
                <IoDocumentText className={"link-icon "+colorMode} />
            </Link>
            <Link className={`link ${colorMode} ${app === "users"?"active":""}`} to={"/users"} onClick={() =>linkClick("users")}>
                <FaUsers className={"link-icon "+colorMode} />
            </Link>
            <Link className={`link ${colorMode} ${app === "events"?"active":""}`} to={"/events"} onClick={() =>linkClick("events")}>
                <IoIosNotifications className={"link-icon "+colorMode} />
            </Link>
            <Link className={`link ${colorMode} ${app === "settings"?"active":""}`} to={"/settings"} onClick={()=>linkClick("settings") }>
                <MdSettings className={"link-icon "+colorMode} />
            </Link>
            <a className={`link ${colorMode} `} onClick={()=> dispatch(changeMode())}>
                <BsFillLightbulbFill className={"link-icon "+colorMode} />
            </a>
            <Link 
            className={`link ${colorMode} ${app === "login"?"active":""}`} 
            to={"/login"}
            onClick={()=>dispatch(changePage("login"))}
            >
                <CiPower className={"link-icon "+colorMode} />
            </Link>
            </div>
            
        </div>
    )
};export default PannelApps;