import thunk from "redux-thunk"
import { basketSlice } from "./basket/basketSlice"
import { mealsSlices } from "./meals/mealsSlice"

const { combineReducers, createStore, applyMiddleware } = require("redux")
const rootReducer = combineReducers({
  [mealsSlices.name]: mealsSlices.reducer,
  [basketSlice.name]: basketSlice.reducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
