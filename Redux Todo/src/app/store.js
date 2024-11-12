import { configureStore } from "@reduxjs/toolkit";
import todoReduecer from "../features/todo/todoSlice"

export const store=configureStore({reducer:todoReduecer})