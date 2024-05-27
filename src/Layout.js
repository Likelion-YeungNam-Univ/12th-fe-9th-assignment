import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const onClickBtn = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Home") navigate("");
    else if (e.target.innerText === "Introduction") navigate("/introduction");
    else if (e.target.innerText === "Target") navigate("/target");
    else if (e.target.innerText === "Notice") navigate("/notice");
    else navigate("*");
  };

  return (
    <div>
      <div>
        <button onClick={onClickBtn}>Home</button>
        <button onClick={onClickBtn}>Introduction</button>
        <button onClick={onClickBtn}>Target</button>
        <button onClick={onClickBtn}>Notice</button>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
