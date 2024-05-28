import styled from "styled-components";
import NoticeListItem from "./NoticeListItem";

const NoticeList = ({ noticeList, updateState, setNoticeList }) => {
  return (
    <Box>
      <Title>목록</Title>
      <Line />
      {noticeList.map((el) => {
        return (
          <NoticeListItem
            key={el.id}
            id={el.id}
            title={el.title}
            author={el.author}
            detail={el.detail}
            update={el.update}
            updateState={updateState}
            noticeList={noticeList}
            setNoticeList={setNoticeList}
          />
        );
      })}
    </Box>
  );
};

const Box = styled.div``;

const Title = styled.h1`
  color: #0d3f7a;
  margin-top: 50px;
  margin-bottom: 5px;
`;

const Line = styled.hr`
  background-color: #0d3f7a;
  padding: 1px;
`;

export default NoticeList;
