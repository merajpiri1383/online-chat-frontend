import { Slide } from "react-awesome-reveal";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import API, { getCurrentUser ,setAccessWhen401 } from "../../authentication/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { changeBlock } from "../../reducers/contact";
import { changePage , changeShowPannel} from "../../reducers/page";
import { deleteUserToggle } from "../../reducers/messageSubPannlel";


const MoreNavbar = () => {

    const group = useSelector((state) => state.group);
    const contact = useSelector((state) => state.contact);
    const chatType = useSelector((state) => state.page.chat_type);
    const mode = useSelector((state) => state.background.mode);
    const [currentUser, setCurrentUser] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const blockUser = async () => {
        console.log("block user")
        await API.post("/user/blacklist/", { "phone": contact.phone }).then((response) => {
            dispatch(changeBlock(true));
            toast.success("کاربر مسدود شد")
        }).catch((error) => {
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
            } catch { }
        })
    };

    const unBlockUser = async () => {
        await API.delete("/user/blacklist/",{data:{"phone":contact.phone}}).then((response) => {
            console.log(response.data)
            dispatch(changeBlock(false));
            toast.success("کاربرد غیر مسدود شد")
        }).catch((error) => {
            try {
                if (error.response.status === 401) {
                    setAccessWhen401(navigate, location.pathname);
                }
            } catch { } 
        })
    };

    const deleteChat = async () => {
        if ( contact.chat_id ) {
            await API.delete(`/chat/${contact.chat_id}/`).then( ( response ) => { 
                toast.success("گفتگو با موفقیت حذف شد ");
                dispatch(deleteUserToggle());
                window.screen.width > 992 ? dispatch(changePage("auth")) : dispatch(changePage("none")); 
                dispatch(changeShowPannel(true));

            } ).catch( ( error ) => {
                try {
                    if (error.response.status === 401) {
                        setAccessWhen401(navigate, location.pathname);
                    }
                } catch { }
            } )
        }
    };

    useEffect(() => {
        getCurrentUser(setCurrentUser, navigate, location);
    }, [])

    if (currentUser.blacklist) {
        currentUser.blacklist.filter((user) => {
            dispatch(changeBlock(true));
        })
    }



    return (
        <Slide duration={200} direction="left">
            <div className={`popup ${mode}`}>
                {
                    chatType === "chat" && <div className="popup-list">
                        {
                            contact.blocked && <p onClick={() => unBlockUser()} 
                            className="popup-list-item popup-blue">غیر مسدود کردن کاربر</p>
                        }
                        {
                            !contact.blocked && <p onClick={() => blockUser()} className="popup-list-item "> مسدود کردن کاربر</p>
                        }
                        <p onClick={()=> deleteChat()} className="popup-list-item popup-danger">حذف</p>
                    </div>
                }
                {
                    chatType === "group" && <div className="popup-list">
                        <p className="popup-list-item">افزودن به گروه</p>
                        <p className="popup-list-item popup-danger">خروج از گروه</p>
                    </div>
                }
            </div>
        </Slide>
    )
}; export default MoreNavbar;