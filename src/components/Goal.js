import React from 'react'
import styled from 'styled-components'

const Goal = () => {
    const Wrapper = styled.div`
        box-sizing : border-box;
        padding : 20px 150px;
    `;

    const Title = styled.h1`
        text-align : center;
        font-size : 40px;
        font-weight : 600;
    `;

    const Description = styled.p`
        font-size : 18px;
        text-align : center;
    `;

    const Container = styled.div`
        display : flex;
        justify-content : space-around;
        
        box-sizing : border-box;
        padding : 0 180px;
        margin : 30px 0;
    `;

    const Item = styled.div`
        background-color : ${props => props.bgColor};
        opacity : 0.9;
        width : 30%;
        height : 300px;
        border-radius : 20px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

        color : #000;
        font-size : 40px;
        font-weight : 600;
        display : flex;
        justify-content : center;
        align-items : center;
    `;
  return (
      <Wrapper>
        <Title>우리의 목표</Title>
        <Description>
              끊임없이 꿈을 향해 나아가는 우리 회사의 돛은 건강한 사회 조성을 향해 있습니다. <br /><br />
              다음 3가지의 목표가 우리가 달성해야할 과제입니다.
          </Description>
          <Container>
              <Item bgColor={"#F6F193"}>수익 100조</Item>
              <Item bgColor={"#F2C18D"}>기관 협력</Item>
              <Item bgColor={"#C5EBAA"}>사회 환원</Item>
          </Container>
          
    </Wrapper>
  )
}

export default Goal