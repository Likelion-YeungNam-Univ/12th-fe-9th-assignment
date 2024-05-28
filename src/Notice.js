import styled from "styled-components";
import { useState } from "react";
import NoticeList from "./NoticeList";

const init = [
  {
    id: 1,
    title: "예시",
    author: "관리자",
    detail: "공지 사항을 입력하세요",
    update: false,
  },
];

const Notice = () => {
  const [noticeList, setNoticeList] = useState(init);
  const [inputTitle, setInputTitle] = useState("");
  const [inputAuthor, setInputAuthor] = useState("");
  const [inputDetail, setInputDetail] = useState("");

  const appendNotice = (e) => {
    e.preventDefault();
    const new_Notice = [
      ...noticeList,
      {
        id: noticeList.length + 1,
        title: inputTitle,
        author: inputAuthor,
        detail: inputDetail,
        update: false,
      },
    ];
    setNoticeList(new_Notice);
    setInputTitle("");
    setInputAuthor("");
    setInputDetail("");
  };

  const handleTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setInputAuthor(e.target.value);
  };
  const handleDetail = (e) => {
    setInputDetail(e.target.value);
  };

  return (
    <Box>
      <Title>Notice</Title>
      <hr />
      <InputBox>
        <TitleInput
          onChange={handleTitle}
          value={inputTitle}
          placeholder="제목"
        />
        <AuthorInput
          onChange={handleAuthor}
          value={inputAuthor}
          placeholder="작성자"
        />
        <DetailInput
          onChange={handleDetail}
          value={inputDetail}
          placeholder="내용"
        />
        <InputBtn onClick={appendNotice}>제출</InputBtn>
      </InputBox>
      <NoticeList noticeList={noticeList} setNoticeList={setNoticeList} />
    </Box>
  );
};

const Box = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
  color: #0d3f7a;
`;

const InputBox = styled.form`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 10px;
`;

const TitleInput = styled.input`
  width: 30%;
  padding: 5px;
`;

const AuthorInput = styled.input`
  width: 30%;
  padding: 5px;
`;

const DetailInput = styled.textarea`
  height: 200px;
`;

const InputBtn = styled.button`
  width: 50px;
  border-radius: 10px;
  border: none;
  padding: 5px;
  background-color: #0d3f7a;
  color: white;
`;
export default Notice;
