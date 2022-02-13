import { configureStore } from "@reduxjs/toolkit";
import reducer from "./templates";
import api from "./middleware/api";

export default function configStore() {
  return configureStore({
      reducer: reducer,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}).concat<any>(api),
  });
}