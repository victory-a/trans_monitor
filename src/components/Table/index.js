import React from "react";
import {
  TableContainer,
  TableWrapper,
  Table as StyledTable,
  SectionTitle,
  ControlsWrapper,
  ControlsContainer
} from "./styles.js";
import { tablecontents } from "data";
import { Search } from "components/Search";
import { ReactComponent as Arrow } from "assets/arrow-down.svg";
import { Box, Flex, Avatar, Button } from "@chakra-ui/core";
import CustomMenu from "components/CustomMenu.js";
import Fuse from "fuse.js";
import { LaptopScreen } from "Layout/viewports";

export default function Table() {
  const [filtered, setFiltered] = React.useState(tablecontents);

  // value from menu select
  const [selected, setSelected] = React.useState({
    label: "All",
    value: "all"
  });

  // value from search bpx
  const [searchTerm, setSearchTerm] = React.useState("");

  // select change handler
  React.useEffect(() => {
    if (selected.value) {
      let results = tablecontents;

      if (selected.value === "all") results = tablecontents;
      else {
        results = tablecontents.filter(({ status }) => status === selected.value);
      }

      setFiltered(results);
    }
  }, [selected.value]);

  // search box change handler
  React.useEffect(() => {
    const fuse = new Fuse(tablecontents, {
      keys: ["device", "transactionNo"]
    });

    const searchString = searchTerm.trim();
    const results = fuse.search(searchString).map(({ item }) => item);

    if (results.length > 0) {
      setFiltered(results);
    } else {
      setFiltered(tablecontents);
    }
  }, [searchTerm]);

  return (
    <TableContainer>
      <SectionTitle>Payments</SectionTitle>
      <ControlsWrapper>
        <ControlsContainer>
          <LaptopScreen>
            <Flex mr="10rem">
              <Box as="p" mr="1rem">
                Showing
              </Box>
              <Box as="p" mr="1rem" className="blue">
                20
              </Box>
              <Box as="p">out of 500 payments</Box>
            </Flex>
          </LaptopScreen>

          <Search
            placeholder="Search by device name or transaction ID"
            value={searchTerm}
            onChange={({ target }) => setSearchTerm(target.value)}
          />

          <LaptopScreen>
            <Flex ml="10rem">
              <Box as="p" mr="2rem">
                Show
              </Box>

              <Box>
                <CustomMenu {...{ selected, setSelected }} />
              </Box>
            </Flex>
          </LaptopScreen>
        </ControlsContainer>
      </ControlsWrapper>
      <TableWrapper>
        <StyledTable>
          <TableHeading />
          <TableContent content={filtered} />
        </StyledTable>
      </TableWrapper>
    </TableContainer>
  );
}

function TableHeading() {
  const heading = ["Item Type", "Price", "Transaction No", "Time", "Status"];

  return (
    <thead>
      <tr>
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
      </tr>
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
