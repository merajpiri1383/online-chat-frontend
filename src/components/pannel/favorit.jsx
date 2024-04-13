import "../../static/pannel-apps/favorit.css";
// icons 
import Search from "../../static/icons/search.svg";
import Plus from "../../static/icons/plus.svg";
import Multiple from "../../static/icons/multiple.svg";
import { FaStar } from "react-icons/fa6";
// link 
import { Link } from "react-router-dom";
// dark mode imports 
import { useSelector, useDispatch } from "react-redux";
// image 
import Image from "../../images/b-382.jpg";
// change app 
import { changeApp } from "../../reducers/pannel";
// animation  
import { Slide } from "react-awesome-reveal";
// close pannel 
import {closePannel} from "../../reducers/background";
const Star = () => {
    const mode = useSelector((state) => state.background.mode);
    const dispatch = useDispatch();
    return (
        <Slide duration={300} direction="left">
            <div className="star outlet" onClick={()=> dispatch(closePannel())}>
                <div className="star-info">
                    <div className={"text " + mode}>
                        <h4>علاقه مندی</h4>
                        <p>جدیدترین ها</p>
                    </div>
                    <div className="icons">
                        <Link onClick={() => dispatch(changeApp("none"))} to={"/"} >
                            <img src={Multiple} className="icon-pannel-link" />
                        </Link>
                        <Link ><img src={Plus} className="icon-pannel-link" /></Link>
                        <Link ><img src={Search} className="icon-pannel-link" /></Link>
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
                            <FaStar className="icon-pannel star-icon" />
                        </div>
                    </div>
                    <div className="star-user">
                        <img src={Image} />
                        <div className={"star-user-text " + mode} >
                            <h4>الهام جعفری</h4>
                            <p>تهران ، تهران</p>
                        </div>
                        <div>
                            <FaStar className="icon-pannel star-icon active" />
                        </div>
                    </div>
                    <div className="star-user">
                        <img src={Image} />
                        <div className={"star-user-text " + mode} >
                            <h4>الهام جعفری</h4>
                            <p>تهران ، تهران</p>
                        </div>
                        <div>
                            <FaStar className="icon-pannel star-icon" />
                        </div>
                    </div>
                    <div className="star-user">
                        <img src={Image} />
                        <div className={"star-user-text " + mode} >
                            <h4>الهام جعفری</h4>
                            <p>تهران ، تهران</p>
                        </div>
                        <div>
                            <FaStar className="icon-pannel star-icon active" />
                        </div>
                    </div>
                    <div className="star-user">
                        <img src={Image} />
                        <div className={"star-user-text" + mode} >
                            <h4>الهام جعفری</h4>
                            <p>تهران ، تهران</p>
                        </div>
                        <div>
                            <FaStar className="icon-pannel star-icon" />
                        </div>
                    </div>
                    <div className="star-user">
                        <img src={Image} />
                        <div className={"star-user-text star-icon" + mode} >
                            <h4>الهام جعفری</h4>
                            <p>تهران ، تهران</p>
                        </div>
                        <div>
                            <FaStar className="icon-pannel star-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}; export default Star;