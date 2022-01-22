import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import '@fontsource/montserrat';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/800.css';
import '@fontsource/montserrat/900.css';
import * as React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
  "colors": {
    "brand": {
      "50": "#F9E7E7",
      "100": "#F4D2D2",
      "200": "#E8A5A5",
      "300": "#DD7979",
      "400": "#D24C4C",
      "500": "#B72E2E",
      "600": "#932525",
      "700": "#6E1C1C",
      "800": "#491212",
      "900": "#250909"
    }
  }

})

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <Outlet />
  </ChakraProvider>
);
