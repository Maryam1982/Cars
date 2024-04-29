import { createSlice, nanoid } from "@reduxjs/toolkit";

const carListSlice = createSlice({
  name: "carList",
  initialState: { cars: [], searchTerm: "" },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    deleteCar(state, action) {
      //Assumption: action.payload contains the id of the element we wish to remove
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload.id;
      });
      state.cars = updated;
    },
    addCar(state, action) {
      //Assumption: action.payload === {name:'something', price:120}
      // console.log("add car was executed");
      // console.log(action);
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
  },
});

export const { changeSearchTerm, deleteCar, addCar } = carListSlice.actions;
export const carListReducer = carListSlice.reducer;
export const selectCarListCars = (state) => state.cars;
export const selectCarListSearchTerm = (state) => state.searchTerm;
