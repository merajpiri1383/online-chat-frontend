// style
import "../../static/sub_pannels/message.css";
// react redux 
import { useSelector, useDispatch } from "react-redux";
import { changeMode, changeUser } from "../../reducers/messageSubPannlel";
import { changeContact } from "../../reducers/contact";
import {changePage} from "../../reducers/page";
// animation 
import { Slide } from "react-awesome-reveal";
// image 
import Image from "../../images/b-382.jpg";
const Message = () => {
    const dispatch = useDispatch();
    // to show witch component should show 
    const currentMode = useSelector((state) => state.message_sub_pannel.mode);
    // dark or light mode 
    const mode = useSelector((state) => state.background.mode);
    // change state of contact 
    const userClick = (name,online)=>{
        dispatch(changeContact({name,online}));
        dispatch(changePage("chat"));
    };
    return (
        <div className="message sub-pannel">
            <div className="message-type">
                <p onClick={() => dispatch(changeMode("group"))}
                    className={currentMode === "group" ? "active" : ""}>گروه ها</p>
                <p onClick={() => dispatch(changeMode("personal"))}
                    className={currentMode === "personal" ? "active" : ""}>پیام خصوصی</p>
            </div>
            {
                currentMode === "personal" ? <Slide duration={300}>
                    <div className="message-content">
                        <div className="user" onClick={()=>userClick("dfd",2)}>
                            <div className="user-time">
                                <p className={mode}>1401/01/01</p>
                                <p className="seen">دیده شده</p>
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>الهام جعفری 2</h3>
                                <p>لورم ایپسوم متن ساختگی با </p>
                            </div>
                            <div className="user-img">
                                <img src={Image} />
                            </div>
                        </div>
                        <div className="user" onClick={()=>userClick("user 2",false)}>
                            <div className="user-time">
                                <p className={mode}>1401/01/01</p>
                                <p className="count">8</p>
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>الهام جعفری 3</h3>
                                <p className="typing">....در حال نوشتن پیام </p>
                            </div>
                            <div className="user-img">
                                <img src={Image} />
                            </div>
                        </div>
                        <div className="user" onClick={()=>userClick("user 3",true)}>
                            <div className="user-time">
                                <p className={mode}>1401/01/01</p>
                                <p className="count">8</p>
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>الهام جعفری</h3>
                                <p className="typing">....در حال نوشتن پیام </p>
                            </div>
                            <div className="user-img">
                                <img src={Image} />
                            </div>
                        </div>
                        <div className="user" onClick={()=>userClick("user 4",false)}>
                            <div className="user-time">
                                <p className={mode}>1401/01/01</p>
                                <p className="count">8</p>
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>الهام جعفری</h3>
                                <p className="typing">....در حال نوشتن پیام </p>
                            </div>
                            <div className="user-img">
                                <img src={Image} />
                            </div>
                        </div>
                    </div>
                </Slide> : ""
            }
            {
                currentMode === "group" ? <Slide duration={300}>
                    <div className="message-content">
                        <div className="user">
                            <div className="user-time">
                                <p className="count">35</p>
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>الهام جعفری</h3>
                                <p>لورم ایپسوم متن ساختگی با </p>
                            </div>
                            <div className="user-img">
                                <img src={Image} />
                            </div>
                        </div>
                        <div className="user">
                            <div className="user-time">
                                <p className="count">35</p>
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>الهام جعفری</h3>
                                <p>لورم ایپسوم متن ساختگی با </p>
                            </div>
                            <div className="user-img">
                                <img src={Image} />
                            </div>
                        </div>
                        <div className="user">
                            <div className="user-time">
                                <p className="count">35</p>
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>الهام جعفری</h3>
                                <p>لورم ایپسوم متن ساختگی با </p>
                            </div>
                            <div className="user-img">
                                <img src={Image} />
                            </div>
                        </div>
                    </div>
                </Slide> : ""
            }
        </div>
    )
}; export default Message;