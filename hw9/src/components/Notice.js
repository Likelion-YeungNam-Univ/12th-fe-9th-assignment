import React from "react";
import styled from "styled-components";

const Notice=()=>{
    return(
        <div className="Top">
            <Title>공지사항</Title>
            <hr/>
            <Desc>본 게시판은 게시글 업로드, 삭제, 수정이 가능합니다!</Desc>
            
        </div>
    );

}

const Title = styled.h1`
    text-align: center;
    font-size: larger;
    
`;

const Desc=styled.p`
text-align:center;
color: red;
`;

export default Notice;