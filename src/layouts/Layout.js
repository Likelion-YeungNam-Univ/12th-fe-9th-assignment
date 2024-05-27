import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components'

const Layout = () => {
    const Navbar = styled.ul`
        display : flex;
        justify-content : space-around;
        align-items : center;

        height : 50px;
        
        padding : 10px 200px;
        box-sizing : border-box;
    `;

    const NavItem = styled.li`
        font-size : 20px;
        font-weight : 600;
        transition : 0.3s;
        list-style : none;

        &:hover{
            scale : 1.05 1.05;
        }
    `;
    return (
      <>
        <Navbar>
            <NavItem>회사 소개</NavItem>
            <NavItem>회사 목표</NavItem>
            <NavItem>공지사항</NavItem>
        </Navbar> 
        <Outlet/>
      </>
  )
}

export default Layout