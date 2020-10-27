import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

export const NavLogoContainer = styled.div`
  margin: 2rem auto;
  svg {
    /* width: 4rem;
    height: auto;
    fill: transparent; */
  }
`;

export const MobileNavLogoContainer = styled.div`
  margin: 1rem auto;

  svg {
    width: 10rem;
    height: 4rem;
    margin: 0 auto;
    fill: transparent;
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

export const NavContentsWrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 6rem);
  width: 23rem;
  background-color: #fff;
`;

export const NavGroup = styled.section`
  width: 100%;
  margin-top: 3rem;

  h3 {
    text-align: left;
    color: ${colors.fauxBlck};
    font-weight: bold;
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
`;

export const NavGroup2 = styled(NavGroup)`
  width: 100%;
  margin-top: 1rem;

  h3 {
    text-align: left;
    color: ${colors.fauxBlck};
    font-weight: bold;
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }
`;

export const Navlist = styled.ul`
  display: none;
  justify-content: center;
  align-items: center;
  margin: 0 3.5rem;
  min-width: 100%;

  border: 1px solid green;
  @media ${device.tablet} {
    display: flex;
  }

  & li:not(:last-of-type) {
    margin-right: 5rem;
  }
`;

export const NavListItem = styled.li`
  list-style: none;
  margin: 1rem 0;

  a {
    color: ${colors.secondary};
    transition: color 0.32s ease-in-out;
    display: flex;
    padding-left: 2rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    border-left: 4px solid #fff;

    &.active {
      border-left: 4px solid #1875f0;
      background-color: #e9f1fd;
    }

    &:hover {
      color: ${colors.primary};
    }

    svg {
      margin-right: 1rem;
    }
  }
`;
