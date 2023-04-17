import { extendTheme } from "@chakra-ui/react";

import { Button } from "./components/button";
import { Container } from "./components/container";
import { Drawer } from "./components/drawer";
import { Heading } from "./components/heading";
import { Modal } from "./components/modal";
import { Tabs } from "./components/tabs";
import { Text } from "./components/text";
import { foundations } from "./foundations";

const theme = extendTheme({
  ...foundations,
  components: {
    Button,
    Container,
    Heading,
    Text,
    Modal,
    Drawer,
    Tabs,
  },
  styles: {
    global: {
      body: {
        background: "black.100",
        color: "black.700",
      },
    },
  },
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  layers: {
    base: 10,
    header: 15,
    menu: 25,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  config: {
    cssVarPrefix: "httui",
  },
  breakpoint(breakpoint: string) {
    const size = (this as any).breakpoints[breakpoint];

    return `@media screen and (min-width: ${size})`;
  },
});

export default theme;
