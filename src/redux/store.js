import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './slice/slice'

export const store = configureStore({reducer:{
    todo: todoSlice
}})