import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Notice = () =>{
    const [input, setInput] = useState('');  // 공지사항(등록) 내용 관리
    const [notices, setNotices] = useState([]);  // 공지사항 관리


    // 마운트 될때 localstorage에서 공지사항 가져오기
    useEffect(()=>{
        const storageNotice = localStorage.getItem('notices');
        if(storageNotice){
            setNotices(JSON.parse(storageNotice)); // 원래 object형태로 다시 바꿔주기
        }
    },[]);


    // 공지사항 변경 시 localstorage에 저장
    useEffect(()=>{
        
        // 마운트 시에는 해당이 되지 않도록 함(새로고침 시 localStorage 지워짐 방지)
        if(notices.length!==0){
            localStorage.setItem('notices', JSON.stringify(notices)); // object -> JSON형태로 변환
        }
    },[notices]);


    // 공지사항 등록
    function postNotice(){

        // 속성 설정_고유한 id값, 공지사항내용, 수정상태 
        const newNotice = { id: Date.now(), text: input, isEditing: false};

        // 공지사항 미기입 시 예외처리
        if(input.length === 0){
            alert("내용을 입력하세요!");
            return;
        }

        setNotices(preNotice =>[...preNotice, newNotice]);
        setInput(''); // 입력필드 비우기
    }

    
    // 공지사항 삭제
    function deleteNotice(id){
        const newNotices = notices.filter(notice => notice.id !== id)
        setNotices(newNotices); 
        alert("공지사항을 삭제했습니다!");
    }

    
    // 공지사항 수정 상태 토글
    function toggleEditState(id){
        const newNotice = notices.map((notice)=> notice.id === id 
            ? {...notice, isEditing: !notice.isEditing} 
            : notice);
        setNotices(newNotice);
        console.log("toggle!!");
    }

    // 공지사항 텍스트 업데이트
    function handleChange(id, newText){
        const newNotice = notices.map((notice)=> notice.id === id 
            ? {...notice, text: newText} 
            : notice);
        setNotices(newNotice);
    }

    // 공지사항 수정 완료
    function updateNotice(id){
        const newNotice = notices.map((notice)=> notice.id === id 
            ? {...notice, isEditing: false} 
            : notice);
        setNotices(newNotice);
    }
    

    return(
        <NoticeWrapper>
            <Title>
                <h1>Notice Page</h1>
                <p>공지사항 페이지입니다~</p>
            </Title>
            
            <NoticeContainer>
                {/*왼쪽 - 공지사항 입력 */}
                <PostContainer>
                    <InputArea 
                        type="text" 
                        value={input} 
                        placeholder="공지사항을 입력해주세요"
                        onChange={(e)=>{setInput(e.target.value)}}>    
                    </InputArea>
                    <PostButton onClick={() => postNotice()}>공지사항 등록</PostButton>
                </PostContainer>

                {/* 오른쪽 - 공지사항 목록*/}
                <GetContainer>
                    <ListTitle>공지사항 목록</ListTitle>
                    <Ul>
                        {notices.map((notice)=>
                            {
                                return(
                                    // key값으로 index값 사용 대신 id값 사용
                                    <NoticeList key={notice.id}>

                                        {/* 수정상태에 따른 컴포넌트*/}
                                        {notice.isEditing
                                            ?(
                                                // 수정가능 상태
                                                <textarea
                                                    value={notice.text}
                                                    onChange={(e)=>{handleChange(notice.id, e.target.value)}}
                                                />
                                            )
                                            : (
                                                <p>{notice.text}</p>
                                            )
                                        }

                                        {/* 버튼 */}
                                        <div>
                                            {notice.isEditing
                                                ? <NoticeButton onClick={()=>updateNotice(notice.id)}>완료</NoticeButton> // 수정사항 업데이트
                                                : <NoticeButton onClick={()=>toggleEditState(notice.id)}>수정</NoticeButton> // 수정상태 변경 토글
                                            }
                                            <NoticeButton onClick={()=>deleteNotice(notice.id)}>삭제</NoticeButton>
                                        </div>

                                    </NoticeList>
                                )
                            })
                        }
                        
                    </Ul>

                </GetContainer>
            </NoticeContainer>
        </NoticeWrapper>
    )
}


const NoticeWrapper = styled.div`
    width: 80%;
`
const Title = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NoticeContainer = styled.div`
    display: flex;
    margin-top: 40px;
    width: 100%;
    height: 400px;
    background-color: #f9fafb;
    border: solid #cfcfcf 2px;
    border-radius: 20px;
    padding: 28px 40px;
`

const PostContainer = styled.div`
    height: 80%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    
`
const GetContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`
const InputArea = styled.textarea`
    width: 90%;
    height: 300px;
    border: solid #cfcfcf 2px;
    border-radius: 20px;
    padding: 8px;
`
const PostButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 4px;
    margin-top: 8px;
    background-color: #a1c398;
    color: white;
    border: solid #a1c398;
    border-radius: 8px;
    font-weight: 800;
    cursor: pointer;
    &:hover{
        background-color: #87a37f;
        border-color: #87a37f;
    }
`

const ListTitle = styled.div`
    width: 100%;
    font-weight: bold;
    text-align: center;
`
const Ul = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const NoticeList = styled.li`
    width: 90%;
    background-color: #ededed;
    margin-top: 12px;
    border-radius: 10px;
    padding: 8px 4px;
`
const NoticeButton = styled.button`
    width: fit-content;
    height: fit-content;
    padding: 0px 8px;
    margin-top: 8px;
    cursor: pointer;

    background-color: #545454;
    color: white;
    border: solid #545454;
    border-radius: 8px;
    font-weight: 500;
    margin-right: 8px;

    &:hover{
        background-color: gray;
        border-color: gray;
    }
`


export default Notice;