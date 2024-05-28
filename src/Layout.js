import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components';

const Layout = () => {

    const navigate = useNavigate();

    const moveToHome = (e) => {
        e.preventDefault();
        navigate("")
    }

    const moveToInfo = (e) => {
        e.preventDefault();
        navigate("/info")
    }

    const moveToNotice = (e) => {
        e.preventDefault();
        navigate("/notice")
    }

    const moveToLogin = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    return (
        <div>
            <Nav>
                <Button onClick={moveToHome}>Home</Button>
                <Button onClick={moveToInfo}>Info</Button>
                <Button onClick={moveToNotice}>Notice</Button>
                <Button onClick={moveToLogin}>Login</Button>
            </Nav>
            <Outlet />
        </div>
        
     )
}

const Nav = styled.div`
    background-color : #FFC6C3;
    padding : 20px 0;
    width : 100%;
    top : 0;

    display : flex;
    justify-content : space-around;

    position : fixed;
`

const Button = styled.button`
    background-color : #FFB6C1;
    border-color : #FFB6C1;
    border-style : none;
    border-radius : 5px;
    height : 30px;
    cursor: pointer;
`

export default Layout
