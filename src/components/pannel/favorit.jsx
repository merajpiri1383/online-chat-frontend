import "../../static/pannel-apps/favorit.css";
// icons 
import { CiCircleRemove } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
// link 
import { Link } from "react-router-dom";
// dark mode imports 
import { useSelector } from "react-redux";
// image 
import Image from "../../images/b-382.jpg";
const Star = () => {
    const mode = useSelector((state) => state.background.mode);
    return (
        <div className="star outlet">
            <div className="star-info">
                <div className={"text " + mode}>
                    <h4>علاقه مندی</h4>
                    <p>جدیدترین ها</p>
                </div>
                <div className="icons">
                    <Link to={"/"} className={"icon " + mode}><CiCircleRemove /></Link>
                    <Link className={"icon " + mode}><CiCirclePlus /></Link>
                    <Link className={"icon " + mode}><CiSearch /></Link>
                </div>
            </div>
            <div className="star-users">
                <div className="star-user">
                    <img src={Image} />
                    <div className={"star-user-text " + mode} >
                        <h4>الهام جعفری</h4>
                        <p>تهران ، تهران</p>
                    </div>
                    <div>
                        <FaStar className="star-icon" />
                    </div>
                </div>
                <div className="star-user">
                    <img src={Image} />
                    <div className={"star-user-text " + mode} >
                        <h4>الهام جعفری</h4>
                        <p>تهران ، تهران</p>
                    </div>
                    <div>
                        <FaStar className="star-icon" />
                    </div>
                </div>
                <div className="star-user">
                    <img src={Image} />
                    <div className={"star-user-text " + mode} >
                        <h4>الهام جعفری</h4>
                        <p>تهران ، تهران</p>
                    </div>
                    <div>
                        <FaStar className="star-icon" />
                    </div>
                </div>
                <div className="star-user">
                    <img src={Image} />
                    <div className={"star-user-text " + mode} >
                        <h4>الهام جعفری</h4>
                        <p>تهران ، تهران</p>
                    </div>
                    <div>
                        <FaStar className="star-icon" />
                    </div>
                </div>
                <div className="star-user">
                    <img src={Image} />
                    <div className={"star-user-text " + mode} >
                        <h4>الهام جعفری</h4>
                        <p>تهران ، تهران</p>
                    </div>
                    <div>
                        <FaStar className="star-icon" />
                    </div>
                </div>
                <div className="star-user">
                    <img src={Image} />
                    <div className={"star-user-text " + mode} >
                        <h4>الهام جعفری</h4>
                        <p>تهران ، تهران</p>
                    </div>
                    <div>
                        <FaStar className="star-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}; export default Star;