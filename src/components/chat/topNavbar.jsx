import "../../static/chat/topnavbar.css";
import { useSelector } from "react-redux";
import Image from "../../images/b-023.jpg";
// icons 
import { GrAppsRounded } from "react-icons/gr";
import { IoMdMore } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaVolumeHigh } from "react-icons/fa6";
const TopNavbar = () => {
    const mode = useSelector((state) => state.background.mode);
    return (
        <div className={`top-navbar ${mode}`}>
            <div className="top-navbar-left">
                <IoMdMore className="icon" />
                <GrAppsRounded className="icon" />
                <IoVideocam className="icon" />
                <IoCall className="icon" />
            </div>
            <div className="top-navbar-right">
                <div className={`top-navbar-right-left ${mode}`}>
                    <IoIosSearch className="icon" />
                    <FaVolumeHigh className="icon" />
                </div>
                <div className="top-navbar-right-right">
                    <div className="top-navbar-right-right-info">
                        <p className={mode}>سعید مظفری</p>
                        <p className="badge">آنلاین</p>
                    </div>
                    <div className="top-navbar-right-right-img"><img src={Image} /></div>
                </div>
            </div>
        </div>
    )
}; export default TopNavbar;