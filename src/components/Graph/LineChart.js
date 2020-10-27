import React from "react";
import { Box } from "@chakra-ui/core";
import {
  XAxis,
  YAxis,
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from "recharts";

import { lineData } from "data";
import { LineChartWrapper, ChartControls, ChartController } from "./styles";

export default function LineChart() {
  return (
    <LineChartWrapper>
      <ChartControls>
        <h3>Today: 5, Aug 2018</h3>
        <Box></Box>
      </ChartControls>
      <ResponsiveContainer width="99%" aspect={2.5}>
        <AreaChart data={lineData}>
          <defs>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0294FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0294FF" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" axisLine={false} tickLine={false} orientation="top" />
          <YAxis axisLine={false} tickLine={false} hide />
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#0294FF"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </LineChartWrapper>
  );
}
