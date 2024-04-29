import {
  configureStore,
  createAction,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  carFormReducer,
  changeCost,
  changeName,
  useSelectFormValues,
} from "./slices/carFormSlice";
import {
  carListReducer,
  changeSearchTerm,
  addCar,
  deleteCar,
  selectCarListCars,
  selectCarListSearchTerm,
} from "./slices/carListSlice";

const reset = createAction("app/reset");

const rootReducer = combineReducers({
  carForm: carFormReducer,
  carList: carListReducer,
});

const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

// const store = configureStore({
//   reducer: {
//     carForm: carFormReducer,
//     carList: carListReducer,
//   },
// });

export {
  setupStore,
  reset,
  changeCost,
  changeName,
  changeSearchTerm,
  addCar,
  deleteCar,
  useSelectFormValues,
  selectCarListCars,
  selectCarListSearchTerm,
};
