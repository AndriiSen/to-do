import { AddBox } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { styled } from "@mui/system";

const InputSection = styled("div")({
  display: "flex",
  justifyContent: "space-around",
});

interface ToDoInputProps {
  addToDo(toDo: string): void;
}
export const ToDoInput: React.FC<ToDoInputProps> = ({ addToDo }) => {
  const [newToDo, setNewToDo] = useState<string>("");

  const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(event.target.value);
  };

  const onAddToDoClick = () => {
    addToDo(newToDo);
    setNewToDo("");
  };

  return (
    <InputSection>
      <TextField
        onChange={updateTodo}
        label="Add new task"
        variant="outlined"
      />
      <Button
        onClick={onAddToDoClick}
        variant="outlined"
        startIcon={<AddBox />}
      >
        Add
      </Button>
    </InputSection>
  );
};
