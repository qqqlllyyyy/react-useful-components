import React, { Component } from "react";
import Plotly from "plotly.js/dist/plotly-cartesian";

class PlotlyPlot extends Component {
  componentDidMount() {
    this.drawplot();
  }

  componentDidUpdate() {
    this.drawplot();
  }

  drawplot() {
    Plotly.newPlot(
      "plotly",
      [
        {
          x: this.props.xData,
          y: this.props.yData,
          type: "scatter"
        }
      ],
      {
        margin: {
          t: 0,
          r: 0,
          l: 30
        },
        xaxis: {
          gridcolor: "transparent"
        }
      },
      {
        displayModeBar: false
      }
    );
  }

  render() {
    return (
      <div>
        <div id="plotly" />
        <button onClick={this.props.refreshPlot}>Click to Update</button>
      </div>
    );
  }
}

export default PlotlyPlot;
