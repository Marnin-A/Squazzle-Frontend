import { AlertType } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AlertType = {
	alertId: "",
	severity: "error",
	title: "",
	message: "Lorem ipsum dolor sit amet ",
	open: false,
};

const NotificationSlice = createSlice({
	name: "Notification",
	initialState,
	reducers: {
		setAlertOpen: (state, action: PayloadAction<AlertType>) => {
			state.alertId = action.payload.alertId;
			state.severity = action.payload.severity;
			state.title = action.payload.title;
			state.message = action.payload.message;
			state.open = action.payload.open;
		},

		resetAlert: (state) => {
			state.alertId = initialState.alertId;
			state.severity = initialState.severity;
			state.title = initialState.title;
			state.message = initialState.message;
			state.open = initialState.open;
		},
	},
});

export const { setAlertOpen, resetAlert } = NotificationSlice.actions;

export default NotificationSlice.reducer;
