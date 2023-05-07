import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

type NavLinkProps = {
  children: React.ReactNode;
  path: string;
};

type ContentProps = {
  title: string;
  links: NavLinkProps[];
};

const Content = ({ links, title }: ContentProps) => {
  return (
    <Box mt="24px" bg="white" rounded="8px" px="8px" py="12px">
      <Text fontWeight="bold" fontSize="12px" textTransform="uppercase">
        {title}
      </Text>
      <Flex mt="10px" gap="10px" direction="column">
        {links.map((link, index) => (
          <NavLink key={index} path={link.path}>
            {link.children}
          </NavLink>
        ))}
      </Flex>
    </Box>
  );
};

const NavLink = ({ children, path }: NavLinkProps) => {
  const route = useRouter();
  const isActive = false;
  return <Button onClick={() => route.push(path)}>{children}</Button>;
};

const mainLinks: NavLinkProps[] = [
  { path: "/dashboard", children: <>Dashboard</> },
  { path: "/projects", children: <>Projetos</> },
  { path: "/profile", children: <>Perfil</> },
  { path: "/integrations", children: <>Integrações</> },
];

const settingsLinks: NavLinkProps[] = [
  { path: "/settings", children: <>Configurações</> },
];

const Navbar = () => {
  return (
    <Box w="300px" py="32px">
      <h1>LOGO</h1>
      <Content title="Principal" links={mainLinks} />
      <Content title="Preferências" links={settingsLinks} />
      <Button
        mt="24px"
        bg="red.200"
        color="red.800"
        colorScheme="red"
        variant="solid"
        w="full"
      >
        Sair
      </Button>
    </Box>
  );
};

export default Navbar;
