import styled from 'styled-components'

import React from 'react'

const Info = () => {
  return (
    <Wrapper>
      <h1>그때,애</h1>
      <h2>갱년기 극복을 위한 부부 클리닉 서비스 플랫폼</h2>
      <h4>맞춤 영양제 구독 서비스를 제공합니다</h4>
    </Wrapper>
  )
}

const Wrapper = styled.div`

    height : 100vh;

    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

export default Info
