import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import navlist from "routes/navList";
import StyledButton, { ButtonContainer } from "components/Button";
import { NavContentsWrapper, NavGroup, NavListItem, NavGroup2 } from "./styles";
import { Flex, Box } from "@chakra-ui/core";

export function NavContents() {
  const profileCategory = navlist.filter(({ category }) => category === "profile");
  const mainCategory = navlist.filter(({ category }) => category === "main");
  const paymentCategory = navlist.filter(({ category }) => category === "payments");
  const orderCategory = navlist.filter(({ category }) => category === "orders");
  const { pathname } = useLocation();

  return (
    <NavContentsWrapper>
      <ButtonContainer>
        <StyledButton>GENERATE INVOICE</StyledButton>
      </ButtonContainer>

      <NavGroup>
        <h3>Main</h3>
        <NavListItem key={`navlink-${mainCategory[0].path}`}>
          <NavLink to={mainCategory[0].path} activeClassName={`${pathname === "/" && "active"}`}>
            <Flex justify="flex-start" align="center">
              <Box mr="1rem">{mainCategory[0].logo}</Box>
              <p>{mainCategory[0].title}</p>
            </Flex>
          </NavLink>
        </NavListItem>
      </NavGroup>

      <NavGroup>
        <h3>Payments</h3>
        {paymentCategory.map(link => {
          return (
            <NavListItem key={`navlink-${link.path}`}>
              <NavLink to={link.path} activeClassName={"active"}>
                {link.logo}
                <p>{link.title}</p>
              </NavLink>
            </NavListItem>
          );
        })}
      </NavGroup>

      <NavGroup>
        <h3>Orders</h3>
        {orderCategory.map(link => {
          return (
            <NavListItem key={`navlink-${link.path}`}>
              <NavLink to={link.path} activeClassName={"active"}>
                {link.logo}
                <p>{link.title}</p>
              </NavLink>
            </NavListItem>
          );
        })}
      </NavGroup>

      <NavGroup2>
        <NavListItem key={`navlink-${profileCategory[0].path}`}>
          <NavLink to={profileCategory[0].path} activeClassName={"active"}>
            <Flex justify="flex-start" align="center">
              <Box mr="1rem">{profileCategory[0].logo}</Box>
              <p>{profileCategory[0].title}</p>
            </Flex>
          </NavLink>
        </NavListItem>
      </NavGroup2>
    </NavContentsWrapper>
  );
}

export default function MainNav() {
  return (
    <div>
      <NavContents />
    </div>
  );
}
