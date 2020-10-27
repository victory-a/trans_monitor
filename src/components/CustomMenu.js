import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/core";

export default function CustomMenu({ selected, setSelected }) {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon="chevron-down" width="15rem">
        {selected.label}
      </MenuButton>
      <MenuList>
        {menuOptions.map((option, index) => (
          <MenuItem key={`option-${index}`} onClick={() => setSelected(option)}>
            {option.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

const menuOptions = [
  {
    label: "All",
    value: "all"
  },
  {
    label: "Pending",
    value: "pending"
  },
  {
    label: "Reconcilled",
    value: "reconciled"
  },
  {
    label: "Un-reconciled",
    value: "un-reconciled"
  }
];
