import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

export const GraphWrapper = styled.section`
  width: 95%;
  margin: 2rem auto;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media ${device.laptop} {
    flex-direction: row;
  }
`;

export const LineChartWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  cursor: pointer;
  background-color: ${colors.white};
  width: 100%;
`;

export const ChartControls = styled.div`
  padding: 1rem 3rem;

  h3 {
    font-weight: bold;
    color: "#4F4F4F";
    font-size: 1.8rem;
  }
`;

export const BarchartWrapper = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  margin-top: 2rem;
  cursor: pointer;

  @media ${device.laptop} {
    margin-left: 2rem;
    margin-top: 0;
  }
`;

export const BarchartContainer = styled.div`
  color: ${colors.primary};
  width: 100%;
  font-size: 1.4rem;
  padding: 3rem 1rem;
  background-color: ${colors.white};

  h3 {
    font-weight: bold;
  }
  p {
    & span {
      font-weight: bold;
    }
    & .yellow {
      color: ${colors.yellow};
    }

    & .green {
      color: ${colors.green};
    }
    & .blue {
      color: ${colors.blue};
    }
  }
`;
