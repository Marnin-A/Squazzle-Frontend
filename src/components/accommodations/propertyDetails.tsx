"use client";
import React from "react";
import SideBar from "../propertyDetails/sideBar";
import PropertyDetailsBody from "./propertyDetailsBody";
import { useGetPropertyDetailsQuery } from "@/app/redux/services/apiServices";
import LoadingSpinner from "../loadingSpinner";
import { useDispatch } from "react-redux";
import { setDialogOpen } from "@/app/redux/slices/dialogSlice";

export default function PropertyDetails({
	propertyId,
}: {
	propertyId: string;
}) {
	const alertId = React.useId();
	const dispatch = useDispatch();

	const { data, isError, error } = useGetPropertyDetailsQuery({
		propertyId: propertyId,
	});
	React.useEffect(() => {
		if (isError) {
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

	return data && "status" in data && data.status === "success" ? (
		<div className="flex max-lg:flex-col">
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
				accommodationRules={data.data.accomodation.accommodationRules}
				availability={data.data.accomodation.status}
				description={data.data.accomodation.description}
				images={data.data.accomodation.gallery}
				price={data.data.accomodation.price}
				key={data.data.accomodation.accommodationName}
				createdBy={data.data.accomodation.createdBy}
			/>
		</div>
	) : (
		<LoadingSpinner className="m-auto" />
	);
}
