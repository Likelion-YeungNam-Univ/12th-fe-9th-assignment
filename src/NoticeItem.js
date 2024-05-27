import { useState } from "react";
import { useParams } from "react-router-dom";

const NoticeItem = ({notice}) => {

    const {id} = useParams();

    const [isRead, setIsRead] = useState(false);

    return(
        <div>
            <h3>{id}</h3>
            {isRead?(
                <div>
                    <h2>{notice.title}</h2>
                    <p>{notice.content}</p>
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