import React from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const nav = useNavigate();
  return (
    <div>
      <div>
        <button
          onClick={() => {
            nav("/");
          }}
        >
          홈
        </button>
        <button
          onClick={() => {
            nav("/info");
          }}
        >
          회사소개
        </button>
        <button
          onClick={() => {
            nav("/goal");
          }}
        >
          회사목표
        </button>
        <button
          onClick={() => {
            nav("/notice");
          }}
        >
          공지사항
        </button>
      </div>
      <Outlet></Outlet>
    </div>
  );
};
