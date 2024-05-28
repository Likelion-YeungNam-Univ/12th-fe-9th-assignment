    import { Outlet,useNavigate } from "react-router-dom"

    const Layout = () => {

        const navigate = useNavigate();

        const onClickNavbtn = (e) => {
            e.preventDefault();
            e.target.innerText === 'signin'?navigate('/signin'):navigate('/');
        }

        const moveToSignIn = (e) => {
            e.preventDefault();
            navigate("/signin");
        }

        const moveToHome = (e) => {
            e.preventDefault();
            navigate("/");
        }

        return (
            <div>
                <div>
                    <botton onClick= {moveToSignIn}>로그인 페이지로 이동하세요</botton>
                    <botton onClick= {moveToHome}>홈페이지입니다</botton>
                    <botton onClick = {onClickNavbtn} > signin</botton>
                    <botton onClick = {onClickNavbtn} > signin</botton>
                    <botton>네비게이션 버튼입니다</botton>
                </div>
                <Outlet/>
            </div>
        );
    };

    export default Layout;