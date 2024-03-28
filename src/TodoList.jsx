import "./todolist.css";
import {
  Checkbox,
  Divider,
  Flex,
  Input,
  Text,
  Button,
  IconButton,
  Grid,
  Spacer,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
export default function TodoList() {
  return (
    <Flex direction="column">
      <div className="up">
        <h1>Chores ToDo List</h1>
        <Grid
          justifyContent="center"
          marginBottom="10px"
          gap={5}
          direction="column"
          mr={5}
        >
          <Flex>
            <Checkbox colorScheme="green" mr={5} ml={2}>
              Create Guest Experience mobile check-in
            </Checkbox>
            <Spacer />
            <IconButton
              ml="5px"
              variant="outline"
              colorScheme="red"
              aria-label="Delete"
              icon={<DeleteIcon />}
            />
          </Flex>
          <Flex>
            <Checkbox colorScheme="green" mr={5} ml={2}>
              Document current CI/CD process
            </Checkbox>
            <Spacer />
            <IconButton
              ml="5px"
              variant="outline"
              colorScheme="red"
              aria-label="Delete"
              icon={<DeleteIcon />}
            />
          </Flex>
          <Flex>
            <Checkbox colorScheme="green" mr={5} ml={2}>
              Perform Code Review for final Pillow-talk release
            </Checkbox>
            <Spacer />
            <IconButton
              ml="5px"
              variant="outline"
              colorScheme="red"
              aria-label="Delete"
              icon={<DeleteIcon />}
            />
          </Flex>
          <Flex>
            <Checkbox colorScheme="green" mr={5} ml={2}>
              Implement new Color Pallete from Design Team
            </Checkbox>
            <Spacer />
            <IconButton
              ml="5px"
              variant="outline"
              colorScheme="red"
              aria-label="Delete"
              icon={<DeleteIcon />}
            />
          </Flex>
          <Flex>
            <Checkbox colorScheme="green" mr={5} ml={2}>
              Fix image uploading process for guest check-in
            </Checkbox>
            <Spacer />
            <IconButton
              ml="5px"
              variant="outline"
              colorScheme="red"
              aria-label="Delete"
              icon={<DeleteIcon />}
            />
          </Flex>
          <Flex>
            <Checkbox colorScheme="green" mr={5} ml={2}>
              Provide on boarding documentation
            </Checkbox>
            <Spacer />
            <IconButton
              ml="5px"
              variant="outline"
              colorScheme="red"
              aria-label="Delete"
              icon={<DeleteIcon />}
            />
          </Flex>
        </Grid>
      </div>
      <Divider></Divider>
      <div className="down">
        <h1>Done : 0</h1>
        <Flex direction="column" alignItems="center">
          <Text margin="10px"> Add todo </Text>
          <Input maxWidth={80} placeholder="Basic usage" margin="10px" />
          <Button width={20} ml="10px" colorScheme="blue" variant="solid">
            ADD TASK
          </Button>
        </Flex>
      </div>
    </Flex>
  );
}
