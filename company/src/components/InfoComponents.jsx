import { Link } from "react-router-dom";
import styled from "styled-components";

const BannerContainer = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  background-image: url("../img/infoback.jpg");
  background-size: cover;
  text-align: center;
`;

const Title = styled.h2`
  color: white;
  text-align: center;
  font-size: 34px;
  font-weight: 500;
`;
const RedLine = styled.hr`
  height: 5px;
  width: 20px;
  background-color: red;
  border: none;
`;
const SubTitle = styled.p`
  color: white;
  text-align: center;
  font-size: 15px;
  font-weight: 300;
`;

const SubNavBar = styled.ul`
  display: flex;
  justify-content: center;
  width: 80%;
  height: 150px;
  align-items: center;
  margin: -70px auto;
  list-style: none;
`;

const Li = styled.li`
  height: 38px;
  width: 155px;
  background-color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: black;
  padding: 10px;
  cursor: pointer;
  border: solid 1px #6666;
  &:hover {
    color: white;
    background-color: #c40f39;
  }
`;

export function Banner() {
  return (
    <BannerContainer>
      <Title>모나미소개</Title>
      <RedLine />
      <SubTitle>언제 어디서나 모나미는 당신 곁에 있습니다.</SubTitle>
    </BannerContainer>
  );
}

export function NavigationBar({ itemArray }) {
  return (
    <SubNavBar>
      {itemArray.map((item) => (
        <Link key={item.path} to={item.path}>
          <Li>{item.name}</Li>
        </Link>
      ))}
    </SubNavBar>
  );
}
