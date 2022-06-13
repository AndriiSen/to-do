import {
  Checkbox,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useSelector } from "react-redux";
import { ToDosState } from "../redux/reducers/toDosReducer";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../redux/actions/deleteToDo";

export const ToDoList = () => {
  const toDos = useSelector((state: ToDosState) => state.toDos);
  const dispatch = useDispatch();

  const onDeleteToDo = (toDo: string) => {
    dispatch(deleteToDo(toDo));
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {toDos.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem key={value} disablePadding>
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={value} />
              <IconButton
                edge="end"
                aria-label="comments"
                onClick={() => onDeleteToDo(value)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
