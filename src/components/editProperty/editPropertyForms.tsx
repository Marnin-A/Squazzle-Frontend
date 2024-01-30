"use client";
import ManageSearchParams from "@/hooks/updateSearchParams";
import React from "react";
import DescriptionForm from "./descriptionForm";
import GalleryForm from "./galleryForm";
import OverviewForm from "./overviewForm";

export default function EditPropertyForms() {
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
			) : (
				<OverviewForm />
			)}
		</>
	);
}
