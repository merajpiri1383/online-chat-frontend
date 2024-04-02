// style 
import "../../static/pannel-apps/documents.css";
// icons 
import { CiCircleRemove } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { IoDocumentText } from "react-icons/io5";
import { GoDownload } from "react-icons/go";
// react router dom 
import { Link } from "react-router-dom";
// dark mode 
import { useSelector } from "react-redux";
const Documents = () => {
    const mode = useSelector((state) => state.background.mode);
    return (
        <div className="document outlet">
            <div className="document-info">
                <div className={"document-text " + mode}>
                    <h2>اسناد</h2>
                    <p>لیست اسناد و فایلها</p>
                </div>
                <div className="document-icons">
                    <Link  ><CiSearch className={"icon " + mode} /></Link>
                    <Link to={"/"} ><CiCircleRemove className={"icon " + mode} /></Link>
                </div>
            </div>
            <div className="document-files">
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon " + mode} /></div>
                </div>
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon " + mode} /></div>
                </div>
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon " + mode} /></div>
                </div>
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon " + mode} /></div>
                </div>
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon " + mode} /></div>
                </div>
                <div className="document-file">
                    <div><IoDocumentText className={"icon-file " + mode} /></div>
                    <div className={"doument-file-info " + mode}>
                        <h3>messenger .html</h3>
                        <p>2 فروردین 1401</p>
                    </div>
                    <div><GoDownload className={"icon " + mode} /></div>
                </div>
            </div>
        </div>
    )
}; export default Documents;