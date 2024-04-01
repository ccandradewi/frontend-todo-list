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
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
export default function TodoList() {
  const [listtodo, setListtodo] = useState([
    "Create Guest Experience mobile check-in",
    "Document current CI/CD process",
    "Perform Code Review for final Pillow-talk release",
    "Implement new Color Pallete from Design Team",
    " Fix image uploading process for guest check-in",
    "Provide on boarding documentation",
  ]);
  const renderList = () => {
    return listtodo.map((item, idx) => {
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
            onClick={() => onDeleteClick(idx)}
          />
          <IconButton
            ml="5px"
            variant="outline"
            colorScheme="blue"
            aria-label="Delete"
            icon={<EditIcon />}
            onClick={() => onEditTodo()}
          />
        </Flex>
      );
    });
  };
  let inputUser = "";
  const oninputUser = (e) => {
    inputUser = e.target.value;
    console.log(inputUser);
  };
  const onButtonClick = () => {
    setListtodo([inputUser, ...listtodo]);
  };
  const onDeleteClick = (idx) => {
    const newTodo = [...listtodo];
    newTodo.splice(idx, 1);
    setListtodo(newTodo);
  };
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
        <h1>Done : {}</h1>
        <Flex direction="column" alignItems="center">
          <Text margin="10px"> Add todo </Text>
          <Input
            maxWidth={80}
            placeholder="Enter a task..."
            margin="10px"
            type="text"
            onInput={(e) => oninputUser(e)}
          />
          <Button
            width={20}
            ml="10px"
            colorScheme="blue"
            variant="solid"
            onClick={() => onButtonClick()}
          >
            ADD TASK
          </Button>
        </Flex>
      </div>
    </Flex>
  );
}
