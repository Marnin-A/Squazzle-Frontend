import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CreateProfileReducer from "./slices/signUpSlice";
import EmailVerificationReducer from "./slices/emailVerificationSlice";
import MenuOpenReducer from "./slices/mobileMenuSlice";
import { authApi } from "./services/authServices";

const reducers = combineReducers({
	CreateProfile: CreateProfileReducer,
	EmailVerification: EmailVerificationReducer,
	MenuOpen: MenuOpenReducer,
	[authApi.reducerPath]: authApi.reducer,
});
export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(authApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
