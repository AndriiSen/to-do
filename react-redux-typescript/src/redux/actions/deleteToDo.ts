type Action = { type: "DELETE_TO_DO"; payload: string };

export const deleteToDo = (toDo: string): Action => ({
  type: "DELETE_TO_DO",
  payload: toDo,
});
