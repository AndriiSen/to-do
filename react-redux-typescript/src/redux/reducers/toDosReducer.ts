export interface ToDosState {
  toDos: string[];
  deletedToDos: string[];
}

const initialState = {
  toDos: [],
  deletedToDos: [],
};

export const toDosReducer = (state: ToDosState = initialState, action: any) => {
  switch (action.type) {
    case "ADD_TO_DO": {
      return { ...state, toDos: [...state.toDos, action.payload] };
    }
    case "DELETE_TO_DO": {
      return {
        ...state,
        toDos: state.toDos.filter((el) => el !== action.payload),
        deletedToDos: [...state.deletedToDos, action.payload],
      };
    }
    case "RESTORE_TO_DO": {
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
