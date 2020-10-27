import React from "react";
import Drawer, { useDrawer } from "components/Drawer";
import { ReactComponent as Logo } from "assets/logo.svg";
import { MobileNavLogoContainer } from "./styles";
import { SideNavContainer } from "Layout/styles";
import { NavContents } from "./MainNav";
import { Box } from "@chakra-ui/core";

export default function MobileNav() {
  const { isOpen: isDrawerOpen, onClose: onCloseDrawer } = useDrawer();

  return (
    <div>
      {isDrawerOpen ? (
        <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
          <SideNavContainer>
            <MobileNavLogoContainer>
              <Logo />
            </MobileNavLogoContainer>
            <Box>
              <NavContents />
            </Box>
          </SideNavContainer>
        </Drawer>
      ) : null}
    </div>
  );
}
