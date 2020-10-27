import React from "react";
import { TableContainer, TableWrapper, Table as StyledTable } from "./styles.js";
import { Tablecontents } from "data";
import { ReactComponent as Arrow } from "assets/arrow-down.svg";
import { Box, Flex, Avatar, Button } from "@chakra-ui/core";

export default function Table() {
  return (
    <TableContainer>
      <TableWrapper>
        <StyledTable>
          <TableHeading />
          <TableContent content={Tablecontents} />
        </StyledTable>
      </TableWrapper>
    </TableContainer>
  );
}

function TableHeading() {
  const heading = ["Item Type", "Price", "Transaction No", "Time", "Status"];

  return (
    <thead>
      {heading.map(item => {
        if (item === "Item Type") {
          return (
            <th key={item} style={{ width: "30%" }}>
              {item}
            </th>
          );
        }
        if (item === "Transaction No") {
          return (
            <th key={item} style={{ width: "20%" }}>
              {item}
            </th>
          );
        }
        if (item === "Price" || item === "Time") {
          return (
            <th key={item} style={{ width: "15%" }}>
              {item}
            </th>
          );
        }

        return <th key={item}>{item}</th>;
      })}
    </thead>
  );
}

function TableContent({ content }) {
  return (
    <tbody>
      {content.map((item, index) => (
        <tr key={`${index}-${item.firstname}`}>
          <td>
            {
              <Flex align="center">
                <Avatar
                  size="md"
                  rounded="full"
                  name={`${item.firstName} ${item.lastName}`}
                  src={item?.image}
                  mr="2rem"
                />
                <p>{item.device}</p>
              </Flex>
            }
          </td>
          <td>{`$ ${item.price}`}</td>
          <td>{item.transactionNo}</td>
          <td>{item.time}</td>
          <td>
            <Flex align="center">
              <Button
                variant="outline"
                width="12rem"
                py="1.6rem"
                rounded="5rem"
                color={
                  item.status === "reconciled"
                    ? "monitor.green"
                    : item.status === "pending"
                    ? "monitor.yellow"
                    : "monitor.un"
                }
              >
                <span
                  className={
                    item.status === "reconciled"
                      ? "green"
                      : item.status === "pending"
                      ? "yellow"
                      : "un"
                  }
                ></span>
                {item.status}
              </Button>
              <Box ml="0.5rem">
                <Arrow />
              </Box>
            </Flex>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
