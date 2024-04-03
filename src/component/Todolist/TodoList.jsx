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
import { CheckIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
export default function TodoList() {
  const [listtodo, setListtodo] = useState([
    {
      todo: "Create Guest Experience mobile check-in",
      isDone: false,
      isUserClickEdit: false,
    },
    {
      todo: "Document current CI/CD process",
      isDone: false,
      isUserClickEdit: false,
    },
    {
      todo: "Perform Code Review for final Pillow-talk release",
      isDone: false,
      isUserClickEdit: false,
    },
    {
      todo: "Implement new Color Pallete from Design Team",
      isDone: false,
      isUserClickEdit: false,
    },
    {
      todo: " Fix image uploading process for guest check-in",
      isDone: false,
      isUserClickEdit: false,
    },
    {
      todo: "Provide on boarding documentation",
      isDone: false,
      isUserClickEdit: false,
    },
  ]);
  const renderList = () => {
    return listtodo.map((item, idx) => {
      return (
        <Flex key={idx}>
          {item.isUserClickEdit === true ? (
            <div>
              <Input
                maxWidth={80}
                placeholder=""
                margin="10px"
                type="text"
                onInput={(e) => onInputEdit(e)}
              />
              <Flex>
                <IconButton
                  ml="5px"
                  colorScheme="green"
                  aria-label="Delete"
                  icon={<CheckIcon />}
                  onClick={() => onButtonSave(idx)}
                />
                <Button
                  ml="5px"
                  colorScheme="red"
                  onClick={() => onCancelButton(idx)}
                >
                  X
                </Button>
              </Flex>
            </div>
          ) : (
            <Checkbox
              colorScheme="green"
              mr={5}
              ml={2}
              onChange={(e) => onChecked(e, idx)}
            >
              <Text as={item.isDone ? "s" : ""}>{item.todo}</Text>
            </Checkbox>
          )}
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
            onClick={() => onEditTodo(idx)}
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
    const newData = {
      todo: inputUser,
      isDone: false,
      isUserClickEdit: false,
    };
    setListtodo([newData, ...listtodo]);
  };
  const onDeleteClick = (idx) => {
    const newTodo = [...listtodo];
    newTodo.splice(idx, 1);
    setListtodo(newTodo);
  };
  const onEditTodo = (idx) => {
    let tempListTodo = listtodo;
    tempListTodo[idx].isUserClickEdit = true;
    setListtodo([...tempListTodo]);
  };
  let inputEdit = "";
  const onInputEdit = (e) => {
    inputEdit = e.target.value;
    console.log(inputEdit);
  };
  const onButtonSave = (idx) => {
    let editedList = listtodo;
    editedList[idx].todo = inputEdit;
    editedList[idx].isUserClickEdit = false;
    setListtodo([...editedList]);
  };
  const onCancelButton = (idx) => {
    let cancelList = listtodo;
    cancelList[idx].isUserClickEdit = !cancelList[idx].isUserClickEdit;
    setListtodo([...cancelList]);
  };
  const onChecked = (e, idx) => {
    let isChecked = e.target.checked;
    let completeList = listtodo;
    completeList[idx].isDone = isChecked;
    setListtodo([...completeList]);
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
        <h1>Done : {listtodo.filter((item) => item.isDone === true).length}</h1>
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
            onClick={onButtonClick}
          >
            ADD TASK
          </Button>
        </Flex>
      </div>
    </Flex>
  );
}
