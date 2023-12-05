import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  name: "number",
  initialState: {
    value: 5,
    point: 'Redux',
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    changePointByInput: (state, action) => {
      state.point = action.payload;
    },
  },
});

export const { increment, changePointByInput     } = numberSlice.actions;

export default numberSlice.reducer;
