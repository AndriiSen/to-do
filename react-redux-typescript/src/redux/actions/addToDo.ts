export type Action = { type: "ADD_TO_DO"; payload: string };

export const addToDo = (toDo: string): Action => ({
  type: "ADD_TO_DO",
  payload: toDo,
});
