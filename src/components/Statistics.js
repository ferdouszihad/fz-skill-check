import React, { PureComponent } from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <div>
      <h2 class="py-3 m-2 rounded-2 bg-dark text-light text-center">
        Today Question Statistics
      </h2>
      <div className="container my-5">
        <BarChart
          className="mx-auto"
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
