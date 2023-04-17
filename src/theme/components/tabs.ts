import { ComponentStyleConfig } from "@chakra-ui/react";

export const Tabs: ComponentStyleConfig = {
  baseStyle: {
    tablist: {
      pt: 0,
      pb: "s6",
      px: 0,
      borderBottom: "1px",
      borderBottomColor: "#F5F5F5 !important",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      button: {
        color: "black.500",
        fontWeight: 500,
        fontSize: "14px",
        p: 0,
        mr: "s3",
        _last: {
          mr: 0,
        },
        _selected: {
          color: "primary.400",
          fontWeight: 700,
          borderBottom: "2px",
          borderBottomColor: "primary.800",
        },
      },
    },
    tabpanels: {},
    tabpanel: {
      py: 0,
      px: 0,
    },
  },
  sizes: {
    sm: {},
    md: {},
  },
  variants: {},
  defaultProps: {
    variant: "unstyled",
  },
};
