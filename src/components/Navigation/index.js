import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Box, Flex, Avatar } from "@chakra-ui/core";
import navList from "routes/navList";
import UserImage from "assets/user.svg";
import { ReactComponent as Logo } from "assets/logo.svg";
import { ReactComponent as Burger } from "assets/burger.svg";
import { AiOutlineBell } from "react-icons/ai";
import Drawer, { useDrawer } from "components/Drawer";

import { NavLogoContainer, TopNavlist, NotificationWrapper, NotificationBadge } from "./styles";

import { Search } from "components/Search";
import { NonTabletScreen, TabletScreen } from "Layout/viewports";

const user = {
  firstName: "Oluwaleke",
  lastName: "Ojo",
  image: <UserImage />,
  notificationCount: 8
};
export function TopNav() {
  const { isOpen: isDrawerOpen, onOpen: onOpenDrawer, onClose: onCloseDrawer } = useDrawer();

  return (
    <React.Fragment>
      <TabletScreen>
        <Box onClick={onOpenDrawer} cursor="pointer">
          <Burger />
        </Box>
      </TabletScreen>
      <NonTabletScreen>
        <Link to="/">
          <NavLogoContainer>
            <Logo />
          </NavLogoContainer>
        </Link>
      </NonTabletScreen>

      <NonTabletScreen>
        <Box>
          <Search />
        </Box>
      </NonTabletScreen>

      <Flex align="center">
        <TopNavlist>
          <li>
            <Link to="#!">Support</Link>
          </li>
          <li>
            <Link to="#!">FAQ</Link>
          </li>
        </TopNavlist>
        <NonTabletScreen>
          <NotificationWrapper>
            <AiOutlineBell />
            {user.notificationCount ? (
              <NotificationBadge>{user.notificationCount}</NotificationBadge>
            ) : null}
          </NotificationWrapper>

          <Box>
            <Flex align="flex-end" direction="column" cursor="pointer">
              <p>Hello</p>
              <p>{`${user.firstName} ${user.lastName}`}</p>
            </Flex>
          </Box>
        </NonTabletScreen>

        <Box mx="2rem" cursor="pointer">
          <Avatar name={`${user.firstName} ${user.lastName}`} src={UserImage} size="lg" />
        </Box>
      </Flex>

      <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer} />
    </React.Fragment>
  );
}
