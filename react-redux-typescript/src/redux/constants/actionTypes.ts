export const ActionTypes = {
  RESTORE_TO_DO: "RESTORE_TO_DO",
  DELETE_TO_DO: "DELETE_TO_DO",
  ADD_TO_DO: "ADD_TO_DO",
};

export interface IActionType {
  type: string;
  payload: string;
}

export interface IRestoreToDo extends IActionType {
  type: "RESTORE_TO_DO";
}

export interface IDeleteToDo extends IActionType {
  type: "DELETE_TO_DO";
}

export interface IAddToDo extends IActionType {
  type: "ADD_TO_DO";
}
