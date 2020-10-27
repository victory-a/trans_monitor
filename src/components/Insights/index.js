import React from "react";
import { Flex } from "@chakra-ui/core";
import { CardWrapper, CardContainer } from "./styles";
import { ReactComponent as Insight } from "assets/insight.svg";

export default function Insights() {
  return (
    <CardWrapper>
      <CardContainer>
        <Flex direction="column" mr="2rem">
          <h2>Daily Transaction Volume</h2>
          <p>2,342</p>
        </Flex>
        <Insight />
      </CardContainer>
      <CardContainer>
        <Flex direction="column" mr="2rem">
          <h2>Daily Transaction Value</h2>
          <p>₦4,000,000</p>
        </Flex>
        <Insight />
      </CardContainer>
      <CardContainer>
        <Flex direction="column" mr="2rem">
          <h2>Total Transaction Volume</h2>
          <p>452,000</p>
        </Flex>
        <Insight />
      </CardContainer>
      <CardContainer>
        <Flex direction="column" mr="2rem">
          <h2>Total Transaction Value</h2>
          <p>₦4,000,000</p>
        </Flex>
        <Insight />
      </CardContainer>
    </CardWrapper>
  );
}
