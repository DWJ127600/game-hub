import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        cursor="pointer"
        onClick={() => navigate("/")}
      ></Image>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
