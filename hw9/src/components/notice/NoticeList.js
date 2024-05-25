import React from "react";
import styled from "styled-components";


const NoticeList = ({ notices, deleteNotice, editNotice }) => {
  return (
    <List>
      {notices.map(notice => (
        <ListItem key={notice.id}>
          <div>
            <strong>{notice.title}</strong>
            <p>{notice.content}</p>
          </div>
          <div>
            <button onClick={() => editNotice(notice)}>수정</button>
            <button onClick={() => deleteNotice(notice.id)}>삭제</button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
`;

export default NoticeList;
