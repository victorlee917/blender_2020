import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Home from "Routes/Home";
import { Helmet } from "react-helmet";

export default () => (
  <>
    <Router>
      {/* <Helmet>
      <link
        rel="shortcut icon"
        type="image/png"
        href="https://junwoolee.me/favicon.png"
      />
    </Helmet> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </>
);
