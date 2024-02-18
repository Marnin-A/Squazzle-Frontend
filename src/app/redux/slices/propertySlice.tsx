import { PropertyDetails } from "@/types/apiTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: PropertyDetails["data"] = {
	accommodationName: "",
	propertyId: "",
	accomodationRules: [{ ruleId: "", ruleName: "", rulesDescription: "" }],
	price: "",
	accommodationType: "Duplex",
	// availability: "Available",
	hostingPeriodFrom: new Date().toDateString(),
	hostingPeriodTo: new Date().toDateString(),
	city: "",
	description: "",
	state: "",
	whyListing: "",
	gallery: [],
	address: "",
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
