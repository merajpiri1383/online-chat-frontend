// redux react 
import { groupToggle } from "../../reducers/group";
import { useDispatch } from "react-redux";
// react tools 
import { useState } from "react";
// import API
import API, { setAccessWhen401 } from "../../authentication/auth";
import { useLocation, useNavigate } from "react-router-dom";
// react reveal 
import { Slide } from "react-awesome-reveal";





const AddGroup = () => {

    const [file,setFile] = useState(null);
    const [groupName,setGroupName] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandeler = async (e) => {
        const form = new FormData();
        form.append("name", groupName);
        form.append("image", file);
        e.preventDefault();
        console.log("submit")
        await API.post("/group/", form).then((response) => {
            console.log(response.data)
            setFile(null);
            setGroupName("");
            dispatch(groupToggle());
        }).catch((error) => {
            dispatch(groupToggle());
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
                console.log(error.response.data)
            } catch { }
        })
    };


    return (
        <Slide duration={200} direction="right">
            <form onSubmit={submitHandeler} className="popup">

                <h3 className="popup-title">افزودن گروه</h3>

                <input type="text" placeholder="نام گروه" className="popup-input" required
                    onChange={(e) => setGroupName(e.target.value)} value={groupName} />

                <input type="file" className="popup-input" required accept="image/*"
                    onChange={(e) => setFile(e.target.files[0]) }  />

                <button type="submit" className="popup-button">ذخیره</button>
            </form>
        </Slide>
    )
}; export default AddGroup;