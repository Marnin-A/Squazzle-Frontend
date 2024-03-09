import EmailVerificationReducer from "./slices/emailVerificationSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import NotificationReducer from "./slices/notificationSlice";
import CreateProfileReducer from "./slices/signUpSlice";
import AuthorDetailsReducer from "./slices/authorDetailsSlice";
import DialogReducer from "./slices/dialogSlice";
import { api } from "./services/apiServices";

const reducers = combineReducers({
	CreateProfile: CreateProfileReducer,
	EmailVerification: EmailVerificationReducer,
	Notification: NotificationReducer,
	AuthorDetails: AuthorDetailsReducer,
	Dialog: DialogReducer,
	[api.reducerPath]: api.reducer,
});
export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
