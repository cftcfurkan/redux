import { configureStore } from "@reduxjs/toolkit";
import numberSlice from "../slices/numberSlice";

export const store = configureStore({
    reducer: {
        number: numberSlice
    },
})