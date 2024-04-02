import { GrAppsRounded } from "react-icons/gr";
import "../../static/pannel-apps/recent.css";
import { useSelector,useDispatch } from "react-redux";
import { changeShowPannel } from "../../reducers/background";
import RecentSlider from "./recentSlider";
const Recent = () => {
    const mode = useSelector((state)=> state.background.mode);
    const dispatch = useDispatch() ;
    return (
        <div className="recent">
            <div className="recent-info-top">
                <div className="recent-info-top-left">
                    <GrAppsRounded className={"recent-info-top-left-icon " + mode} 
                    onClick={()=> dispatch(changeShowPannel())} />
                </div>
                <div className={"recent-info-top-right " + mode}>
                    <h2 className={mode}>اخیر</h2>
                    <p className={mode}>گفتگوهای اخیر شما</p>
                </div>
            </div>
        </div>
    )
}; export default Recent;