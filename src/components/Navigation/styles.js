import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

export const NavLogoContainer = styled.div`
  svg {
    /* width: 4rem;
    height: auto;
    fill: transparent; */
  }
`;

export const TopNavlist = styled.ul`
  display: none;
  justify-content: center;
  align-items: center;

  @media ${device.tablet} {
    display: flex;
  }

  & li:not(:last-of-type) {
    margin-right: 5rem;
  }
`;

export const NavListItem = styled.li`
  a {
    color: ${colors.secondary};
    transition: color 0.32s ease-in-out;

    &:hover {
      color: ${colors.primary};
    }

    &.active {
      color: ${colors.primary};
    }
  }
`;

export const NotificationWrapper = styled.div`
  position: relative;
  margin: 0 3rem;
  cursor: pointer;

  svg {
    height: 18px;
    width: 20px;
  }
`;
export const NotificationBadge = styled.p`
  position: absolute;
  font-size: 0.7rem;
  top: -5px;
  right: 2px;
  background-color: #1860ec;
  color: ${colors.white};
  padding: 1.8px 3px;
  border-radius: 80%;
`;
