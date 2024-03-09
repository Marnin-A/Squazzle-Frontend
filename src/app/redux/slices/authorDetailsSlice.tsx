import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { authorImg: "", authorName: "" };

const AuthorDetailsSlice = createSlice({
	name: "authorIDetails",
	initialState,
	reducers: {
		setAuthorDetails: (
			state,
			action: PayloadAction<{ authorImg: string; authorName: string }>
		) => {
			state = { ...action.payload };
		},
		resetAuthorDetials: (state) => {
			state = initialState;
		},
	},
});

export const { resetAuthorDetials, setAuthorDetails } =
	AuthorDetailsSlice.actions;

export default AuthorDetailsSlice.reducer;
