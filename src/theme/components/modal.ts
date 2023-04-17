import { ComponentMultiStyleConfig, SystemProps } from "@chakra-ui/react";

const baseStyle: Record<string, SystemProps> = {
  overlay: {
    backdropFilter: "blur(5px)",
  },
  closeButton: {
    top: "20px",
    right: "15px",
  },
};

export const Modal: ComponentMultiStyleConfig = {
  parts: ["overlay", "dialogContainer", "closeButton"],
  baseStyle,
};
