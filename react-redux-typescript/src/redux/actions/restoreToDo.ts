import { IRestoreToDo } from "../constants/actionTypes";

export const restoreToDo = (toDo: string): IRestoreToDo => ({
  type: "RESTORE_TO_DO",
  payload: toDo,
});
