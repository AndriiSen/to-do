import { useDispatch, useSelector } from "react-redux";
import { ToDoList } from "./components/ToDoList";
import { ToDoInput } from "./components/ToDoInput";
import { addToDo } from "./redux/actions/addToDo";
import { styled } from "@mui/system";
import { useState } from "react";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import { IconButton } from "@mui/material";
import Menu from "@mui/material/Menu";
import { ToDosState } from "./redux/reducers/toDosReducer";

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

const MenuStateTitle = styled("div")({
  padding: "5px",
});
const App = () => {
  const deletedToDos = useSelector((state: ToDosState) => state.deletedToDos);
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
          <ToDoList isDeletedList={false}></ToDoList>
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
            {deletedToDos.length > 0 ? (
              <ToDoList isDeletedList={true}></ToDoList>
            ) : (
              <MenuStateTitle>No deleted todos yeat</MenuStateTitle>
            )}
          </Menu>
        </ToDosContainer>
      </MainContainer>
    </div>
  );
};

export default App;
