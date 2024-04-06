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
				<DescriptionForm
					description={propertyDetails?.description}
					whyListing={propertyDetails?.whyListing}
					accomodationRules={propertyDetails?.accommodationRules}
					key={propertyDetails?.propertyId + "descriptionForm"}
				/>
			) : searchParam === "gallery" ? (
				<GalleryForm
					gallery={propertyDetails?.gallery}
					key={propertyDetails?.propertyId + "galleryForm"}
				/>
			) : searchParam === "overview" ? (
				<OverviewForm
					key={propertyDetails?.propertyId + "overviewForm"}
					accommodationName={propertyDetails?.accommodationName}
					accommodationType={propertyDetails?.accommodationType}
					address={propertyDetails?.address}
					city={propertyDetails?.city}
					hostingPeriodFrom={propertyDetails?.hostingPeriodFrom}
					hostingPeriodTo={propertyDetails?.hostingPeriodTo}
					price={propertyDetails?.price}
					state={propertyDetails?.state}
				/>
			) : (
				<LoadingSpinner className="mx-auto" />
			)}
		</>
	);
}
