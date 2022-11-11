import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
    const dataPointValuesForTotalMax = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMax = Math.max(...dataPointValuesForTotalMax); //Trzy kropki bo doda oddzielnie a nie jako array

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
