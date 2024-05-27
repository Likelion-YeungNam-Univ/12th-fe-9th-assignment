// import { useNavigate } from "react-router-dom";
import NoticeItem from "./NoticeItem";

const NoticeList = ({noticeList}) => {

    // const navigate = useNavigate();

    // const handleRead = (id)=>{
    //     navigate(`/notice/${id}`);
    // }

    return(
        <div>
            {noticeList && noticeList.map((e)=>{
                return (
                    <div key={e.id}>
                        <NoticeItem notice={e}/>
                    </div>
                )
            })}
        </div>
    )
}

export default NoticeList;