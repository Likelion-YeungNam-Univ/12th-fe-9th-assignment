import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Update = () => {
  const nav = useNavigate();
  const { id } = useParams();

  let data = localStorage.getItem("noticeList");
  data = JSON.parse(data);

  const idData = data.filter((notice) => notice.id == id);

  const [title, setTitle] = useState(idData[0].title);
  const [content, setContent] = useState(idData[0].content);

  const onUpdate = () => {
    const updateNotice = {
      title,
      content,
      id,
      writer: "운영자",
    };

    const newData = data.map((notice) => {
      if (notice.id == id) {
        return updateNotice;
      } else {
        return notice;
      }
    });

    localStorage.setItem("noticeList", JSON.stringify(newData));
    alert("수정완료!");
    nav(`/detail/${id}`);
  };

  return (
    <dv>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          type="text"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          nav(-1);
        }}
      >
        취소
      </button>
      <button onClick={onUpdate}>수정하기</button>
    </dv>
  );
};
