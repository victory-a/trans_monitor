import React from "react";
import Drawer, { useDrawer } from "components/Drawer";

export default function MobileNav() {
  const { isOpen: isDrawerOpen, onClose: onCloseDrawer } = useDrawer();

  return (
    <div>
      <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer} />
    </div>
  );
}
