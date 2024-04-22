// redux react 
import { changeGroup, groupToggle } from "../../reducers/group";
import { useSelector, useDispatch } from "react-redux";
import { changePage, changeChatType } from "../../reducers/page";
// react tools 
import { useState, useEffect } from "react";
// import API
import API, { setAccessWhen401, getCurrentUser } from "../../authentication/auth";
import { useLocation, useNavigate } from "react-router-dom";
// react popup 
import Popup from "reactjs-popup";
import AddGroup from "../popup/addGroup";


const Groups = () => {

    const [info, setInfo] = useState({});
    const ToggleGroup = useSelector((state) => state.group.toggle);
    const [groups, setGroups] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.background.mode);



    const getGroups = async () => {
        await API.get("/group/").then((response) => {
            setGroups(response.data);
        }).catch((error) => {
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
            } catch { }
        })
    };

    const groupClick = (group) => {
        dispatch(changeChatType("group"))
        dispatch(changeGroup({ ...group }));
        dispatch(changePage("chat"))
        dispatch(groupToggle());
    };

    useEffect(() => {
        getGroups();
    }, [ToggleGroup])

    return (
        <div className="message-content">
            {
                groups.map((group, index) => {
                    return (
                        <div className="user" key={index} onClick={() => groupClick(group)} >

                            <div className="user-time">
                                {
                                    group.un_read_messages.length > 0 && <p className="count">
                                        {group.un_read_messages.length}
                                    </p>
                                }
                            </div>
                            <div className="user-text">
                                <h3 className={mode}>{group.name}</h3>
                                <p>
                                    {
                                        group.messages[group.messages.length - 1] && group.messages[group.messages.length - 1].text
                                    }
                                </p>
                            </div>
                            <div className="user-img">
                                <img src={group.image} />
                            </div>
                        </div>
                    )
                })
            }
            <div className="add-group-button">
                <Popup modal nested trigger={<button>افزودن گروه</button>}>
                    <AddGroup />
                </Popup>
            </div>
        </div>
    )
}; export default Groups;