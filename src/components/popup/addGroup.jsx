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

    const [info, setInfo] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const submitHandeler = async (e) => {
        const form = new FormData();
        form.append("name", info.name);
        form.append("image", info.image);
        e.preventDefault();
        console.log("submit")
        await API.post("/group/", form).then((response) => {
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


    return (
        <Slide duration={200} direction="right">
            <form onSubmit={submitHandeler} className="popup">

                <h3 className="popup-title">افزودن گروه</h3>

                <input type="text" placeholder="نام گروه" className="popup-input" required
                    onChange={(e) => setInfo(Object.assign(info, { name: e.target.value }))} value={info.name} />

                <input type="file" className="popup-input" required accept="image/*"
                    onChange={(e) => setInfo(Object.assign(info, { image: e.target.files[0] }))} />

                <button type="submit" className="popup-button">ذخیره</button>
            </form>
        </Slide>
    )
}; export default AddGroup;