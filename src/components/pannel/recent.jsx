// style
import "../../static/pannel-apps/recent.css";
// icons 
import { useSelector, useDispatch } from "react-redux";
import { changeShowPannel } from "../../reducers/background";
import { IoIosSearch } from "react-icons/io";
import { GrAppsRounded } from "react-icons/gr";
import { FaMessage } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdGroup } from "react-icons/md";
// reducers 
import { changeComponent } from "../../reducers/pannel";
// components  
import Call from "../pannel_sub/call";
import Contact from "../pannel_sub/contact";
import Message from "../pannel_sub/message";
// animation 
import { Slide } from "react-awesome-reveal";
const Recent = () => {
    const mode = useSelector((state) => state.background.mode);
    const component = useSelector((state) => state.pannel.component);
    const dispatch = useDispatch();
    return (
        <Slide direction="left" duration={300}>
            <div className="recent outlet">
                <div className="recent-info">
                    <div className="recent-info-left">
                        <GrAppsRounded className={"icon-pannel-link " + mode}
                            onClick={() => dispatch(changeShowPannel())} />
                    </div>
                    <div className={"recent-info-right " + mode}>
                        <h2 className={mode}>اخیر</h2>
                        <p className={mode}>گفتگوهای اخیر شما</p>
                    </div>
                </div>
                <div className="recent-info">
                    <div className="recent-info-left">
                        <IoIosSearch className={"icon-pannel-link " + mode} />
                    </div>
                    <div className="recent-info-right">
                        <h2 className={mode}>گفتگو</h2>
                        <p className={mode}>آغاز گفتگوی جدید</p>
                    </div>
                </div>
                <div className="recent-buttons">
                    <div className="main-buttons">
                        <button className={`main-button ${component === "contact" ? "active" : ""}`}
                            onClick={() => dispatch(changeComponent("contact"))}>
                            <p>مخاطبین</p>
                            <MdGroup className="main-button-icon" />
                        </button>
                        <button className={`main-button ${component === "call" ? "active" : ""}`}
                            onClick={() => dispatch(changeComponent("call"))}>
                            <p>تماس</p>
                            <IoCall className="main-button-icon" />
                        </button>
                        <button className={`main-button ${component === "message" ? "active" : ""}`}
                            onClick={() => dispatch(changeComponent("message"))}>
                            <p>گفتگو</p>
                            <FaMessage className="main-button-icon" />
                        </button>
                    </div>
                </div>
                {
                    component === "contact" ? <Contact /> : ""
                }
                {
                    component === "call" ? <Call /> : ""
                }
                {
                    component === "message" ? <Message /> : ""
                }
            </div>
        </Slide>
    )
}; export default Recent;