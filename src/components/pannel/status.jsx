// icon 
import Multiple from "../../static/icons/multiple.svg";
// style 
import "../../static/pannel-apps/status.css";
// image 
import Image1 from "../../images/b-314.jpg";
import Image2 from "../../images/b-398.jpg";
// imports 
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// change app 
import { changeApp } from "../../reducers/pannel";
// animate 
import { Slide } from "react-awesome-reveal";
// close pannel 
import {closePannel} from "../../reducers/background";
const Status = () => { 
    const mode = useSelector((state) => state.background.mode);
    const dispatch = useDispatch();
    return (
        <Slide duration={300} direction="left">
            <div className="status outlet" onClick={()=> dispatch(closePannel())}>
                <div className="status-info-me">
                    <div>
                        <Link onClick={() => dispatch(changeApp("none"))} to={"/"}>
                            <img src={Multiple} className="icon-pannel-link" />
                        </Link>
                    </div>
                    <div className={"text " + mode}>
                        <h3>وضعیت های من</h3>
                        <p>برای بروزرسانی وضعیت خود روی علامت (+) کلیک کنید.</p>
                    </div>
                    <div className="status-info-img"><img src={Image1} /></div>
                </div>
                <div className="updates">
                    <h3>آخرین بروزرسانی ها</h3>
                    <div className="users">
                        <div className="user">
                            <img src={Image2} />
                            <div className={"user-text " + mode}>
                                <h4>سعید مظفری</h4>
                                <p>امروز ، 8:30 صبح</p>
                            </div>
                        </div>
                        <div className="user">
                            <img src={Image2} />
                            <div className={"user-text " + mode}>
                                <h4>سعید مظفری</h4>
                                <p>امروز ، 8:30 صبح</p>
                            </div>
                        </div>
                        <div className="user">
                            <img src={Image2} />
                            <div className={"user-text " + mode}>
                                <h4>سعید مظفری</h4>
                                <p>امروز ، 8:30 صبح</p>
                            </div>
                        </div>
                        <div className="user">
                            <img src={Image2} />
                            <div className={"user-text " + mode}>
                                <h4>سعید مظفری</h4>
                                <p>امروز ، 8:30 صبح</p>
                            </div>
                        </div>
                        <div className="user">
                            <img src={Image2} />
                            <div className={"user-text " + mode}>
                                <h4>سعید مظفری</h4>
                                <p>امروز ، 8:30 صبح</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Slide>
    )
}; export default Status;