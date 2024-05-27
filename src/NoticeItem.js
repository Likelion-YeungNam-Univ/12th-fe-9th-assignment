import { useState } from "react";

const NoticeItem = ({notice}) => {

    const [isRead, setIsRead] = useState(false);

    return(
        <div>
            {isRead?(
                <div>
                    <h2>{notice.title}</h2>
                    <p>{notice.content}</p>
                    <button onClick={()=>setIsRead(false)}>back</button>
                </div>
            ):(
                <div>
                    <p>{notice.title}</p>
                    <button onClick={()=>setIsRead(true)}>read</button>
                </div>
            )}

            
        </div>
    )
}

export default NoticeItem;