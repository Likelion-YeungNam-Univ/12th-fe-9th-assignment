const NoticeListItem = (id, body, deletePost) => {
    return(
        <li>
            <p>{body}</p>
            <button id={id} onClick={deletePost}>삭제</button>
        </li>
    )
}

export default NoticeListItem;