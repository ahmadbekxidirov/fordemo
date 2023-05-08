import { configureStore } from "@reduxjs/toolkit";
import createSlicer from "./createSlicer";
export const store = configureStore({
    reducer:{
    createSlicer,

    },
})