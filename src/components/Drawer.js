import React from "react";

import {
  useDisclosure,
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody
} from "@chakra-ui/core";

const Drawer = props => {
  return (
    <ChakraDrawer size="xs" placement="left" {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>{props.children}</DrawerBody>
      </DrawerContent>
    </ChakraDrawer>
  );
};

const DrawerContext = React.createContext();

export function DrawerProvider({ children }) {
  const { Provider } = DrawerContext;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return <Provider value={{ isOpen, onOpen, onClose }}>{children}</Provider>;
}
export function useDrawer() {
  const context = React.useContext(DrawerContext);

  if (context === undefined) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }

  return context;
}
export default Drawer;
