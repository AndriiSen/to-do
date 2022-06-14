import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../redux/actions/deleteToDo";
import { restoreToDo } from "../redux/actions/restoreToDo";
import RestoreIcon from "@mui/icons-material/Restore";
import DeleteIcon from "@mui/icons-material/Delete";

interface ToDoItemProps {
  value: string;
  labelId: string;
  isDeletedList: boolean;
}

export const ToDoItem = ({ value, labelId, isDeletedList }: ToDoItemProps) => {
  const dispatch = useDispatch();

  const onDeleteToDo = (toDo: string) => {
    dispatch(deleteToDo(toDo));
  };

  const onRestoreToDo = (toDo: string) => {
    dispatch(restoreToDo(toDo));
  };
  return (
    <ListItem key={labelId} disablePadding>
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
          onClick={() =>
            isDeletedList ? onRestoreToDo(value) : onDeleteToDo(value)
          }
        >
          {isDeletedList ? <RestoreIcon /> : <DeleteIcon />}
        </IconButton>
      </ListItemButton>
    </ListItem>
  );
};
