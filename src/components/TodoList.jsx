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
import React, { useState }  from "react";

export default function TodoList() {

  const [listTodo, setListTodo] = useState([
    "Create Guest Experience mobile check-in",
    "Document current CI/CD process",
    "Perform Code Review for final Pillow-talk release",
    "Implement new Color Pallete from Design Team",
    "Fix image uploading process for guest check-in",
    "Provide on boarding documentation",
  ]);

  let userInput = ""

  const renderList = () => {
    return listTodo.map((item, idx) => {
      return (
      <Flex key={idx}>
        <Checkbox colorScheme="green" mr={5} ml={2}>
          {item}
        </Checkbox>
        <Spacer />
        <IconButton
          ml="5px"
          variant="outline"
          colorScheme="red"
          aria-label="Delete"
          icon={<DeleteIcon />}
          onClick={() => onButtonDelete(idx)}
        />
      </Flex>
    );
    })
  }

  const onUserInput = (e) => {
    userInput = e.target.value
  }

  const onButtonClick = () => {
    setListTodo([ userInput, ...listTodo])
  }

  const onButtonDelete = (e) => {
    let deletedIndex = e.target.value
    console.log("lakuin delete")
  }

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
          {renderList()}
        </Grid>
      </div>
      <Divider></Divider>
      <div className="down">
        <h1>Done : 0</h1>
        <Flex direction="column" alignItems="center">
          <Text margin="10px"> Add todo </Text>
          <Input maxWidth={80} placeholder="Basic usage" margin="10px" onInput={(e) => onUserInput(e)}/>
          <Button width={20} ml="10px" colorScheme="blue" variant="solid" onClick={() => onButtonClick()}>
            ADD TASK
          </Button>
        </Flex>
      </div>
    </Flex>
  );
}
