import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";

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
    <Box>
      <NavBar>
        <TitleBox>
          <Logo src="yu_likelion_logo.png" alt="yu_likelion_logo" />
          <Title>YU_LIKELION</Title>
        </TitleBox>
        <ButtonBox>
          <NavBtn onClick={onClickBtn}>Home</NavBtn>
          <NavBtn onClick={onClickBtn}>Introduction</NavBtn>
          <NavBtn onClick={onClickBtn}>Target</NavBtn>
          <NavBtn onClick={onClickBtn}>Notice</NavBtn>
        </ButtonBox>
        <div />
      </NavBar>
      <Line />
      <Outlet />
    </Box>
  );
};

const Box = styled.div``;

const NavBar = styled.div`
  background-color: #0d3f7a;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitleBox = styled.div`
  display: flex;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  padding-top: 10px;
`;

const Title = styled.div`
  color: white;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-style: italic;
  font-size: 50px;
  margin-right: 100px;
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 200px;
`;

const NavBtn = styled.button`
  background-color: #0d3f7a;
  padding: 10px;
  border: none;
  color: white;
  font-size: 30px;
  &:hover {
    color: gray;
  }
`;

const Line = styled.hr`
  background-color: #0d3f7a;
  padding: 1px;
`;

export default Layout;
