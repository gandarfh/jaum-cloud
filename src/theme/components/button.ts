import {
  ComponentSingleStyleConfig,
  SystemStyleObjectRecord,
  ThemeComponents,
} from "@chakra-ui/react";

type ButtonType = ThemeComponents["Button"];

const baseStyle: ButtonType["baseStyle"] = {
  fontWeight: "bold",
  borderRadius: "md",
  px: 2,
};

const defaultProps: ButtonType["defaultProps"] = {
  size: "md",
};

const sizes: SystemStyleObjectRecord = {
  xs: {
    borderRadius: "lg",
    height: "24px",
    fontWeight: "semiBold",
    fontSize: "14px",
  },
  sm: {
    borderRadius: "lg",
    height: "28px",
    fontWeight: "semiBold",
    fontSize: "14px",
  },
  md: {
    borderRadius: "lg",
    height: "42px",
    fontSize: "14px",
  },
  lg: {
    borderRadius: "3xl",
    height: "52px",
    fontSize: "14px",
  },
};

const variants = {
  primary: {
    color: "black.0",
    backgroundColor: "primary.800",
    _hover: {
      backgroundColor: "primary.900",
    },
  },
  light: {
    color: "black.500",
    backgroundColor: "black.100",
    _hover: {
      backgroundColor: "black.200",
    },
  },
  outline: {
    color: "black.500",
    fontSize: "t-md.1",
    backgroundColor: "black.0",
    borderColor: "black.200",
    display: "flex",
    align: "center",
    gap: "s2",
    _hover: {
      backgroundColor: "black.100",
    },
  },
};

export const Button: ComponentSingleStyleConfig = {
  baseStyle,
  defaultProps,
  sizes,
  variants,
};
