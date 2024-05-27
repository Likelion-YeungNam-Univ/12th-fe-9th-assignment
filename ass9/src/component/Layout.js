import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Layout=()=>{
    const navigate = useNavigate();

    
    const onClickHomeButton = (e) => {
        e.preventDefault();
        navigate('/home');
    }

    const onClickNoticeButton = (e) => {
        e.preventDefault();
        navigate('/notice');
    }

    const onClickinfoButton = (e) => {
        e.preventDefault();
        navigate('/info');
    }


    
    const onClickgoalButton =(e)=>{
        e.preventDefault();
        navigate('/goal');
    }
    return(
        <div>
            <div className="wrapper">
                <button onClick={onClickHomeButton}>home</button> 
                <button onClick={onClickNoticeButton}>notice</button>
                <button onClick={onClickinfoButton}>info</button>
                <button onClick={onClickgoalButton}>goal</button> 
               
            </div>
            <div className="content">
              <Outlet /> 
            </div>
        </div>
    );


}

export default Layout;