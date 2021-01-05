import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import Home from "./HomePage";
import PrintNumber from "./PrintNumbers";
import History from "./History";
export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/print"} component={PrintNumber} />
          <Route exact path={"/history"} component={History} />
        </Switch>
      </Router>
    </div>
  );
}
