import React, { useState } from 'react';
import styled from 'styled-components';
import NoticeInput from './NoticeInput';
import NoticeItem from './NoticeItem';

const Notice = () => {

    const repository = [
        { id: 1, title: "사내 식사 관련 공지", description: "이것은 식사 관련 공지입니다.", author: "kim" },
        { id: 2, title: "주 4일제 실시", description: "주 4일제 관련 공지입니다.", author: "park" },
        { id: 3, title : "사내 SW 경진 대회 개최", description : "사내 SW 경진대회 관련 공지입니다.", author : "kim"}
    ];

    const [post, setPost] = useState(repository);

    const Wrapper = styled.div`
        box-sizing : border-box;
        padding : 20px 150px;
    `;

    const Title = styled.h1`
        font-size : 40px;
        font-weight : 600;
    `;

    const Main = styled.div`
        display : flex;
        justify-content : space-between;

        height : 450px;
    `;

    const Left = styled.div`
        width : 48%;
        border-top : 3px solid #000;
        border-bottom : 3px solid #000;
        
        background-color : #fff;
    `;

    const Right = styled.div`
        width : 48%;
        background-color : #f1f1f1;

    `;

    const NoticeContainer = styled.div`
        margin : 30px 0;
        background-color : beige;
        height : 300px;

        display : flex;
        flex-direction : column;

        overflow-y : auto;
    `;

  return (
      <Wrapper>
          <Title>게시판</Title>

          <Main>
              <Left>
                  {post.map(el => { 
                      return <NoticeItem post={el} setPost={setPost}></NoticeItem>
                  })}
              </Left>
              <Right>
                  <NoticeInput setPost={setPost}></NoticeInput>
              </Right>
          </Main>
      </Wrapper>
  )
}

export default Notice