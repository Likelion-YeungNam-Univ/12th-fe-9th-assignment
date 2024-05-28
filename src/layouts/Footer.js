import React from 'react'
import styled from 'styled-components'

const Footer = () => {

    const Footer = styled.div`
        display : flex;
        justify-content : end;
        align-items : center;

        padding : 20px 80px;
        box-sizing : border-box;
        width : 100%;
        height : 120px;

        font-size : 35px;
        font-weight : 600;
        font-style : italic;

        background-color : #000;
        color : #fff;
        
        position : absolute;
        bottom : 0;
    `;
  return (
    <Footer>Footer</Footer>
  )
}

export default Footer