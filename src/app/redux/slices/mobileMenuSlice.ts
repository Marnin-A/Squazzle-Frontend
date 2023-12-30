import { createSlice } from "@reduxjs/toolkit";

export interface MobileMenuType {
	isOpen: boolean;
}

const initialState: MobileMenuType = {
	isOpen: false,
};

const EmailVerificationSlice = createSlice({
	name: "emailVerification",
	initialState,
	reducers: {
		setIsOpen: (state) => {
			state.isOpen = true;
		},

		resetIsOpen: (state) => {
			state = initialState;
		},
	},
});

export const { setIsOpen, resetIsOpen } = EmailVerificationSlice.actions;

export default EmailVerificationSlice.reducer;
