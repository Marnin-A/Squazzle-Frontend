import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CreateProfileType {
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
}

const initialState: CreateProfileType = {
	firstName: "",
	lastName: "",
	email: "",
	phoneNumber: "",
};

const CreateProfileSlice = createSlice({
	name: "createProfile",
	initialState,
	reducers: {
		setProfileData: (state, action: PayloadAction<CreateProfileType>) => {
			const { firstName, lastName, email, phoneNumber } = action.payload;
			state.email = email;
			state.firstName = firstName;
			state.lastName = lastName;
			state.phoneNumber = phoneNumber;
		},
		resetProfileData: (state) => {
			state.email = "";
			state.firstName = "";
			state.lastName = "";
			state.phoneNumber = "";
		},
	},
});

export const { setProfileData, resetProfileData } = CreateProfileSlice.actions;

export default CreateProfileSlice.reducer;
