import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles";
import styles from "styles/theme";
import App from "./App";
import { DrawerProvider } from "components/Drawer";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />

    <ThemeProvider theme={styles}>
      <CSSReset />
      <DrawerProvider>
        <App />
      </DrawerProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
