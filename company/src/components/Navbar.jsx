import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./item.css";
const Container = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const SubContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  align-items: center;
  background-color: white;
  opacity: 0.6;
  list-style: none;
`;

const Li = styled.div`
  padding: 10px;
  cursor: pointer;
`;

const Logo = styled.img`
  width: 100px;
  height: 40px;
  padding: 10px;
  cursor: pointer;
`;

const SearchImg = styled.div`
  width: 20px;
  height: 20px;
  padding: 15px;
  margin-right: 10px;
`;

function NavIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIcon = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavIconContainer onClick={toggleIcon} className={isOpen ? "open" : ""}>
      <span></span>
      <span></span>
      <span></span>
    </NavIconContainer>
  );
}

function Dropdown({ items, paths }) {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  };
  return (
    <DropdownContainer>
      {items.map((item, index) => (
        <Li key={index} onClick={() => goToPage(paths[index])}>
          {item}
        </Li>
      ))}
    </DropdownContainer>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(null);

  const toggleMenu = (menuName) => {
    setIsMenuOpen(isMenuOpen === menuName ? null : menuName);
  };

  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/home");
  };



  return (
    <Container>
      <Logo src="/img/Logo.jpg" onClick={goToHome}></Logo>

      {item.map(({ name, title, items, paths }) => (
        <SubContainer
          key={name}
          onMouseEnter={() => toggleMenu(name)}
          onMouseLeave={() => setIsMenuOpen(null)}
        >
          <NavLink
            to={paths[0]}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>{title}</div>
          </NavLink>
          {isMenuOpen === name && <Dropdown items={items} paths={paths} />}
        </SubContainer>
      ))}
      <SearchImg>
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
          height="30px"
          viewBox="0 0 1244.000000 1280.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <metadata>
            Created by potrace 1.15, written by Peter Selinger 2001-2017
          </metadata>
          <g
            transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
            fill="#000000"
            stroke="none"
          >
            <path
              d="M4025 12789 c-1029 -79 -1969 -501 -2704 -1214 -985 -955 -1456
-2292 -1285 -3650 156 -1244 849 -2360 1899 -3059 193 -129 272 -175 470 -274
452 -227 906 -362 1445 -429 207 -25 763 -25 970 0 404 50 752 138 1115 281
251 98 600 283 819 433 l80 54 1075 -1073 c3835 -3827 3770 -3762 3828 -3795
189 -105 411 -75 563 77 148 148 180 359 84 553 -21 43 -462 488 -2432 2459
-2212 2213 -2404 2408 -2392 2425 8 10 40 47 70 83 714 836 1088 1927 1031
3011 -32 610 -165 1136 -420 1664 -169 349 -340 615 -592 920 -106 128 -395
417 -524 524 -687 569 -1463 900 -2336 996 -174 19 -598 27 -764 14z m780
-949 c777 -118 1453 -463 1982 -1014 516 -536 829 -1194 930 -1951 24 -186 24
-618 0 -810 -54 -416 -158 -758 -342 -1125 -297 -593 -779 -1101 -1360 -1432
-964 -549 -2153 -590 -3152 -108 -975 470 -1667 1364 -1873 2420 -37 192 -51
323 -57 555 -6 258 4 423 42 651 161 971 742 1831 1588 2348 453 278 935 434
1512 490 22 2 164 3 315 1 217 -3 304 -8 415 -25z"
            />
          </g>
        </svg>
      </SearchImg>
      <NavIcon></NavIcon>
    </Container>
  );
}
const item = [
  {
    name: "introduction",
    title: "모나미 소개",
    items: [
      "CEO 메세지",
      "회상정보",
      "회사연혁",
      "윤리강령",
      "투자정보",
      "CI",
      "채용정보",
      "찾아오시는 길",
    ],
    paths: [
      "/introduction",
      "/introduction/company-info",
      "/introduction/history",
      "/introduction/ethics",
      "/introduction/investor-info",
      "/introduction/ci",
      "/introduction/careers",
      "/introduction/directions",
      "/introduction/safety-management",
    ],
  },
  {
    name: "companyStory",
    title: "모나미제품",
    items: [
      "프리미엄 펜",
      "펜•펜슬",
      "마카•컬러링",
      "노트•사무용품",
      "잉크•리필",
      "카탈로그",
    ],
    paths: ["none", "none", "none", "none", "none", "none"],
  },
  {
    name: "newsVideo",
    title: "NEWS & VIDEO",
    items: ["보도자료", "동영상자료"],
    paths: ["none", "none"],
  },
  {
    name: "artCompetition",
    title: "모나미 미술대회",
    items: ["미술대회 소개", "수상작 발표"],
    paths: ["none", "none"],
  },
  {
    name: "support",
    title: "고객지원",
    items: ["자주묻는 질문", "공지사항", "이벤트"],
    paths: ["none", "/support/notification", "none"],
  },
  {
    name: "purchaseDevelopment",
    title: "기업 개발 / 구매",
    items: ["대량 구매 문의", "기업 및 단체 구매", "산업용 맞춤 제품개발"],
    paths: ["none", "none", "none"],
  },
];
//햄버거 메뉴(코드펜 참고)
const NavIconContainer = styled.div`
  width: 30px;
  height: 22.5px;

  position: relative;
  margin: 15px 30px;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: black;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 0px;
    }

    &:nth-child(2) {
      top: 9px;
    }

    &:nth-child(3) {
      top: 18px;
    }
  }

  &.open span:nth-child(1) {
    top: 9px;
    transform: rotate(135deg);
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -30px;
  }

  &.open span:nth-child(3) {
    top: 9px;
    transform: rotate(-135deg);
  }
`;

export default Navbar;
