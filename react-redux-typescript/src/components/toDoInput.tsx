import { AddBox } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import { styled } from "@mui/system";

const InputSection = styled("div")({
  display: "flex",
  flexDirection: "row",
  alignItems: "baseline",
  padding: "5px 0 5px 0",
});

interface ToDoInputProps {
  addToDo(toDo: string): void;
}
export const ToDoInput: React.FC<ToDoInputProps> = ({ addToDo }) => {
  const [newToDo, setNewToDo] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const updateTodo = (event: ChangeEvent<HTMLInputElement>) => {
    setNewToDo(event.target.value);
  };

  const onAddToDoClick = () => {
    if (!newToDo) {
      setError(true);
    } else {
      addToDo(newToDo);
      setNewToDo("");
      setError(false);
    }
  };

  return (
    <InputSection>
      <TextField
        error={error}
        onChange={updateTodo}
        label="Add new task"
        variant="outlined"
        helperText={error ? "Please enter new task" : ""}
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
