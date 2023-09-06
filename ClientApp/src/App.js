import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./pages/Home";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home} />
      </BrowserRouter>
    );
  }
}
