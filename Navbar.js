import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #000;
  color: #fff;
  padding: 1em;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin: 0 1em;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">회사 소개</NavLink>
      <NavLink to="/goals">회사 목표</NavLink>
      <NavLink to="/notices">공지사항</NavLink>
    </Nav>
  );
};

export default Navbar;
