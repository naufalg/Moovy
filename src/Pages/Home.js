import React from "react";
import MovieNowPlaying from "../Components/MovieNowPlaying";
import AntdHeader from '../Components/WebElements/AntdHeader';
import "../Components/Style/Home.scss";

// antdesign
import { Layout, Menu, Breadcrumb } from "antd";
const { Header, Content, Footer } = Layout;


export default function Home() {
  return (
    <Layout className="layout">
    <AntdHeader/>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Now Playing</Breadcrumb.Item>
          {/* <Breadcrumb.Item>App</Breadcrumb.Item> */}
        </Breadcrumb>
        <div className="site-layout-content">
          <MovieNowPlaying />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        naufalg ©2018 powered by antd
      </Footer>
    </Layout>
  );
}