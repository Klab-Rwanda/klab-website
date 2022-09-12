import { configureStore } from "@reduxjs/toolkit";
import membersReducer from "../feature/Member";

export const store = configureStore({
  reducer: {
    members:membersReducer,
  },
});
