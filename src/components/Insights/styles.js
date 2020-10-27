import styled from "styled-components";
import colors from "styles/colors";

export const CardWrapper = styled.div`
  width: 95%;
  gap: 3rem;
  display: grid;
  margin: 2rem auto;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-between;
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem;
  background-color: ${colors.white};

  border-radius: 5px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  h2 {
    font-size: 1.2rem;
    color: #787c90;
  }

  p {
    color: ${colors.primary};
    font-size: 1.8rem;
    font-weight: bold;
  }

  svg {
  }
`;
