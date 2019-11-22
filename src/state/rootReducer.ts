import { combineReducers } from "redux-starter-kit"
import { reducer as toDosReducer } from "./toDosSlice"

export const rootReducer = combineReducers({ toDos: toDosReducer })

export type RootState = ReturnType<typeof rootReducer>