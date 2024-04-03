// icon
import { FaAngleLeft } from "react-icons/fa";
// change current component
import { changeCurrent } from "../../reducers/settings";
import { useDispatch } from "react-redux";
// react reveal 
import {Slide} from "react-awesome-reveal";
const Account = () => {
    const dispatch = useDispatch();
    return (
        <Slide duration={300} direction="left">
            <div className="settings-info">
                <div onClick={()=>dispatch(changeCurrent("none"))}>
                    <FaAngleLeft className="icon-pannel" />
                </div>
                <h3>حساب کاربری</h3>
            </div>
        </Slide>
    )
};export default Account;