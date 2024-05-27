import React from "react";
import NoticeListItem from "./NoticeListItem";

const NoticeList = ({posts, deletePost}) => {
    return(
        <>
            {posts && posts.prototype.map((e)=>(
                <NoticeListItem id={e.id} body={e.body} deletePost={deletePost}/>
            ))}
        </>
    )
}

export default NoticeList;