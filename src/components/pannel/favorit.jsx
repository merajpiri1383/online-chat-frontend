import "../../static/pannel-apps/favorit.css";
// icons 
import Plus from "../../static/icons/plus.svg";
import Multiple from "../../static/icons/multiple.svg";
import { FaStar } from "react-icons/fa6";
import { FaUserLarge } from "react-icons/fa6";
// link 
import { Link, useLocation, useNavigate } from "react-router-dom";
// dark mode imports 
import { useSelector, useDispatch } from "react-redux";
// change app 
import { changeApp } from "../../reducers/pannel";
// animation  
import { Slide } from "react-awesome-reveal";
// close pannel 
import { closePannel } from "../../reducers/background";
// API 
import API,{setAccessWhen401} from "../../authentication/auth";
// react tools 
import { useEffect, useState } from "react";
// pop up 
import AddFavoritPopUp from "../popup/addFavorit";
import Popup from "reactjs-popup";
// react tostify
import { toast } from "react-toastify";
// react redux toolkit 
import { userToggle } from "../../reducers/user";




const Star = () => {

    const mode = useSelector((state) => state.background.mode);
    const dispatch = useDispatch();
    const toggleUser = useSelector((state) => state.user.toggle);
    const [results, setResults] = useState([]);
    const navigate = useNavigate() ;
    const location = useLocation();

    const getFavoritList = async () => {
        await API.get("/user/favorits/").then((response) => {
            setResults(response.data);
        }).catch((error) => {
            console.log(error.response.data)
        })
    };
    
    const deleteFromFavorit = async (item) => {
        console.log("delete is handle")
        await API.delete("/user/favorits/", {data:{ "phone": item.phone }}).then((response) => {
            console.log("success")
            dispatch(userToggle());
            toast.info(item.phone + ` از علاقه مندی ها حذف شد `)
        }).catch((error) => {
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
                console.log(error.response.data)
            } catch { }
        })
    };

    useEffect(() => {
        getFavoritList();
        console.log("togglling")
    }, [toggleUser])

    return (
        <Slide duration={300} direction="left">
            <div className="star outlet" onClick={() => dispatch(closePannel())}>
                <div className="star-info">
                    <div className={"text " + mode}>
                        <h4>علاقه مندی</h4>
                        <p>جدیدترین ها</p>
                    </div>
                    <div className="icons">
                        <Link onClick={() => dispatch(changeApp("none"))} to={"/"} >
                            <img src={Multiple} className="icon-pannel-link" />
                        </Link>
                        <Popup modal nested trigger={<Link ><img src={Plus} className="icon-pannel-link" /></Link>}>
                            <AddFavoritPopUp />
                        </Popup>
                    </div>
                </div>
                <div className="star-users">
                    {
                        results && results.map((item, index) => {
                            console.log(item.profile.image)
                            return (
                                <Slide duration={200} direction="right">
                                    <div className="star-user">
                                        {
                                            item.profile.image ? <img src={item.profile.image} /> :
                                             <FaUserLarge className="icon-pannel-link" /> 
                                        }
                                        <div className={"star-user-text " + mode} >
                                            <h4>
                                                {
                                                    item.profile.username || item.phone
                                                }
                                            </h4>
                                        </div>
                                        <div>
                                            <FaStar onClick={() => deleteFromFavorit(item)} className="icon-pannel star-icon active" />
                                        </div>
                                    </div>
                                </Slide>
                            )
                        })
                    }
                </div>
            </div>
        </Slide>
    )
}; export default Star;