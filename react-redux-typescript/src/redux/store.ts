import { createStore } from "redux";
import { toDosReducer } from "./reducers/toDosReducer";

export const store = createStore(toDosReducer);
