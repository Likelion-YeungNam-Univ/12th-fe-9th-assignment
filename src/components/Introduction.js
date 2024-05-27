import React from 'react'
import styled from 'styled-components'

const Introduction = () => {
    const Wrapper = styled.div`
        box-sizing : border-box;
        padding : 20px 150px;
    `;

    const Title = styled.h1`
        font-style : italic;
        font-size : 40px;
        font-weight : 600;
    `;

    const Description = styled.p`
        font-size : 18px;
        
    `;

  return (
      <Wrapper>
          <Title>꿈을 향해, 우리의 항해</Title>
          <Description>
              저희는 항상 꿈을 향해 끊임없이 달려나가는 회사입니다.
              <br />
              파도는 매번 다르게 온다고 합니다. 우리의 여정또한 끊임없는 파도와 함께할 것 입니다.
              <br />
              우리의 항해의 끝은 성공입니다.
              <br />
              <br />
              저희와 함께 가주시겠습니까?
          </Description>
      </Wrapper>
  )
}

export default Introduction