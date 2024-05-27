import { Outlet, useNavigate } from "react-router-dom";
import styled from 'styled-components';

const Layout = () => {

    const navigate = useNavigate();

    const onClickNavBtn = (e) =>{
        e.preventDefault();
        const text = e.target.innerText

        // text에 따른 path로 이동
        const path = text === "home" ? "/"
                    : text === "회사소개" ? "/introduce"
                    : text === "회사목표" ? "/target"
                    : text === "공지사항" ? "/notice"
                    : "*";
        navigate(path);
    }

    return(
        <LayoutContainer>
            <Navbar>
                <Button onClick={onClickNavBtn}>home</Button>
                <Button onClick={onClickNavBtn}>회사소개</Button>
                <Button onClick={onClickNavBtn}>회사목표</Button>
                <Button onClick={onClickNavBtn}>공지사항</Button>

            </Navbar>

            {/* 중첩라우팅 */}
            <Background>
                <Outlet/>
            </Background>
        </LayoutContainer>
    )
}

const LayoutContainer = styled.div`
    width: 100%;
    height: 100vh;
`
const Navbar = styled.div`
    width: 100%;
    height: 80px;
    background-color: #282828;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Button = styled.button`
    width: 120px;
    height: 30px;
    padding: 4px 8px;
    background-color: #282828;
    border: solid #282828;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
    color: white;
`
const Background = styled.div`
    width: 80%;
    height: calc(100vh - 80px);
    margin: auto;
    display: flex;
    align-items: start;
    padding-top: 28px;
    justify-content: space-around;
    /* background-color: pink; */
`

export default Layout;