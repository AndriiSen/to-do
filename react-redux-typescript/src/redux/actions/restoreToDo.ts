type Action = { type: "RESTORE_TO_DO"; payload: string };

export const restoreToDo = (toDo: string): Action => ({
  type: "RESTORE_TO_DO",
  payload: toDo,
});
