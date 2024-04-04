import "../../static/pannel-apps/favorit.css";
// icons 
import { CiCircleRemove } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
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
                            <CiCircleRemove className={"icon-pannel-link " + mode} />
                        </Link>
                        <Link ><CiCirclePlus className={"icon-pannel-link " + mode} /></Link>
                        <Link ><CiSearch className={"icon-pannel-link " + mode} /></Link>
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