import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Detail = () => {
  const nav = useNavigate();
  const { id } = useParams();

  let data = localStorage.getItem("noticeList");
  data = JSON.parse(data);

  const idData = data.filter((notice) => notice.id == id);

  const onDelete = () => {
    let newArr = data.filter((notice) => notice.id != id);
    localStorage.setItem("noticeList", JSON.stringify(newArr));
    nav("/notice");
  };

  return (
    <div>
      <h1> 제목 : {idData[0].title} </h1>
      <p> 내용 : {idData[0].content}</p>
      <p>작성자 : {idData[0].writer}</p>
      <button
        onClick={() => {
          nav("/notice");
        }}
      >
        돌아가기
      </button>
      <button
        onClick={() => {
          nav(`/update/${id}`);
        }}
      >
        수정하기
      </button>
      <button onClick={onDelete}>삭제하기</button>
    </div>
  );
};
