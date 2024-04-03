import {
  Button,
  Flex,
  Input,
  Avatar,
  Heading,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { px } from "framer-motion";
import React, { useState } from "react";
export default function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Flex justifyContent="center" alignItems="center" w="100%" h="100vh">
      <Flex
        direction="column"
        bg="white"
        padding="100px 50px"
        border="solid grey"
        borderRadius="20px"
        gap="10px"
        align="center"
      >
        <Avatar src="https://bit.ly/broken-link" />
        <Heading mb={4}>Welcome!</Heading>
        <Input placeholder="Username" />
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Enter password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
        <Button width="100px" colorScheme="blue">
          Log in
        </Button>
      </Flex>
    </Flex>
  );
}
