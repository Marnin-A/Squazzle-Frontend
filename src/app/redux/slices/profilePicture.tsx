import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = "";

const ProfilePictureSlice = createSlice({
	name: "profilePicture",
	initialState,
	reducers: {
		setProfilePicture: (state, action: PayloadAction<string>) =>
			(state = action.payload),
	},
});

export const { setProfilePicture } = ProfilePictureSlice.actions;

export default ProfilePictureSlice.reducer;
