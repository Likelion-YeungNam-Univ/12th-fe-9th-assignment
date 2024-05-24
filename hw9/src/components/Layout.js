import {Outlet} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';



const Layout=()=>{
    
    const navigate=useNavigate();

    const onClickHomeBtn=(e)=>{
        navigate('/home');
    }

    const onClickAboutBtn=(e)=>{
        navigate('/about');
    }

    const onClickTechServiceBtn=(e)=>{
        navigate('/techService');
    }

    const onClickNoticeBtn=(e)=>{
        navigate('/notice');
    }

    return(
        <NavBar>
            <div className="title.logo"></div>
            <div className="navBtn">
                <Button onClick={onClickHomeBtn}>소개</Button>
                <Button onClick={onClickAboutBtn}>목표</Button>
                <Button onClick={onClickTechServiceBtn}>기술과서비스</Button>
                <Button onClick={onClickNoticeBtn}>공지사항</Button>
            </div>
        <Outlet/>
        </NavBar>
    );
}

const NavBar =styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    border: none;
    color: #000;
    width: 100px;
    height:40px;
    margin:10px;
    font-size: medium;
    font-weight: 200;
`;
export default Layout;