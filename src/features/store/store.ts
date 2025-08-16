import { configureStore } from "@reduxjs/toolkit";
import slice from "../slice/slice";

export const store = configureStore({
  reducer: {
    customSlice: slice,
  },
  middleware: (defaults) =>
    defaults({
      serializableCheck: false, // ✅ disables non-serializable value warnings (e.g., DOM refs)
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
