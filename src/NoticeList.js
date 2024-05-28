
import NoticeItem from "./NoticeItem";

const NoticeList = ({noticeList, deleteNotice}) => {


    return(
        <div>
            {noticeList && noticeList.map((e)=>{
                return (
                    <div key={e.id}>
                        <NoticeItem notice={e} deleteNotice={deleteNotice}/>
                    </div>
                )
            })}
        </div>
    )
}

export default NoticeList;