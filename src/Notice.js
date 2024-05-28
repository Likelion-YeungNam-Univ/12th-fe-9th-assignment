
import { useState } from "react";
import NoticeList from "./NoticeList";
import NoticeCreate from "./NoticeCreate";

const Notice = () => {
    
    const [noticeList, setNoticeList] = useState([]);
    const [noticeCreate, setNoticeCreate] = useState(false);

    const handlePostNotice = (newNotice) => {
        setNoticeList([...noticeList, newNotice]);
        setNoticeCreate(false);
    };

    const deleteNotice = (id) => {
        const newNoticeList = noticeList.filter((e)=>{
            if(e.id === id){
                return false;
            } else{
                return true;
            }
        })
        setNoticeList(newNoticeList);
    }

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

            {/* notice 생성 중에 공지 리스트 안보이도록 함 */}
            {!noticeCreate && <ul>
                <NoticeList noticeList={noticeList} deleteNotice={deleteNotice}></NoticeList>
            </ul>}

        </div>
    )
}

export default Notice;