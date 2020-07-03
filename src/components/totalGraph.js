import React from "react";
import { Bar } from "react-chartjs-2";

const TotalGraph = (props) => {
  console.log(props.data);
  let confirmed = props.data.confirmed ? props.data.confirmed : "--";
  let active = props.data.active ? props.data.active : "--";
  let recovered = props.data.recovered ? props.data.recovered : "--";
  let deaths = props.data.deaths ? props.data.deaths : "--";
  let state = {
    labels: ["Confirmed", "Active", "Recovered", "Deaths"],
    datasets: [
      {
        label: "People",
        //backgroundColor: "rgba(75,192,192,1)",
        hoverBackgroundColor: ["#dc3545", "#ff0011", "#175000", "#451208"],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [confirmed, active, recovered, deaths],
      },
    ],
  };
  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Number of people affected ",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};

export default TotalGraph;
