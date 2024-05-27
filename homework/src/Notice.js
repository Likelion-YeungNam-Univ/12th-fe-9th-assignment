import React from "react";

export const Notice = () => {
  const noticeList = [
    {
      id: 1,
      title: "공지사항1",
      content: "안녕하세요 공지사항1입니다.",
      writer: "운영자",
    },
    {
      id: 2,
      title: "공지사항2",
      content: "안녕하세요 공지사항2입니다.",
      writer: "운영자",
    },
  ];

  localStorage.setItem("noticeList", JSON.stringify(noticeList));

  return (
    <div>
      <h1>공지사항</h1>
    </div>
  );
};
