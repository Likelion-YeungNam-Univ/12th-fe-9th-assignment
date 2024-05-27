
const NoticeList = ({noticeList}) => {
    return(
        <div>
            {noticeList && noticeList.map((e)=>{
                return <li>{e.title}</li>
            })}
        </div>
    )
}

export default NoticeList;