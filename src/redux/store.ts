import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice.tsx";
import Logger from "./middleware/logger.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(Logger),
  // devTools: true,
  //   devTools: false
});

//Taken from redux TS documentation

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
