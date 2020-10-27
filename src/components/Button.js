import styled from "styled-components";
import { Button } from "@chakra-ui/core";

const StyledButton = styled(Button)`
  background-color: #27ae60 !important;
  color: #fff;
  border-radius: 60px !important;
  padding: 18px 5px;
  display: inline-block;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  margin-right: auto;
  padding-left: 2rem;
`;

export default StyledButton;
