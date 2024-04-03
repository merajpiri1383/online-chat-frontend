// style 
import "../../static/pannel-apps/events.css";
// animation 
import { Slide } from "react-awesome-reveal";
// react router dom 
import { Link } from "react-router-dom";
// icon
import { CiCircleRemove } from "react-icons/ci";
// react redux 
import { useSelector, useDispatch } from "react-redux";
// change app in store
import { changeApp } from "../../reducers/pannel";
import Image from "../../images/b-345.jpg";
const Events = () => {
    const mode = useSelector((state) => state.background.mode);
    const dispatch = useDispatch();
    return (
        <Slide direction="left" duration={300}>
            <div className="events outlet">
                <div className="events-info ">
                    <Link to={"/"} onClick={() => dispatch(changeApp("none"))}>
                        <CiCircleRemove className="icon-pannel-link" />
                    </Link>
                    <div className="events-info-text">
                        <h2 className={mode}>اعلان ها</h2>
                        <p>لیست اعلان های من</p>
                    </div>
                </div>
                <div className="users">
                    <div className="user">
                        <p>اکنون</p>
                        <div className="text">
                            <h5 className={mode} >الهام جعفری</h5>
                            <h4 className={mode} >آپلود تصاویر جدید</h4>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                        </div>
                        <div className="image">
                            <img src={Image} />
                        </div>
                    </div>
                    <div className="user">
                        <p>اکنون</p>
                        <div className="text">
                            <h5 className={mode} >الهام جعفری</h5>
                            <h4 className={mode} >آپلود تصاویر جدید</h4>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                        </div>
                        <div className="image">
                            <img src={Image} />
                        </div>
                    </div>
                    <div className="user">
                        <p>اکنون</p>
                        <div className="text">
                            <h5 className={mode} >زهرا مرادی </h5>
                            <h4 className={mode} >آپلود تصاویر جدید</h4>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                        </div>
                        <div className="image">
                            <img src={Image} />
                        </div>
                    </div>
                    <div className="user">
                        <p>5 ساعت قبل</p>
                        <div className="text">
                            <h5 className={mode} >الهام جعفری</h5>
                            <h4 className={mode} >ارسال نظر برای عکس</h4>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>
                        </div>
                        <div className="image">
                            <img src={Image} />
                        </div>
                    </div>
                </div>
            </div>
        </Slide>
    )
}; export default Events;