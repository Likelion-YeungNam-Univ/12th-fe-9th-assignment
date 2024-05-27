import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NoticeCreate = ({handlePostNotice}) => {

    const [inputTitle, setInputTitle] = useState('');
    const [inputContent, setInputContent] = useState('');

    const appendNotice = (e) => {
        e.preventDefault();
        const newNotice = {id:Date.now(), title: inputTitle, content: inputContent};
        handlePostNotice(newNotice);
        setInputTitle('');
        setInputContent('');
    }

    const handleInputTitle = (e) => {
        setInputTitle(e.target.value);
    }
    const handleInputContent = (e) => {
        setInputContent(e.target.value);
    }
    
    return(
        <Container>
            <h2>공지사항 작성</h2>
            <form >
                <TitleInput onChange={handleInputTitle} value={inputTitle} placeholder="제목"></TitleInput>
                <ContentInput onChange={handleInputContent} value={inputContent} placeholder="내용"></ContentInput>
            </form>
            <button onClick={appendNotice}>post</button>
        </Container>
    )
}

const Container = styled.div`
  width: 70%;
  margin: auto;
  height: 60vh;

`

const TitleInput = styled.input`
  width: 70%;
  height: 64px;
  margin: auto;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-sizing: border-box;
`
const ContentInput = styled.input`
  width: 70%;
  height: 40vh;
  margin-top: 10px;
  margin-bottom: 10px;

  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  box-sizing: border-box;
`

export default NoticeCreate;