"use client";
import ManageSearchParams from "@/hooks/updateSearchParams";
import React from "react";
import DescriptionForm from "./descriptionForm";
import GalleryForm from "./galleryForm";
import OverviewForm from "./overviewForm";
import LoadingSpinner from "../loadingSpinner";
import { PropertyDetailsResponse } from "@/types/apiTypes";

export default function EditPropertyForms({
	propertyDetails,
}: {
	propertyDetails?: PropertyDetailsResponse["data"]["accomodation"];
}) {
	const [searchParam, setSearchParam] = React.useState<string | null>("");
	const { getURLParam } = ManageSearchParams();
	React.useEffect(() => {
		setSearchParam(getURLParam("view"));
	}, [getURLParam]);

	return (
		<>
			{searchParam === "description" ? (
				<DescriptionForm />
			) : searchParam === "gallery" ? (
				<GalleryForm />
			) : searchParam === "overview" ? (
				<OverviewForm />
			) : (
				<LoadingSpinner className="mx-auto" />
			)}
		</>
	);
}
