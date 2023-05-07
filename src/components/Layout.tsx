import { Container, Flex } from "@chakra-ui/react";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Flex align="flex-start">
      <Navbar />
      {children}
    </Flex>
  );
};

export default Layout;
