import * as React from "react";
import { LineChart, Line } from "recharts";
const data = [
  {
    name: "Page A",
    pv: 2400,
  },
  {
    name: "Page B",
    pv: 1398,
  },
  {
    name: "Page C",
    pv: 9800,
  },
  {
    name: "Page D",
    pv: 3908,
  },
  {
    name: "Page E",
    pv: 4800,
  },
  {
    name: "Page F",
    pv: 3800,
  },
  {
    name: "Page G",
    pv: 4300,
  },
];

const Linechart = () => {
  return (
    <div>
      <LineChart width={100} height={50} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#015DE9" strokeWidth={2} />
      </LineChart>
    </div>
  );
};

export default Linechart;
