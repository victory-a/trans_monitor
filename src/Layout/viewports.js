import { useMediaQuery } from "react-responsive";

export const MobileScreen = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 424 });

  if (isMobile) return children;
  return null;
};

export const NonMobileScreen = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 425 });

  if (isTablet) return children;
  return null;
};

export const TabletScreen = ({ children }) => {
  const isTablet = useMediaQuery({ maxWidth: 768 });

  if (isTablet) return children;
  return null;
};

export const NonTabletScreen = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768 });

  if (isTablet) return children;
  return null;
};
export const LaptopScreen = ({ children }) => {
  const isLaptop = useMediaQuery({ minWidth: 1025 });

  if (isLaptop) return children;
  return null;
};
