import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate();

    const home = (e) => {
        e.preventDefault();
        navigate("/");
    }
    const Info = (e) => {
        e.preventDefault();
        navigate("/info");
    }
    const Target = (e) => {
        e.preventDefault();
        navigate("/target");
    }
    const Notice = (e) => {
        e.preventDefault();
        navigate("/notice");
    }

    return(
        <div>
            <div>
                <button onClick={home}>home</button>
                <button onClick={Info}>회사소개</button>
                <button onClick={Target}>회사목표</button>
                <button onClick={Notice}>공지사항</button>
            </div>
            <Outlet/>
        </div>
    )
}

export default Layout;