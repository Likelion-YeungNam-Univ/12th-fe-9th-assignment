import { useState } from 'react';
import styled from 'styled-components';

const Notice = () =>{
    const [input, setInput] = useState();
    const [notices, setNotice] = useState([]);


    // 공지사항 등록
    function postNotice(input){
        setNotice(preNotice=>[...preNotice, input]);
        setInput(''); // 입력필드 비우기
    }

    // 공지사항 삭제
    function deleteNotice(index){
        const newNotices = notices.filter((_, i)=> i !== index)
        console.log("notices = ",notices);
        setNotice(newNotices); 
        alert("공지사항을 삭제했습니다!");
    }


    return(
        <div>
            <Title>
                <h1>Notice Page</h1>
                <p>공지사항 페이지입니다~</p>
            </Title>
            
            <NoticeContainer>

                {/*왼쪽 - POST */}
                <PostContainer>
                    <InputArea 
                        type="text" 
                        value={input} 
                        placeholder="공지사항을 입력해주세요" 
                        onChange={(e)=>{setInput(e.target.value)}}>    
                    </InputArea>
                    <PostButton onClick={() => postNotice(input)}>공지사항 등록</PostButton>
                </PostContainer>

                {/* 오른쪽 - GET*/}
                <GetContainer>
                    <h3>공지사항 목록</h3>
                    <ul>
                        {notices.map((notice, index)=>
                            {
                                return(
                                    <NoticeList>
                                        {notice}
                                        <div key={index}>
                                            <NoticeButton>수정</NoticeButton>
                                            <NoticeButton onClick={(e)=>deleteNotice(index)}>삭제</NoticeButton>
                                        </div>

                                    </NoticeList>
                                )
                            })
                        }
                        
                    </ul>

                </GetContainer>

            </NoticeContainer>
        </div>
    )
}


const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NoticeContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 40px;
    width: 100%;
    height: 100%;
`

const PostContainer = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const InputArea = styled.textarea`
    width: 300px;
    height: 300px;
`
const PostButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 4px;
    margin-top: 8px;
`

const GetContainer = styled.div`
    height: 300px;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const NoticeList = styled.li`
    width: 240px;
    background-color: #ededed;
    margin-top: 12px;
    border-radius: 10px;
`
const NoticeButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 0px 8px;
    margin-top: 8px;
`


export default Notice;