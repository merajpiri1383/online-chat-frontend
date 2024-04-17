import "../../static/chat/topnavbar.css";
import { useSelector, useDispatch } from "react-redux";
import Image from "../../images/b-023.jpg";
// icons 
import { GrAppsRounded } from "react-icons/gr";
import { IoMdMore } from "react-icons/io";
import { IoVideocam } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaVolumeHigh } from "react-icons/fa6";
// app panel 
import { changeShowPannel } from "../../reducers/background";
// animation 
import { Slide } from "react-awesome-reveal";
// tooltip 
import { Tooltip } from 'react-tooltip'
// pop up 
import MoreNavbar from "../popup/moreNavbar";
import Popup from "reactjs-popup";



const TopNavbar = () => {

    const mode = useSelector((state) => state.background.mode);
    const contact = useSelector((state) => state.contact);
    const dispatch = useDispatch();
    const chat_type = useSelector((state) => state.page.chat_type);
    const group = useSelector((state) => state.group);

    return (
        <Slide duration={300}>
            <div className={`top-navbar ${mode}`}>
                <div className="top-navbar-content">
                <div className="top-navbar-left">
                    <Popup trigger={<IoMdMore className="icon more" />}>
                        <MoreNavbar />
                    </Popup>
                    <Tooltip anchorSelect=".more" place="bottom">عملیات سریع</Tooltip>
                    <GrAppsRounded className="icon app" onClick={() => dispatch(changeShowPannel())} />
                    <Tooltip anchorSelect=".app" place="bottom">تمام برنامه ها</Tooltip>
                    {/* <IoVideocam className="icon video" />
                <Tooltip anchorSelect=".video" place="bottom">تماس تصویری سریع</Tooltip>
                <IoCall className="icon call" />
                <Tooltip anchorSelect=".call" place="bottom">تماس صوتی سریع</Tooltip> */}
                </div>
                <div className="top-navbar-right">
                    {/* <div className={`top-navbar-right-left ${mode}`}>
                    <IoIosSearch className="icon" />
                    <FaVolumeHigh className="icon" />
                </div> */}
                    <div className={`top-navbar-right-left ${mode}`}>

                    </div>
                    <div className="top-navbar-right-right">
                        <div className="top-navbar-right-right-info">
                            <p className={mode}>
                                {
                                    chat_type === "chat" ? contact.username || contact.phone : group.name
                                }
                            </p>
                            {/* <p className={`badge ${contactState? "online":"offline"}`}>
                            {
                                contactState ? "آنلاین" : "آفلاین"
                            }
                        </p> */}
                        </div>
                        <div className="top-navbar-right-right-img">
                            {
                                chat_type === "group" ? <img src={group.image} /> : <img src={Image} />
                            }
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </Slide>
    )
}; export default TopNavbar; 