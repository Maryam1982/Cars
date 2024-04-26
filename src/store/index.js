import { configureStore, createAction } from "@reduxjs/toolkit";
import { carFormReducer, changeCost, changeName } from "./slices/carFormSlice";
import {
  carListReducer,
  changeSearchTerm,
  addCar,
  deleteCar,
} from "./slices/carListSlice";

const reset = createAction("app/reset");

const store = configureStore({
  reducer: {
    carForm: carFormReducer,
    carList: carListReducer,
  },
});

export {
  store,
  reset,
  changeCost,
  changeName,
  changeSearchTerm,
  addCar,
  deleteCar,
};
