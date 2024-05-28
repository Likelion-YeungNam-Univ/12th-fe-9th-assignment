import { Outlet, Link } from "react-router-dom";
import './Layout.css'; 

const Layout = () => {
  return (
    <div className="layout">
      <div className="navbar">
        <div className="navbar-logo">BCG</div>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signin">Sign In</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/goals">Goals</Link></li>
          <li><Link to="/notices">Notices</Link></li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
