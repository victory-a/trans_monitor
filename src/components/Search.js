import React from "react";
import styled from "styled-components";
import { Input, Icon, InputGroup, InputLeftElement } from "@chakra-ui/core";

export const Search = props => {
  const { placeholder, onChange, value } = props;

  return (
    <InputGroup flex="1" mx="10rem" width="50%">
      <InputLeftElement children={<Icon name="search" color="gray.300" />} />

      <Input
        type="text"
        value={value}
        name="search"
        onChange={onChange}
        size="lg"
        placeholder={placeholder}
      />
    </InputGroup>
  );
};

export const SearchInput = styled(Input)`
  width: 100%;
  border-radius: 8px;
  text-indent: 1.2rem;
  padding: 1rem 0;
`;
