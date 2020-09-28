import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import moovyLogo from "../Assets/Images/moovyLogoGreen.png";
import "../Style/Header.scss";

const { Header, Content, Footer } = Layout;

export default function AntdHeader() {
  return (
    <Header className="header header-font">
      <Link to ="/">
        <img src={moovyLogo} className="logo" alt="Moovy-Logo" />
      </Link>
      <Menu className="header header-font" theme="dark" mode="horizontal" 
      defaultSelectedKeys={["1"]}
      >
        <Menu.Item key="1">
          <Link to="/">Now Playing</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/upcoming-movie">Upcoming</Link>
        </Menu.Item>
        {/* <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item> */}
      </Menu>
    </Header>
  );
}
