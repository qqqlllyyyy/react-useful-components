import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard.js";
import ChartJS from "./charts/ChartJS.js";
import PlotlyWrapper from "./charts/PlotlyWrapper.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div style={{ marginLeft: "100px" }}>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/charts/chartjs" component={ChartJS} />
          <Route exact path="/charts/plotly" component={PlotlyWrapper} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
