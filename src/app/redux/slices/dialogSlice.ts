import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type DialogType = {
	alertId: string;
	title: string;
	message: string;
	open: boolean;
};
const initialState: DialogType = {
	alertId: "",
	title: "",
	message: "Lorem ipsum dolor sit amet ",
	open: false,
};

const DialogSlice = createSlice({
	name: "Dialog",
	initialState,
	reducers: {
		setDialogOpen: (state, action: PayloadAction<DialogType>) => {
			state.alertId = action.payload.alertId;
			state.title = action.payload.title;
			state.message = action.payload.message;
			state.open = action.payload.open;
		},

		resetDialog: (state) => {
			state.alertId = initialState.alertId;
			state.title = initialState.title;
			state.message = initialState.message;
			state.open = initialState.open;
		},
	},
});

export const { resetDialog, setDialogOpen } = DialogSlice.actions;

export default DialogSlice.reducer;
