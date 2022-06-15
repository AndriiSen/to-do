import List from "@mui/material/List";
import { useSelector } from "react-redux";
import { ToDosState } from "../redux/reducers/toDosReducer";
import { ToDoItem } from "./ToDoItem";

interface ToDoListProps {
  isDeletedList: boolean;
}

export const ToDoList = ({ isDeletedList }: ToDoListProps) => {
  const { deletedToDos, toDos } = useSelector((state: ToDosState) => state);
  const renderItem = (
    value: string,
    index: number,
    labelId: string,
    isDeletedList: boolean
  ) => {
    return (
      <ToDoItem
        key={value + index}
        value={value}
        labelId={labelId}
        isDeletedList={isDeletedList}
      ></ToDoItem>
    );
  };

  const renderToDoList = (itemsArray: string[]) => {
    return itemsArray.map((value, index) => {
      const labelId = `checkbox-list-label-${value}`;

      return renderItem(value, index, labelId, isDeletedList);
    });
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {renderToDoList(isDeletedList ? deletedToDos : toDos)}
    </List>
  );
};
