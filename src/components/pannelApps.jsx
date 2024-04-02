import { useSelector , useDispatch } from "react-redux";
import { changeMode ,changeLink } from "../reducers/background";
import { BiSolidMessageRounded } from "react-icons/bi";
// icons 
import { Link , Outlet } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { MdSettings } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";
import { IoMoonSharp } from "react-icons/io5";
import { CiPower } from "react-icons/ci";
const PannelApps = () => {
    const colorMode = useSelector((state)=> state.background.mode);
    const showPannel = useSelector((state) => state.background.showPannel);
    const dispatch = useDispatch();
    return (
        <div className={`pannel-apps ${showPannel? "show":"hide"}`}>
            <div className={"links "+colorMode}>
            <div className="logo">
                <BiSolidMessageRounded className="logo-image" />
            </div>
            <Link className={"link "+colorMode} to={"/status"}>
                <FaUserAlt className={"link-icon "+colorMode} />
            </Link>
            <Link className={"link "+colorMode} to={"/favorit"}>
                <FaStar className={"link-icon "+colorMode} />
            </Link>
            <Link className={"link "+colorMode} to={"/document"}>
                <IoDocumentText className={"link-icon "+colorMode} />
            </Link>
            <Link className={"link "+colorMode} to={"/users"}>
                <FaUsers className={"link-icon "+colorMode} />
            </Link>
            <Link className={"link "+colorMode} to={"/events"}>
                <IoIosNotifications className={"link-icon "+colorMode} />
            </Link>
            <Link className={"link "+colorMode} to={"/settings"}>
                <MdSettings className={"link-icon "+colorMode} />
            </Link>
            <a className={"link "+colorMode} onClick={()=> dispatch(changeMode())}>
                <BsFillLightbulbFill className={"link-icon "+colorMode} />
            </a>
            <Link className={"link "+colorMode} to={"#"}>
                <CiPower className={"link-icon "+colorMode} />
            </Link>
            </div>
            
        </div>
    )
};export default PannelApps;