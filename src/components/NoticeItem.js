import React from 'react'
import styled from 'styled-components'

const NoticeItem = ({ post }) => {
  const Wrapper = styled.div`
    width : 100%;
    height : 30px;
    display : flex;
    align-items : center;


    border-bottom : 1px solid #f0f0f0;
  `;

  const Id = styled.div`
    width : 15%;
    text-align : center;
  `

  const Title = styled.div`
    width : 70%;
  `;

  const Author = styled.div`
    width : 15%;
    text-align : center;
  `;
  return (
    <Wrapper>
      <Id>{post.id}</Id>
      <Title>{post.title}</Title>
      <Author>{post.author}</Author>

    </Wrapper>
  )
}

export default NoticeItem