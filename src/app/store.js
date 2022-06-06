import { configureStore } from "@reduxjs/toolkit";
import devsReducer from "../features/devSlice";

export default configureStore({
  reducer: { devs: devsReducer },
});
