import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { theme } from "../src/theme/theme";
import { ContextProvider } from "../src/global/context/Context";
import { NotificationProvider } from "../src/global/context/NotificationContext";
import Navigation from "../src/components/navigation/Navigation";
import Image from "next/image";
import styled from "styled-components";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NotificationProvider>
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default MyApp;
