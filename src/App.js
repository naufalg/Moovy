import React from "react";
// routerDom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// css
import "./App.css";
// pages
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import UpcomingMovie from "./Pages/UpcomingMovie";
// antd
import { Layout, Menu, Breadcrumb } from "antd";
import AntdHeader from "./Components/WebElements/AntdHeader";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <AntdHeader />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/UpcomingMovie">
            <UpcomingMovie />
          </Route>
          <Route exact path="/Movie/:id">
            <Movie />
          </Route>
        </Switch>
        <Footer style={{ textAlign: "center" }}>
          naufalg ©2020 powered by antd
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
