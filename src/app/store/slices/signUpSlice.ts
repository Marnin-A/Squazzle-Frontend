import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CreateProfile {
	firstName: string;
	lastName: string;
	email: string;
	password?: string;
	phoneNumber: number | null;
}

const initialState: CreateProfile = {
	firstName: "",
	lastName: "",
	email: "",
	password: "",
	phoneNumber: null,
};

const CreateProfileSlice = createSlice({
	name: "createProfile",
	initialState,
	reducers: {
		setProfileData: (state, action: PayloadAction<CreateProfile>) => {
			const { firstName, lastName, email, password, phoneNumber } =
				action.payload;
			state.email = email;
			state.firstName = firstName;
			state.lastName = lastName;
			state.password = password;
			state.phoneNumber = phoneNumber;
		},
		resetProfileData: (state) => {
			state = initialState;
		},
	},
});

export const { setProfileData, resetProfileData } = CreateProfileSlice.actions;

export default CreateProfileSlice.reducer;
