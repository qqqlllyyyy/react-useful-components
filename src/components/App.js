import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Dashboard} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
