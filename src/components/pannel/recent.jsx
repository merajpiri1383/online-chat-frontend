// style
import "../../static/pannel-apps/recent.css";
// icons 
import { useSelector, useDispatch } from "react-redux";
import { changeShowPannel } from "../../reducers/background";
import Search from "../../static/icons/search.svg";
import AllApps from "../../static/icons/AllApps.svg";
import { FaMessage } from "react-icons/fa6";
import { IoDocuments } from "react-icons/io5";
import { MdNotificationsActive } from "react-icons/md";
// reducers 
import { changeComponent } from "../../reducers/pannel";
// components  
import Events from "./events";
import Infos from "../pannel_sub/infos";
import Message from "../pannel_sub/message";
// animation 
import { Slide } from "react-awesome-reveal";
// image 
import Image from "../../static/images/Group 25515.png";
// react router dom 
import { useNavigate , useLocation } from "react-router-dom";
// API 
import API ,{setAccessWhen401} from "../../authentication/auth";




const Recent = () => {
 
    const mode = useSelector((state) => state.background.mode);
    const component = useSelector((state) => state.pannel.component);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    ( async ()=>{
        await API.get("/profile/").then().catch((error) => {
            try{
                if(error.response.status === 401) {
                    setAccessWhen401(navigate,location.pathname)
                }
            }catch(error){console.log(error)}
        })
      })()

    return (
        <Slide direction="left" duration={300}>
            <div className="recent outlet">
                <div className="recent-image">
                    <img src={Image} alt="ground" />
                </div>
                <div className="recent-info">
                    <div className="recent-info-left">
                        <img src={AllApps} className="icon-pannel-link" onClick={() => dispatch(changeShowPannel())} />
                    </div>
                    <div className={"recent-info-right " + mode}>
                        <h2 className={mode}>اخیر</h2>
                        <p className={mode}>گفتگوهای اخیر شما</p>
                    </div>
                </div>
                <div className="recent-info">
                    <div className="recent-info-left">
                        <img src={Search} className="icon-pannel-link" />
                    </div>
                    <div className="recent-info-right">
                        <h2 className={mode}>گفتگو</h2>
                        <p className={mode}>آغاز گفتگوی جدید</p>
                    </div>
                </div>
                <div className="recent-buttons">
                    <div className="main-buttons">
                        <button className={`main-button ${component === "events" ? "active" : ""}`}
                            onClick={() => dispatch(changeComponent("events"))}>
                            <p>اعلان ها</p>
                            <MdNotificationsActive className="main-button-icon" />
                        </button>
                        <button className={`main-button ${component === "infos" ? "active" : ""}`}
                            onClick={() => dispatch(changeComponent("infos"))}>
                            <p>اطلاعیه ها </p>
                            <IoDocuments className="main-button-icon" />
                        </button>
                        <button className={`main-button ${component === "message" ? "active" : ""}`}
                            onClick={() => dispatch(changeComponent("message"))}>
                            <p>گفتگو</p>
                            <FaMessage className="main-button-icon" />
                        </button>
                    </div>
                </div>
                {
                    component === "infos" ? <Infos /> : ""
                }
                {
                    component === "events" ? <Events /> : ""
                }
                {
                    component === "message" ? <Message /> : ""
                }
            </div>
        </Slide>
    )
}; export default Recent;