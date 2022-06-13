import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import { useDispatch, useSelector } from "react-redux";
import { ToDosState } from "../redux/reducers/toDosReducer";
import { restoreToDo } from "../redux/actions/restoreToDo";

export const DeletedToDoList = () => {
  const deletedToDos = useSelector((state: ToDosState) => state.deletedToDos);
  const dispatch = useDispatch();

  const onRestoreToDo = (toDo: string) => {
    dispatch(restoreToDo(toDo));
  };
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {deletedToDos.map((value) => {
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
                onClick={() => onRestoreToDo(value)}
              >
                <RestoreIcon />
              </IconButton>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};
