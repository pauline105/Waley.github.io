import React from "react";
import "@/style/archives/linux.scss";
function Linux() {
  return (
    <div className="main">
      <div className="LinuxImg">
        <div>
          <p>「Linux」初识</p>
          <p>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202005%2F29%2F20200529144350_rVkCw.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1707896820&t=1c08f6136bbbfab16b8761b402111d56"
              alt=""
            />
            Waley · 发布于 2024-01-15 · 最后编辑于 2024-01-15
          </p>
        </div>
      </div>
      {/* 文章正文 */}
      <div className="main_body">
        <span>前言</span>
        <p>
          本菜鸟正在学习后端, 现在开始要学习linux, 目前都是静态文本,
          后续学会后端, 会把内容全部更新为接口, 以此文章作为笔记, 防止自己忘记,
          也是自己的第一个项目, 如有不好, 多多担待
        </p>
      </div>
    </div>
  );
}

export default Linux;
