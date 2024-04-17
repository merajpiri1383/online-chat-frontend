// redux react 
import { changeGroup, groupToggle } from "../../reducers/group";
import { useSelector,useDispatch } from "react-redux";
import { changePage,changeChatType } from "../../reducers/page";
// react tools 
import {useState,useEffect} from "react";
// import API
import API, { setAccessWhen401, getCurrentUser } from "../../authentication/auth";
import { useLocation, useNavigate } from "react-router-dom";


const Groups = () => {

    const [info, setInfo] = useState({});
    const ToggleGroup = useSelector((state) => state.group.toggle);
    const [groups, setGroups] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.background.mode);

    const submitHandeler = async (e) => {
        const form = new FormData();
        form.append("name",info.name);
        form.append("image",info.image);
        e.preventDefault();
        console.log("submit")
        await API.post("/group/",form).then((response) => {
            console.log(response.data)
            setInfo({})
            dispatch(groupToggle());
        }).catch((error) => {
            dispatch(groupToggle());
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
            } catch { }
        })
    };

    const getGroups = async () => {
        await API.get("/group/").then((response) => {
            setGroups(response.data);
            console.log(response.data)
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
        dispatch(changeGroup({...group}));
        dispatch(changePage("chat"))
    };

    useEffect(() => {
        getGroups();
    }, [ToggleGroup])

    return (
        <div>
            <div className="message-content">
                {
                    groups.map((group, index) => {
                        return (
                            <div className="user" key={index} onClick={() => groupClick(group)} >
                                <div className="user-time">
                                    <p className="count">
                                        {
                                            group.messages.length > 0 && group.messages.length
                                        }
                                    </p>
                                </div>
                                <div className="user-text">
                                    <h3 className={mode}>{group.name}</h3>
                                    <p>
                                        {
                                            group.messages[group.messages.length - 1].text
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
            </div>
            <form onSubmit={submitHandeler} className="add-group">
                <h3>افزودن گروه</h3>
                <input type="text" placeholder="نام گروه" className="add-group-input" required 
                onChange={(e) => setInfo(Object.assign(info,{name:e.target.value}))} value={info.name} />
                <input type="file" className="add-group-input" required accept="image/*"
                onChange={(e) => setInfo(Object.assign(info,{image:e.target.files[0]}))} />
                <button type="submit" className="add-group-button">ذخیره</button>
            </form>
        </div>
    )
}; export default Groups;