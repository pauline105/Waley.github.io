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
        <div className="FinalShell">FinalShell</div>
        <p>第三方工具 用来操作Linux系统 避免在虚拟机里面使用Linux的不方便</p>
        <p>FinalShell下载</p>
        <p>
          Windows:
          <a
            target="blank"
            href="http://www.hostbuf.com/downloads/finalshell_install.exe"
          >
            http://www.hostbuf.com/downloads/finalshell_install.exe
          </a>
        </p>
        <p>
          Mac:
          <a
            target="blank"
            href="http://www.hostbuf.com/downloads/finalshell_install.pkg"
          >
            http://www.hostbuf.com/downloads/finalshell_install.pkg
          </a>
        </p>
        <h3>FinalShell 连接Linux</h3>
        <p>在Linunx系统中打开终端输入:</p>
        <CodeMirror theme={abyss} value="ifconfig"></CodeMirror>
        <p>会看到一个ens&lt;num&gt;信息,里面找到ip地址</p>
        <p>
          然后打开FinalShell软件
          点击右上窗口的左上文件夹,再点击新加文件夹,ssh连接
        </p>
        <p>
          设置名称,输入刚才查询到的ip地址,然后输入用户名和密码(需要和Linux系统的一样)
        </p>
        <p>添加完成后, 双击刚添加的选项即可连接</p>
        <h2>Linux命令行基础</h2>
        <p>无论什么命令,用于什么用途,在Linux中,命令有其通用的格式</p>
        <CodeMirror
          theme={abyss}
          value={`command [-options] [parameter]
// 1. command: 命令本身
// 2. -options: 可选,命令的一些选项, 可以通过选项控制命令的行为细节
// 3. parameter: 可选, 命令的参数, 多数用于命令的指向目标等`}
        ></CodeMirror>
        <h3>ls命令</h3>
        <p>ls命令的作用是列出目录下的内容, 语法细节如下:</p>
        <CodeMirror
          theme={abyss}
          value={`ls [-a -l -h] [Linux路径]
// -a -l -h噻可选的选项
// Linux路径是此命令可选的参数`}
        ></CodeMirror>
        <p>
          -a: 显示隐藏文件、 -l: 文件:以竖向方式排列,并展示更多内容.
          -h:查看文件大小. 写法可以写:
        </p>
        <CodeMirror theme={abyss} value={`ls -al -h`}></CodeMirror>
        <h3>mkdir命令</h3>
        <p>通过mkdir命令来创建新的目录(文件夹) Make Directory</p>
        <CodeMirror
          theme={abyss}
          value={`mkdir [-p] Linux路径
// ·参数必填,表示Linux路径,即要创建的文件夹的路径
// ·-p选项可选, 表示自动创建不存在的父目录, 适用于创建连续多层级的目录`}
        ></CodeMirror>
        <h3>touch 创建文件</h3>
        <CodeMirror
          theme={abyss}
          value={`// touch Linux路径
touch ~/waley/pauline/wyz.txt`}
        ></CodeMirror>
        <p>touch命令无选项, 参数必填, 表示要创建的文件路径</p>
        <h3>查看文件内容cat,more</h3>
        <p>
          cat:直接显示全部内容,
          more:支持翻页,如果内容过多显示一部分,使用空格翻页,q退出查看
        </p>
        <p>语法:</p>
        <h3>复制 移动 删除文件</h3>
        复制,移动语法类似:
        <CodeMirror
          theme={abyss}
          value={`cp [-r] 参数1 参数2
// -r选项, 可选, 用于复制文件夹使用, 表示递归
// 参数1, Linux路径, 表示被复制的文件或文件夹
// 参数2, Linux路径, 表示要复制去的地方`}
        ></CodeMirror>
        移动:movie
        <CodeMirror
          theme={abyss}
          value={`mv ~/waley/pauline/wys.txt ~/waley
// mv ~/waley/pauline/wys.txt ~/waley/pauline/ww.txt  同级目录做改名操作`}
        ></CodeMirror>
        删除:remove
        <CodeMirror
          theme={abyss}
          value={`rm [-r -f] 参数1 参数2....参数n
// 同cp命令一样, -r选项用于删除文件夹
// -f表示force, 强制删除(不会弹出提示确认信息) 普通用户删除不会弹出提示, 只有root管理员删除会提示
参数1、 参数2... 表示要删除的文件路径 空格隔开`}
        ></CodeMirror>
        删除-通配符:
        test*:表示匹配任何以test开头的内容,*test:表示任何以test结尾的内容,*test*:表示任何包含test的内容
        <h3>文件查找 find</h3>
        文件名模式“:
        <CodeMirror
          theme={abyss}
          value={`find 起始路径 -name '被查找的文件名'
// 也可以使用通配符`}
        ></CodeMirror>
        文件大小查找:
        <CodeMirror
          theme={abyss}
          value={`find 起始路径 -size +|-n[kMG]
// +、-表示大于和小于
// n表示大小数字
// kMG表示大小单位,k(小写字母)表示kb,M表示MB,G表示GB
// 示例:小于10kb: find / -size -10k`}
        ></CodeMirror>
        <h3>grep命令</h3>
        可以通过grep命令,从文件中通过关键字过滤文件行
        <CodeMirror
          theme={abyss}
          value={`grep [-n] 关键字 文件路径
// 选项-n, 可选, 表示在结果中显示匹配的行的行号
// 参数 关键字, 必填, 表示过滤的关键字, 带有空格或其他特殊符号,建议用“”将关键字包围起来
// 参数,文件路径, 必填, 表示要过滤内容的文件路径, 可作为内容输入端口`}
        ></CodeMirror>
        <h3>wc命令做数量统计</h3>
        <CodeMirror
          theme={abyss}
          value={`wc [-c -m -l -w] 文件路径
// -c 统计bytes数量
// -m 统计字符数量
// -l 统计行数
// -w 统计单词数量
// 文件路径, 被通缉的文件, 也可作为内容输入端口`}
        ></CodeMirror>
        <h3>管道符 |</h3>
        <CodeMirror theme={abyss} value={`cat waley/wys.txt | grep pauline
// 这里的作用是吧wys.txt的内容读取出来 作为grep pauline的查找路径`}></CodeMirror>
      </div>
    </div>
  );
}

export default Linux;
