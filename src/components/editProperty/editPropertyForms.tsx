"use client";
import ManageSearchParams from "@/hooks/updateSearchParams";
import React from "react";
import DescriptionForm from "./descriptionForm";
import GalleryForm from "./galleryForm";
import OverviewForm from "./overviewForm";
import { CircularProgress } from "@mui/material";

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
			) : searchParam === "overview" ? (
				<OverviewForm />
			) : (
				<CircularProgress color="success" className="m-auto" />
			)}
		</>
	);
}
