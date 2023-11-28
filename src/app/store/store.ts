import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CreateProfileReducer from "./slices/signUpSlice";
import EmailVerificationReducer from "./slices/emailVerificationSlice";

const reducers = combineReducers({
	CreateProfile: CreateProfileReducer,
	EmailVerification: EmailVerificationReducer,
});
export const store = configureStore({
	reducer: reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
