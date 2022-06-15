import { ActionTypes, IActionType } from "../constants/actionTypes";

export interface ToDosState {
  toDos: string[];
  deletedToDos: string[];
}

const initialState = {
  toDos: [],
  deletedToDos: [],
};

export const toDosReducer = (
  state: ToDosState = initialState,
  action: IActionType
) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_DO: {
      return { ...state, toDos: [...state.toDos, action.payload] };
    }
    case ActionTypes.DELETE_TO_DO: {
      return {
        ...state,
        toDos: state.toDos.filter((el) => el !== action.payload),
        deletedToDos: [...state.deletedToDos, action.payload],
      };
    }
    case ActionTypes.RESTORE_TO_DO: {
      return {
        ...state,
        toDos: [...state.toDos, action.payload],
        deletedToDos: state.deletedToDos.filter((el) => el !== action.payload),
      };
    }
    default:
      return state;
  }
};
