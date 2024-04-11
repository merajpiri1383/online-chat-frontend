// icon
import { FaAngleLeft } from "react-icons/fa";
// import { LiaToggleOnSolid } from "react-icons/lia";
// import { LiaToggleOffSolid } from "react-icons/lia";
// change current component
import { changeCurrent } from "../../reducers/settings";
import { useDispatch } from "react-redux";
// react reveal 
import {Slide} from "react-awesome-reveal";
const Chat = () => {
    const dispatch = useDispatch();
    return (
        <Slide duration={300} direction="left">
            <div className="settings-info">
                <div onClick={()=>dispatch(changeCurrent("none"))}>
                    <FaAngleLeft className="icon-pannel" />
                </div>
                <h3>گفتگو</h3>
            </div>
            <div className="settings-section">
                <h5 className="settings-title">پشتیبانگیری از گفتگوها</h5>
                <div className="settings-group">
                    <h6 className="settings-title"></h6>
                    
                </div>
            </div>
        </Slide>
    )
};export default Chat;