import { useDispatch } from "react-redux";
import { DeletedToDoList } from "./components/deletedToDoList";
import { ToDoInput } from "./components/toDoInput";
import { ToDoList } from "./components/toDoList";
import { addToDo } from "./redux/actions/addToDo";
import { styled } from "@mui/system";
import { useState } from "react";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ToDosContainer = styled("div")({
  padding: "5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const App = () => {
  const dispatch = useDispatch();
  const onAddToDo = (toDo: string) => {
    dispatch(addToDo(toDo));
  };
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <MainContainer>
        <ToDosContainer>
          <h2>Your assignments</h2>
          <ToDoInput addToDo={onAddToDo}></ToDoInput>
          <ToDoList></ToDoList>
        </ToDosContainer>
        <ToDosContainer>
          <IconButton onClick={handleClick}>
            <FolderDeleteIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <DeletedToDoList></DeletedToDoList>
          </Menu>
        </ToDosContainer>
      </MainContainer>
    </div>
  );
};

export default App;
