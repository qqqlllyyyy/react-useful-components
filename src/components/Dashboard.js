import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>Useful React Components:</h3>
        <ul>
          <li>
            <Link to="/charts/chartjs">Chart.js</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Dashboard;
