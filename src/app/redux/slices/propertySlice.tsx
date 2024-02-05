import { PropertyDetails } from "@/types/authTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PropertyDetails["data"] = {
	name: "",
	propertyId: "",
	about: "",
	accommodationPrice: "",
	accommodationType: "",
	availability: "",
	endDate: "",
	gallery: [],
	location: "",
	reason: "",
	rules: [],
	startDate: "",
};

const PropertyDetailsSlice = createSlice({
	name: "propertyDetails",
	initialState,
	reducers: {
		setPropertyDetails: (
			state,
			action: PayloadAction<PropertyDetails["data"]>
		) => {
			state = { ...action.payload };
		},
		resetPropertyDetails: (state) => {
			state = { ...initialState };
		},
	},
});

export const { setPropertyDetails, resetPropertyDetails } =
	PropertyDetailsSlice.actions;

export default PropertyDetailsSlice.reducer;
