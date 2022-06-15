import { IAddToDo } from "../constants/actionTypes";

export const addToDo = (toDo: string): IAddToDo => ({
  type: "ADD_TO_DO",
  payload: toDo,
});
