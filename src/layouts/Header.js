import React from 'react'
import styled from 'styled-components';

const Header = () => {
    const Header = styled.div`
        display : flex;
        justify-content : center;
        align-items : center;

        padding : 20px 80px;
        box-sizing : border-box;

        font-size : 40px;
        font-weight : 600;
    `;
  return (
    <Header>영남대학교</Header>
  )
}

export default Header