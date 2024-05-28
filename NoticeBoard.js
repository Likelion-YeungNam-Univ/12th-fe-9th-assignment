import React, { useState } from 'react';
import styled from 'styled-components';

const NoticeContainer = styled.div`
  margin: 2em;
  padding: 2em;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const NoticeInput = styled.input`
  width: calc(100% - 2em);
  padding: 0.5em;
  margin-bottom: 1em;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const NoticeButton = styled.button`
  padding: 0.5em 1em;
  margin-right: 0.5em;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const NoticeList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NoticeItem = styled.li`
  margin: 0.5em 0;
  padding: 0.5em;
  border: 1px solid #ddd;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [notice, setNotice] = useState('');

  const handleAddNotice = () => {
    if (notice.trim()) {
      setNotices([...notices, notice]);
      setNotice('');
    }
  };

  const handleDeleteNotice = (index) => {
    setNotices(notices.filter((_, i) => i !== index));
  };

  return (
    <NoticeContainer>
      <h1>공지사항</h1>
      <NoticeInput 
        type="text" 
        value={notice} 
        onChange={(e) => setNotice(e.target.value)} 
        placeholder="공지사항을 입력하세요"
      />
      <NoticeButton onClick={handleAddNotice}>Add Notice</NoticeButton>
      <NoticeList>
        {notices.map((n, index) => (
          <NoticeItem key={index}>
            {n}
            <NoticeButton onClick={() => handleDeleteNotice(index)}>Delete</NoticeButton>
          </NoticeItem>
        ))}
      </NoticeList>
    </NoticeContainer>
  );
};

export default NoticeBoard;
