import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeNavBar from "@/views/home/HomeNavBar";
import HomeMain from "@/views/home/HomeMain";
import Archives from "@/views/archives";
import Linux from "@/views/archives/Linux";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 首页 */}
        <Route element={<HomeNavBar />} path="/">
          {/* 首页主体 */}
          <Route element={<HomeMain></HomeMain>} index></Route>
          {/* 跳转文章标签 */}
          <Route element={<Archives></Archives>} path="/archives"></Route>
          {/* 跳转文章 */}
          <Route element={<Linux></Linux>} path="/archives/linux"></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
