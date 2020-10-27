import styled from "styled-components";
import colors from "styles/colors";
import { device } from "styles";

export const TableContainer = styled.div`
  height: 100%;
  width: 95%;
  margin: 2rem auto;
  overflow: scroll;
  border-radius: 8px;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media ${device.tablet} {
    min-height: calc(100vh - 60rem);
  }
`;

export const SectionTitle = styled.h2`
  font-weight: bold;
  font-size: 3.6rem;
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow: scroll;
  background: transparent;
`;

export const ControlsWrapper = styled.div`
  & .blue {
    color: ${colors.blue};
  }
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;

  @media ${device.laptop} {
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 0;
  }
`;

export const Table = styled.table`
  width: 1000px;
  table-layout: fixed;
  border-collapse: collapse;

  @media ${device.laptop} {
    width: 100%;
  }

  thead {
    background: #efeff0;
    border-radius: 4px;

    th {
      font-size: 1.4rem;
      color: #7f8fa4;
    }

    th:first-of-type {
      border-top-left-radius: 8px;
    }

    th:last-of-type {
      border-top-right-radius: 8px;
    }
  }

  tbody tr {
    cursor: pointer;
    background: #fff;
    position: relative;
    border-top: 1px solid #efeff0;
  }

  tbody tr:first-of-type {
    border: 0;
  }

  tbody tr:last-of-type {
    td:first-of-type {
      border-bottom-left-radius: 8px;
    }

    td:last-of-type {
      border-bottom-right-radius: 8px;
    }
  }

  th {
    color: #747474;
    text-align: left;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 17px;
    padding: 0.8rem 1.2rem;
    text-transform: uppercase;
  }

  td {
    color: #232323;
    font-size: 14px;
    padding: 1.2rem;
    font-weight: 500;
    position: relative;

    span.logo {
      color: #123077;
      font-size: 13px;
      font-weight: 500;
      line-height: 22px;
      border-radius: 4px;
      background: #f3f6fd;
      letter-spacing: 0.2px;
      mix-blend-mode: normal;
      padding: 0.3rem 0.5rem;
      margin-right: 0.825rem;
    }

    span.status {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      margin-right: 0.5rem;

      &.success {
        background-color: #62cfa6;
      }

      &.failed {
        background-color: #cf6262;
      }
    }

    span.old {
      color: #cf6262;
    }
  }
`;
