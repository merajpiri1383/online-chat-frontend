// icon 
import { CiCircleRemove } from "react-icons/ci";
// style 
import "../../static/pannel-apps/status.css";
// image 
import Image1 from "../../images/b-314.jpg";
import Image2 from "../../images/b-398.jpg";
// imports 
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Status = () => {
    const mode = useSelector((state)=> state.background.mode) ;
    return (
        <div className="status outlet">
            <div className="status-info-me">
                <div className="link">
                <Link to={"/"} className="icon">&times;</Link>
                </div>
                <div className={"text " + mode}>
                    <h3>وضعیت های من</h3> 
                    <p>برای بروزرسانی وضعیت خود روی علامت (+) کلیک کنید.</p>
                </div>
                <img src={Image1} />
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
    )
}; export default Status;