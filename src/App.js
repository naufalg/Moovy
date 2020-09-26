import React from "react";
// routerDom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// css
import "./App.css";
// pages
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
