import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const setCookie = (name, value, days) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const getCookie = (name) => {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, '');
};

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newBody, setNewBody] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingBody, setEditingBody] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = () => {
    const noticesCookie = getCookie('notices');
    if (noticesCookie) {
      setNotices(JSON.parse(noticesCookie));
    }
  };

  const saveNoticesToCookie = (notices) => {
    setCookie('notices', JSON.stringify(notices), 7);
  };

  // Add Notice 버튼 클릭 시 리스트에 추가하는 함수
  const addNotice = () => {
    const newNoticeObj = {
      id: Date.now().toString(),
      title: newTitle,
      body: newBody,
    };
    const updatedNotices = [...notices, newNoticeObj];
    setNotices(updatedNotices);
    saveNoticesToCookie(updatedNotices);
    setNewTitle('');
    setNewBody('');
  };

  // Save 버튼 클릭 시 리스트 아이템을 업데이트하는 함수
  const updateNotice = (id) => {
    const updatedNotices = notices.map(notice =>
      notice.id === id ? { ...notice, title: editingTitle, body: editingBody } : notice
    );
    setNotices(updatedNotices);
    saveNoticesToCookie(updatedNotices);
    setEditingId(null);
    setEditingTitle('');
    setEditingBody('');
  };

  // Delete 버튼 클릭 시 리스트 아이템을 삭제하는 함수
  const deleteNotice = (id) => {
    const updatedNotices = notices.filter(notice => notice.id !== id);
    setNotices(updatedNotices);
    saveNoticesToCookie(updatedNotices);
  };

  return (
    <Wrapper>
      <h1>공지사항</h1>
      <div>

        <NewNoticeBox>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="공지사항 제목 입력"
          />
          <textarea
            value={newBody}
            onChange={(e) => setNewBody(e.target.value)}
            placeholder="공지사항 본문 입력"
          />
          <button onClick={addNotice}>Add Notice</button>
        </NewNoticeBox>

        <NoticeListBox>
          {notices.map(notice => (
            <ListItem key={notice.id}>
              {/* 편집하고자 하는 id와 동일하다면 Save 버튼 출력 */}
              {/* 편집하고자 하는 id와 동일하지 않다면 Edit, Delete 버튼 출력*/}
              {editingId === notice.id ? (
                <UpdateBox>
                  <input
                    type="text"
                    value={editingTitle}
                    onChange={(e) => setEditingTitle(e.target.value)}
                    placeholder="제목"
                  />
                  <textarea
                    value={editingBody}
                    onChange={(e) => setEditingBody(e.target.value)}
                    placeholder="본문"
                  />
                  <button onClick={() => updateNotice(notice.id)}>Save</button>
                </UpdateBox>
              ) : (
                <ReadBox>
                  <TextBox>
                    <NoticeTitle onClick={() => setExpandedId(expandedId === notice.id ? null : notice.id)}>
                      {notice.title}
                    </NoticeTitle>
                    {expandedId === notice.id && <NoticeBody>{notice.body}</NoticeBody>}
                  </TextBox>
                  <ButtonBox>
                    <button
                      onClick={() => {
                        setEditingId(notice.id);
                        setEditingTitle(notice.title);
                        setEditingBody(notice.body);
                      }}
                    >
                      Edit
                    </button>
                    <button onClick={() => deleteNotice(notice.id)}>Delete</button>
                  </ButtonBox>
                </ReadBox>
              )}
            </ListItem>
          ))}
        </NoticeListBox>
        
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`

  display : flex;
  flex-direction : column;

  margin-top : 100px;

`

const NewNoticeBox = styled.div`
  
  display : flex;
  flex-direction : column;
  gap : 10px;

`

const NoticeListBox = styled.ol`

  display : flex;
  flex-direction : column;

`

const UpdateBox = styled.div`
  display : flex;
  flex-direction : column;
  gap : 5px;
`

const ReadBox = styled.div`
  display : flex;
`

const TextBox = styled.div`
  display : flex;
  flex-direction : column;
  gap : 5px;
`

const NoticeTitle = styled.div`
  font-weight : bold;
`

const NoticeBody = styled.div`
  font-size : 0.8rem;
`

const ButtonBox = styled.div`
  display : flex;
  margin-left : auto;
  height : 20px;
  gap : 5px;
`

const ListItem = styled.li`
  margin-bottom : 20px;
  cursor : pointer;
`

export default Notice;
