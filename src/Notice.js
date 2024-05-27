import { useState } from "react";
import { Outlet } from "react-router-dom";
import NoticeList from "./NoticeList";
import NoticeCreate from "./NoticeCreate";

const Notice = () => {
    
    const [noticeList, setNoticeList] = useState([]);
    const [noticeCreate, setNoticeCreate] = useState(false);

    const handlePostNotice = (newNotice) => {
        setNoticeList([...noticeList, newNotice]);
        setNoticeCreate(false);
    };

    console.log(noticeList)
    return(
        <div>
            <h2>Notice Page</h2>
            <div>
                {noticeCreate?(
                    <NoticeCreate handlePostNotice={handlePostNotice}/>
                ):(
                    <button onClick={()=>setNoticeCreate(true)}>write</button>
                )}
            </div>
            <ul>
                <NoticeList noticeList={noticeList}></NoticeList>
            </ul>
            <Outlet/>
        </div>
    )
}

export default Notice;