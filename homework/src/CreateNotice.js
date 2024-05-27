import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateNotice = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = () => {
    let data = localStorage.getItem("noticeList");
    let id;
    if (data == null || data == undefined) {
      id = 1;
    } else {
      data = JSON.parse(data);
      id = data[data.length - 1].id + 1;
    }
    let newNotice = {
      id,
      title,
      content,
      writer: "운영자",
    };

    if (data == null || data == undefined) {
      data = [newNotice];
      localStorage.setItem("noticeList", JSON.stringify(data));
    } else {
      data = [...data, newNotice];
      localStorage.setItem("noticeList", JSON.stringify(data));
    }

    alert("글 작성완료!");
    nav("/notice");
  };

  const nav = useNavigate();
  return (
    <div>
      <div>
        제목 :{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        내용 :{" "}
        <textarea
          name=""
          id=""
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </div>
      <button
        onClick={() => {
          nav(-1);
        }}
      >
        돌아가기
      </button>
      <button onClick={onSubmit}>작성하기</button>
    </div>
  );
};
