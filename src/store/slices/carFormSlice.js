import { createSlice } from "@reduxjs/toolkit";

const carFormSlice = createSlice({
  name: "carForm",
  initialState: { name: "", cost: 0 },
  reducers: {
    changeName(state, action) {
      //We will receive an action with a payload containing name
      state.name = action.payload;
    },
    changeCost(state, action) {
      //We will receive an action with a payload containing cost
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase("app/reset", (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeName, changeCost } = carFormSlice.actions;
export const carFormReducer = carFormSlice.reducer;
export const useSelectFormValues = (state) => {
  return { name: state.name, cost: state.cost };
};
