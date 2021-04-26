import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import New_detail from "../components/New_detail";
import Tintuc from "../components/Tintuc";

class Dieuhuong extends Component {
  render() {
    return (

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/tintuc">
            <Tintuc />
          </Route>
          <Route path="/tin-tuc/:slug.:id.html">
            <New_detail />
          </Route>
        </Switch>
    
    );
  }
}

export default Dieuhuong;
