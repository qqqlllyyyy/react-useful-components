import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import ChartJS from "./charts/ChartJS.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/charts/chartjs" component={ChartJS} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
