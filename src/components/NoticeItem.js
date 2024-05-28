import React from 'react'
import styled from 'styled-components'

const NoticeItem = ({ post, setPost }) => {
  const Wrapper = styled.div`
    width : 100%;
    height : 35px;
    display : flex;
    align-items : center;


    border-bottom : 1px solid #f0f0f0;
  `;

  const Id = styled.div`
    width : 15%;
    text-align : center;
  `

  const Title = styled.div`
    width : 60%;
  `;

  const Author = styled.div`
    width : 15%;
    text-align : center;
  `;

  const Delete = styled.div`
    box-sizing : border-box;
    padding : 2px 5px;
    transition : 0.2s;
    border-radius : 5px;
    background-color : #ff6961;
    cursor: pointer;
    &:hover{
      color : #fff;
    }
  `;

  const deletePost = (postId) => {
    console.log('clicked');
    setPost(prev => {
      console.log(prev);
      return prev.filter(el => el.id !== postId);
    });
   }
  return (
    <Wrapper>
      <Id>{post.id}</Id>
      <Title>{post.title}</Title>
      <Author>{post.author}</Author>
      <Delete onClick={()=> deletePost(post.id)}>DELETE</Delete>

    </Wrapper>
  )
}

export default NoticeItem