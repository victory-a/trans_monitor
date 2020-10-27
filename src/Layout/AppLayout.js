import React from "react";
import { TopNav, MainNav, MobileNav } from "components/Navigation";

import { NonTabletScreen, TabletScreen } from "./viewports";
import {
  Container,
  MainContentContainer,
  MainContentWrapper,
  SideNavContainer,
  TopNavContainer
} from "./styles";

export default function AppLayout({ children }) {
  const { Provider } = PageDetailsContext;
  const [pageTitle, setPageTitle] = React.useState("");
  return (
    <Provider value={{ pageTitle, setPageTitle }}>
      <Container>
        <TopNavContainer>
          {/* <TopNav /> */}
          <TopNav />
        </TopNavContainer>

        <MainContentContainer>
          <NonTabletScreen>
            <SideNavContainer>
              <MainNav />
            </SideNavContainer>
          </NonTabletScreen>

          <TabletScreen>
            <MobileNav></MobileNav>
          </TabletScreen>

          <MainContentWrapper>{children}</MainContentWrapper>
        </MainContentContainer>
      </Container>
    </Provider>
  );
}

// custom hook for accessing pagedetails
export const usePageDetails = () => {
  const context = React.useContext(PageDetailsContext);

  if (context === undefined) {
    throw new Error("usePageDetails must be used within a PageDetailsProvider");
  }

  return context;
};

const PageDetailsContext = React.createContext();
