import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Form = styled.form`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 5px;
`;

const NoticeForm = ({ addNotice, updateNotice, currentNotice, setCurrentNotice }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (currentNotice) {
      setTitle(currentNotice.title);
      setContent(currentNotice.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [currentNotice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('추가할 내용이 없습니다');
      return;
    }
    if (currentNotice) {
      updateNotice({ ...currentNotice, title, content });
    } else {
      addNotice({ title, content });
    }
    setTitle('');
    setContent('');
    setCurrentNotice(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="제목을 입력해주세요~"
      />
      <TextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="내용을 입력해주세요~"
      />
      <button type="submit">{currentNotice ? '수정' : '추가'}</button>
    </Form>
  );
};

export default NoticeForm;
