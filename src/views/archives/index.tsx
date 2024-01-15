import React from "react";
import { useNavigate } from "react-router-dom";
import "@/style/archives/index.scss";
function Archives() {
  const navigate = useNavigate();
  // 跳转文章
  const gotoArchives = () => {
    navigate("/archives/linux");
  };
  return (
    <div className="main">
      <div className="img">
        <p>文章归档</p>
      </div>
      {/* 文章区域 */}
      <div className="archives">
        <p>
          <span>
            {/* <i className="iconfont icon-wenzhang"></i>2024-1-15 */}
          </span>
        </p>
        <div className="archive——box" onClick={() => gotoArchives()}>
          <i></i>
          <i></i>
          <div>[Linux] 初识Linux笔记</div>
        </div>
      </div>
    </div>
  );
}

export default Archives;
