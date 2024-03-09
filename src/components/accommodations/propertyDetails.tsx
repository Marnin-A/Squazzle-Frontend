"use client";
import React from "react";
import SideBar from "../propertyDetails/sideBar";
import PropertyDetailsBody from "./propertyDetailsBody";
import { useGetPropertyDetailsQuery } from "@/app/redux/services/apiServices";
import LoadingSpinner from "../loadingSpinner";
import { useDispatch } from "react-redux";
import { setDialogOpen } from "@/app/redux/slices/dialogSlice";

export default function PropertyDetails() {
	const alertId = React.useId();
	const dispatch = useDispatch();
	const [propertyId, setPropertyId] = React.useState("");
	const { data, isError, error } = useGetPropertyDetailsQuery({
		propertyId: propertyId,
	});
	React.useEffect(() => {
		setPropertyId(
			window.location.pathname.split("/")[
				window.location.pathname.split("/").length - 1
			]
		);
		if (isError) {
			console.log(error);

			dispatch(
				setDialogOpen({
					alertId: alertId,
					message: "",
					open: true,
					title: "Sorry an error occurred",
				})
			);
		}
	}, [alertId, dispatch, error, isError]);
	console.log(data);

	return data && "status" in data && data.status === "success" ? (
		<div className="flex">
			<SideBar
				accommodationType={data.data.accomodation.accommodationType}
				address={data.data.accomodation.address}
				city={data.data.accomodation.city}
				hostingPeriodFrom={data.data.accomodation.hostingPeriodFrom}
				hostingPeriodTo={data.data.accomodation.hostingPeriodTo}
				reason={data.data.accomodation.whyListing}
				state={data.data.accomodation.state}
				key={propertyId + "-side-bar"}
			/>
			<PropertyDetailsBody
				accommodationName={data.data.accomodation.accommodationName}
				accommodationRules={data.data.accomodation.accomodationRules}
				availability={data.data.accomodation.status}
				description={data.data.accomodation.description}
				images={data.data.accomodation.gallery}
				price={data.data.accomodation.price}
				userId={data.data.accomodation.createdBy}
				key={data.data.accomodation.accommodationName}
			/>
		</div>
	) : (
		<LoadingSpinner className="m-auto" />
	);
}
