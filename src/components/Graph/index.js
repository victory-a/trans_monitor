import React from "react";
import { GraphWrapper } from "./styles";
import VerticalBarchart from "./VerticalBarchart";
import LineChart from "./LineChart";

export default function Graph() {
  return (
    <GraphWrapper>
      <LineChart />
      <VerticalBarchart />
    </GraphWrapper>
  );
}
