import React, { Component } from "react";
import PlotlyPlot from "./PlotlyPlot";

class PlotlyWrapper extends Component {
  constructor() {
    super();
    this.state = {
      xData: [1, 2, 3, 4],
      yData: [3, 4, 4, 6]
    };
  }

  refreshPlot() {
    this.setState({
      xData: [1, 2, 3, 4],
      yData: [4, 3, 2, 1]
    });
  }

  render() {
    return (
      <div>
        <PlotlyPlot
          xData={this.state.xData}
          yData={this.state.yData}
          refreshPlot={this.refreshPlot.bind(this)}
        />
      </div>
    );
  }
}

export default PlotlyWrapper;
