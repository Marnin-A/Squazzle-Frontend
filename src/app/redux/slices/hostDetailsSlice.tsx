import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { hostImg: "", hostName: "" };

const HostDetailsSlice = createSlice({
	name: "hostDetails",
	initialState,
	reducers: {
		setHostDetails: (
			state,
			action: PayloadAction<{ hostImg: string; hostName: string }>
		) => {
			state = { ...action.payload };
		},
		resetHostDetials: (state) => {
			state = initialState;
		},
	},
});

export const { resetHostDetials, setHostDetails } = HostDetailsSlice.actions;

export default HostDetailsSlice.reducer;
