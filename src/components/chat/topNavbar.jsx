import "../../static/chat/topnavbar.css";
import { useSelector , useDispatch } from "react-redux";
import Image from "../../images/b-023.jpg";
// icons 
import { GrAppsRounded } from "react-icons/gr";
import { IoMdMore } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaVolumeHigh } from "react-icons/fa6"; 
// app panel 
import { changeShowPannel} from "../../reducers/background";
// animation 
import { Slide } from "react-awesome-reveal";
const TopNavbar = () => {
    const mode = useSelector((state) => state.background.mode);
    const contactName = useSelector((state) => state.contact.name);
    const contactState = useSelector((state)=> state.contact.online)
    const dispatch = useDispatch()
    console.log(contactName)
    return (
        <Slide duration={300}>
            <div className={`top-navbar ${mode}`}>
            <div className="top-navbar-left">
                <IoMdMore className="icon" />
                <GrAppsRounded className="icon" onClick={() => dispatch(changeShowPannel())} />
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
                        <p className={mode}>{contactName}</p>
                        <p className={`badge ${contactState? "online":"offline"}`}>
                            {
                                contactState ? "آنلاین" : "آفلاین"
                            }
                        </p>
                    </div>
                    <div className="top-navbar-right-right-img"><img src={Image} /></div>
                </div>
            </div>
        </div>
        </Slide>
    )
}; export default TopNavbar;