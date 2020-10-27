import React from "react";
import { BarChart as RechartBarChart, Bar, XAxis, YAxis } from "recharts";
import { barData } from "data";

import { BarchartWrapper, BarchartContainer } from "./styles";
import { Box } from "@chakra-ui/core";

export default function VerticalBarchart() {
  return (
    <BarchartWrapper>
      <BarchartContainer>
        <h3>Orders</h3>
        <StackedVerticalBarChart />
        <p>
          Pending Orders: <span className="yellow">20</span>
        </p>
        <p>
          Reconcilled Orders: <span className="green">80</span>
        </p>
        <p>
          Total Orders: <span className="blue">100</span>
        </p>
      </BarchartContainer>
      <Box mt="2rem">
        <BarchartContainer>
          <h3>Payments</h3>
          <StackedVerticalBarChart />
          <p>
            Un-reconcilled Payments: <span className="yellow">20</span>
          </p>
          <p>
            Reconcilled Payments: <span className="green">80</span>
          </p>
          <p>
            Total Payments: <span className="blue">100</span>
          </p>
        </BarchartContainer>
      </Box>
    </BarchartWrapper>
  );
}

const StackedVerticalBarChart = () => {
  return (
    <RechartBarChart
      layout="vertical"
      width={300}
      height={50}
      data={barData}
      margin={{ top: 1, right: 0, left: 10, bottom: 1 }}
    >
      <XAxis hide type="number" />
      <YAxis hide dataKey="name" type="category" />
      <Bar dataKey="a" stackId="a" fill="#27AE60" radius={[10, 0, 0, 10]} barSize={8} />
      {/* <Bar dataKey="b" stackId="a" fill="#82ca9d" barSize={8} /> */}
      <Bar dataKey="c" stackId="a" fill="#EBC315" radius={[0, 10, 10, 0]} barSize={8} />
    </RechartBarChart>
  );
};
