import styled from "styled-components";
import { useState } from "react";

const NoticeListItem = ({
  id,
  title,
  author,
  detail,
  update,
  noticeList,
  setNoticeList,
}) => {
  const [inputTitle, setInputTitle] = useState(title);
  const [inputAuthor, setInputAuthor] = useState(author);
  const [inputDetail, setInputDetail] = useState(detail);

  const handleTitle = (e) => {
    setInputTitle(e.target.value);
  };
  const handleAuthor = (e) => {
    setInputAuthor(e.target.value);
  };
  const handleDetail = (e) => {
    setInputDetail(e.target.value);
  };

  const updateState = (e) => {
    const new_Notice = noticeList.filter((el) => el.id !== id);
    setNoticeList([
      ...new_Notice,
      {
        id: id,
        title: title,
        author: author,
        detail: detail,
        update: true,
      },
    ]);
  };

  const updateNotice = (e) => {
    e.preventDefault();
    const new_Notice = noticeList.filter((el) => el.id !== id);
    setNoticeList([
      ...new_Notice,
      {
        id: id,
        title: inputTitle,
        author: inputAuthor,
        detail: inputDetail,
        update: false,
      },
    ]);
  };

  const deleteNotice = (e) => {
    const new_Notice = noticeList.filter((el) => el.id !== id);
    setNoticeList(new_Notice);
  };

  return (
    <Box>
      {update === true ? (
        <UpdateInputBox>
          <TitleInput onChange={handleTitle} value={inputTitle} />
          <AuthorInput onChange={handleAuthor} value={inputAuthor} />
          <DetailInput onChange={handleDetail} value={inputDetail} />
          <InputBtn onClick={updateNotice}>제출</InputBtn>
        </UpdateInputBox>
      ) : (
        <ItemBox>
          <DetailBox>
            <TitleBox>
              <Id>{id}</Id>
              <Author>{author}</Author>
              <Title>{title}</Title>
            </TitleBox>
            <Detail>{detail}</Detail>
          </DetailBox>
          <BtnBox>
            <Btn onClick={updateState}>수정</Btn>
            <Btn onClick={deleteNotice}>삭제</Btn>
          </BtnBox>
        </ItemBox>
      )}

      <hr />
    </Box>
  );
};

const Box = styled.div``;

const ItemBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DetailBox = styled.div`
  width: 80%;
`;

const TitleBox = styled.div`
  display: flex;
  gap: 30px;
  font-weight: bold;
  font-size: 20px;
`;

const Id = styled.div`
  width: 10px;
`;

const Author = styled.div`
  width: 100px;
`;

const Title = styled.div`
  width: 80%;
`;

const Detail = styled.div`
  border-radius: 5px;
  border: 1px solid gray;
  margin: 10px;
  margin-left: 30px;
  padding: 5px;
`;

const BtnBox = styled.div`
  display: flex;
  gap: 5px;
`;

const Btn = styled.button`
  background-color: #0d3f7a;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  height: 30px;
`;

const UpdateInputBox = styled.form`
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

export default NoticeListItem;
