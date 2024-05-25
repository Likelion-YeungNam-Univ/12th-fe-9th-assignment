import React, { useState } from "react";
import NoticeList from "../notice/NoticeList";
import NoticeForm from "../notice/NoticeForm";
import styled from 'styled-components';


const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [currentNotice, setCurrentNotice] = useState(null);

  const addNotice = (notice) => {
    setNotices([...notices, { ...notice, id: Date.now() }]);
  };

  const updateNotice = (updatedNotice) => {
    setNotices(notices.map(notice => notice.id === updatedNotice.id ? updatedNotice : notice));
  };

  const deleteNotice = (id) => {
    setNotices(notices.filter(notice => notice.id !== id));
  };

  const editNotice = (notice) => {
    setCurrentNotice(notice);
  };

  return (
    <AppContainer>
      <h1>공지사항</h1>
      <NoticeForm
        addNotice={addNotice}
        updateNotice={updateNotice}
        currentNotice={currentNotice}
        setCurrentNotice={setCurrentNotice}
      />
      <NoticeList
        notices={notices}
        deleteNotice={deleteNotice}
        editNotice={editNotice}
      />
    </AppContainer>
  );
};

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export default Notice;
