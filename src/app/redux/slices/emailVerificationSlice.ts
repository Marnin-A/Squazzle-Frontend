import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface EmailVerificationType {
	continueBtnClicked?: boolean;
	emailVerified?: boolean;
	emailVerificationFailed?: boolean;
}

const initialState: EmailVerificationType = {
	continueBtnClicked: false,
	emailVerified: false,
	emailVerificationFailed: false,
};

const EmailVerificationSlice = createSlice({
	name: "emailVerification",
	initialState,
	reducers: {
		setContinueBtnClicked: (state) => {
			state.continueBtnClicked = true;
		},
		setEmailVerified: (state, action: PayloadAction<EmailVerificationType>) => {
			state.emailVerified = action.payload.emailVerified;
		},
		setEmailVerificationFailed: (
			state,
			action: PayloadAction<EmailVerificationType>
		) => {
			state.emailVerificationFailed = action.payload.emailVerificationFailed;
		},
		resetEmailVerification: (state) => {
			state = initialState;
		},
	},
});

export const {
	setContinueBtnClicked,
	setEmailVerified,
	setEmailVerificationFailed,
	resetEmailVerification,
} = EmailVerificationSlice.actions;

export default EmailVerificationSlice.reducer;
