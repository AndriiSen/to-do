import { IDeleteToDo } from "../constants/actionTypes";

export const deleteToDo = (toDo: string): IDeleteToDo => ({
  type: "DELETE_TO_DO",
  payload: toDo,
});
