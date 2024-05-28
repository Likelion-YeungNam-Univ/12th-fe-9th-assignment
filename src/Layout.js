import { Outlet, useNavigate } from "react-router-dom";
import './Layout.css'; 

const Layout = () => {
  const navigate = useNavigate();

  const onClickNavbtn = (e) => {
    e.preventDefault();
    e.target.innerText === 'signin' ? navigate('/signin') : navigate('/');
  };

  const moveToSignIn = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  const moveToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="layout">
      <div className="navbar">
        <div className="navbar-logo">BCG</div>
        <ul className="navbar-links">
          <li><a href="/" onClick={moveToHome}>Home</a></li>
          <li><a href="/signin" onClick={moveToSignIn}>Sign In</a></li>
          <li><a href="#" onClick={onClickNavbtn}>About</a></li>
          <li><a href="#" onClick={onClickNavbtn}>Goals</a></li>
          <li><a href="#" onClick={onClickNavbtn}>Notices</a></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
