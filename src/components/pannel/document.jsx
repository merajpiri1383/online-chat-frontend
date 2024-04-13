// style 
import "../../static/pannel-apps/documents.css";
// icons 
import Multiple from "../../static/icons/multiple.svg";
import Search from "../../static/icons/search.svg";
import { IoDocumentText } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
// react router dom 
import { Link } from "react-router-dom";
// dark mode 
import { useSelector ,useDispatch } from "react-redux";
// change app 
import {changeApp} from "../../reducers/pannel";
// animation 
import { Slide } from "react-awesome-reveal";
// close pannel 
import {closePannel} from "../../reducers/background";
const Documents = () => {
    const mode = useSelector((state) => state.background.mode);
    const  dispatch = useDispatch();
    return (
        <Slide duration={300} direction="left" >
            <div className="document outlet" onClick={()=> dispatch(closePannel())}>
            <div className="document-info">
                <div className={"document-text " + mode}>
                    <h2>اسناد</h2>
                    <p>لیست اسناد و فایلها</p>
                </div>
                <div className="document-icons">
                    <Link  ><img src={Search} className={"icon-pannel-link " + mode} /></Link>
                    <Link onClick={()=>dispatch(changeApp("none"))} 
                    to={"/"} ><img className="icon-pannel-link" src={Multiple} /></Link>
                </div>
            </div>
            <div className="document-files">
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon-pannel " + mode} /></div>
                </div>
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon-pannel " + mode} /></div>
                </div>
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon-pannel " + mode} /></div>
                </div>
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon-pannel " + mode} /></div>
                </div>
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon-pannel " + mode} /></div>
                </div>
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon-pannel " + mode} /></div>
                </div>
            </div>
        </div>
        </Slide>
    )
}; export default Documents;