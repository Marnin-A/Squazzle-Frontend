import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EmailVerificationType {
	continueBtnClicked: boolean;
	emailVerification: boolean;
}

const initialState: EmailVerificationType = {
	continueBtnClicked: false,
	emailVerification: false,
};

const EmailVerificationSlice = createSlice({
	name: "emailVerification",
	initialState,
	reducers: {
		setContinueBtnClicked: (state) => {
			state.continueBtnClicked = true;
		},
		setEmailVerification: (state) => {
			state.emailVerification = true;
		},
	},
});

export const { setContinueBtnClicked, setEmailVerification } =
	EmailVerificationSlice.actions;

export default EmailVerificationSlice.reducer;
