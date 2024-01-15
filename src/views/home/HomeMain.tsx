// import React, { useState } from "react";
import HomeImg from "@/assets/img/home/ww.png";
import "@/style/home/home.scss";
import ReactAplayer from "react-aplayer";

function Home() {
  // const [ap, setAp] = useState<any>();
  // 音乐播放器配置
  const onPlay = () => {
    console.log("on play");
  };

  const onPause = () => {
    console.log("on pause");
  };

  // example of access aplayer instance
  // const onInit = (ap: any) => {
  //   ap = ap;
  // };
  const props = {
    theme: "#F57F17",
    lrcType: 3,
    audio: [
      {
        name: "救命",
        artist: "倪安东",
        url: "https://dl.stream.qqmusic.qq.com/C400000ky4wc42VVij.m4a?guid=5229213351&vkey=1F678AA33C31BE4E0B2CFEF5458B2EEC693EF89FA8F4817A43496DB9518C3FA749BE3FDBAFE9A26AA52F7ECB1CFC54441BC5D983FA1B5CBE&uin=1402759629&fromtag=120032",
        cover:
          "https://y.qq.com/music/photo_new/T002R300x300M00000448d8X3XUh2T.jpg?max_age=2592000",
        lrc: "../../assets/lyric/救命-倪安东.lrc",
        theme: "#f09b8",
      },
    ],
  };
  return (
    <div>
      <div>
        {/* 背景图 */}
        <div className="backgroundImg">
          <img src={HomeImg} alt="" />
        </div>
        {/* 中间Hi,Waley! */}
        <div className="center_text">
          <h1>Hi, Waley!</h1>
          <div>
            <span>
              “ You got to put the past behind you before you can move on. ”
            </span>
            <p>
              <svg className="iconfont" aria-hidden="true">
                <use href="#icon-csdn"></use>
              </svg>
              <svg className="iconfont" aria-hidden="true">
                <use href="#icon-github"></use>
              </svg>
              <svg className="iconfont" aria-hidden="true">
                <use href="#icon-QQ"></use>
              </svg>
              <svg className="iconfont" aria-hidden="true">
                <use href="#icon-weixin"></use>
              </svg>
              <svg className="iconfont" aria-hidden="true">
                <use href="#icon-QQyinle"></use>
              </svg>
            </p>
          </div>
        </div>
        {/* 播放器 */}
        <ReactAplayer
          {...props}
          // onInit={onInit}
          onPlay={onPlay}
          onPause={onPause}
        />
      </div>
    </div>
  );
}

export default Home;
