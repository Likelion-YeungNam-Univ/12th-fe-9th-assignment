import { Outlet, useNavigate } from "react-router-dom";

const Notice = () => {

    const navigate = useNavigate();
    
    const MoveToNoticeCreate = (e) => {
        e.preventDefault();
        navigate("/notice/write");
    }

    return(
        <div>
            <h2>Notice Page</h2>
            <div>
                <button onClick={MoveToNoticeCreate}>write</button>
            </div>
            <Outlet/>
        </div>
    )
}

export default Notice;