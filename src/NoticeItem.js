import { useState } from "react";

const NoticeItem = ({notice}) => {

    const [isRead, setIsRead] = useState(false);
    const [isModified, setIsModified] = useState(false);
    const [titleUpdate, setTitleUpdate] = useState(notice.title);
    const [contentUpdate, setContentUpdate] = useState(notice.content);

        
    const newtitle = (e) => {
        setTitleUpdate(e.target.value)
    }
    const newcontent = (e) => {
        setContentUpdate(e.target.value)
    }

    return(
        <div>
            {isRead?(
                <div>
                    {isModified?(
                        <>
                            <input type="text" onChange={newtitle} value={titleUpdate}></input>
                            <input type="text" onChange={newcontent} value={contentUpdate}></input>
                            <button onClick={()=>setIsModified(false)}>post</button>
                        </>
                    ):(
                        <>
                            <h2>{titleUpdate}</h2>
                            <p>{contentUpdate}</p>
                            <button onClick={()=>setIsModified(true)}>modify</button>
                            <button onClick={()=>setIsRead(false)}>back</button>
                        
                        </>
                )}
                </div>
            ):(
                <div>
                    <p>{titleUpdate}</p>
                    <button onClick={()=>setIsRead(true)}>read</button>
                </div>
            )}

            
        </div>
    )
}

export default NoticeItem;