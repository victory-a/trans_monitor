import React from "react";
import { TableContainer, TableWrapper, Table as StyledTable } from "./styles.js";

export default function Table(props) {
  return (
    <TableContainer>
      <TableWrapper>
        <StyledTable>{props.children}</StyledTable>
      </TableWrapper>
    </TableContainer>
  );
}
