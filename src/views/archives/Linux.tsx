import React from "react";
import "@/style/archives/linux.scss";
import CodeMirror from "@uiw/react-codemirror";
import { abyss, abyssInit } from "@uiw/codemirror-theme-abyss";
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
          Linux是由林纳斯
          托瓦兹在1991年创立并发展至今成为服务器操作系统领域的核心系统(那年他才21岁)
        </p>
        <p>个人操作系统:macOS Windows 服务器操作系统: Linux</p>
        <p>Linux的组成如下:1.Linux系统内核 2.系统级应用程序</p>
        <p>
          ·内核提供系统最核心的功能,如:调度CPU、 调度内存、 调度文件系统、
          调度网络通讯、 调度IO等
        </p>
        <p>
          ·系统级应用程序, 可以理解为出场自带程序, 可提供用户快速上手操作系统,
          如:文件管理器、 任务管理器、 图片查看、 音乐播放等
        </p>
        <p>
          可以看出,内核是Linux操作系统最核心的所在, 系统级应用程序只是锦上添花
        </p>
        <p>Linux内核是免费开源的, 任何人都可以下载内核源代码并查看且修改</p>
        <p>
          Linux官网地址:
          <a target="blank" href="https://www.kernel.org">
            https://www.kernel.org
          </a>{" "}
          下载Linux内核
        </p>
        <br />
        <p className="Linux_release">Linux发行版</p>
        <p>
          内核是免费,开源的,这也就代表了: 任何人都可以获得并修改内核,
          并且自行集成系统级程序.提供了内核+系统级程序的完整封装,
          称之为Linux发行版
        </p>

        <div className="VMware_WorkStation">VMware WorkStation | Fusion</div>
        <p>选用VMware WorkStation软件来提供虚拟机</p>
        <p>
          (windows系统)下载地址:
          <a
            target="blank"
            href="https://www.vmware.com/cn/products/workstation-pro.html"
          >
            https://www.vmware.com/cn/products/workstation-pro.html
          </a>
        </p>
        <p>
          (Mac系统)下载地址:{" "}
          <a
            target="blank"
            href="https://www.vmware.com/cn/products/fusion.html"
          >
            https://www.vmware.com/cn/products/fusion.html
          </a>
        </p>
        <div className="CentOS">下载CentOS操作系统</div>
        <p>
          首先,需要下载操作系统安装文件,本次使用CentOS7.6版本进行学习
          <a
            target="blank"
            href="https://vault.centos.org/7.6.1810/isos/x86_64/"
          >
            https://vault.centos.org/7.6.1810/isos/x86_64/
          </a>
        </p>
        <p className="keng">
          说说遇见的坑: 我电脑cpu是m1
          能使用的centsos版本只有Centos-7-aarch64-08191738.iso的
          其他版本都会卡在安装页面!
        </p>
        <p>如果安装完成后没有可视化界面,需要登录后输入以下代码</p>
        <CodeMirror
          theme={abyss}
          value='yum groupinstall -y "GNOME Desktop"'
        ></CodeMirror>
        <p>安装完成后</p>
        <CodeMirror theme={abyss} value="init 5"></CodeMirror>
      </div>
    </div>
  );
}

export default Linux;
