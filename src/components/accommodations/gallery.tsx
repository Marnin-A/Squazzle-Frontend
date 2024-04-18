"use client";
import React from "react";
import GalleryCard from "./galleryCard";
import Pagination from "./pagination";
import LoadingSpinner from "@/components/loadingSpinner";
import { useGetAccommodationsQuery } from "@/app/redux/services/apiServices";

export default function Gallery() {
	const { data, isLoading, refetch } = useGetAccommodationsQuery(null);

	async function handleFetch() {
		try {
			const res = await refetch();
		} catch (error) {
			console.error(error);
		}
	}
	return !isLoading ? (
		<div className="flex flex-col px-20 max-sm:px-0">
			<div className="flex flex-wrap justify-center py-16 gap-11">
				{data &&
					"status" in data &&
					data.data.accomodation.map((property) => (
						<GalleryCard
							key={property._id}
							name={property.accommodationName}
							hostingFrom={property.hostingPeriodFrom}
							hostingTo={property.hostingPeriodTo}
							availability={property.status}
							img={property.gallery[0]?.imageUrl}
							location={property.city}
							price={property.price}
							propertyId={property._id}
							type={property.accommodationType}
						/>
					))}
			</div>
			<Pagination
				key={"pagination"}
				firstIndex={1}
				lastIndex={24}
				accommodationTotal={5000}
			/>
		</div>
	) : (
		<LoadingSpinner className="my-5" />
	);
}
