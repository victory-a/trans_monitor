import styled from "styled-components";
import { device } from "styles";
import colors from "styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const TopNavContainer = styled.nav`
  width: 100vw;
  height: 6rem;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.white};
  box-shadow: 0px 4px 10px rgba(79, 79, 79, 0.07);
  padding: 1.5rem 2rem;
  z-index: 400;
`;

export const MainContentContainer = styled.div`
  width: 100vw;
  display: flex;
  height: calc(100vh - 6rem);
`;

export const SideNavContainer = styled.aside`
  height: 100%;
  width: 20rem;
  display: flex;
  background: ${colors.white};
  border: 1px solid red;

  a {
    &:hover {
      text-decoration: none;
    }
  }
`;

export const MainContentWrapper = styled.div`
  flex: 1;
  overflow-y: scroll;
  scroll-behavior: smooth;
`;
