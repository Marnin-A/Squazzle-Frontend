"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetMyListingsQuery } from "@/app/redux/services/apiServices";
import useLocalStorage from "@/hooks/useLocalStorage";
import LoadingSpinner from "../loadingSpinner";

export default function ListedPropertyCard() {
	const { getLocalStorage } = useLocalStorage();
	const [accessToken, setAccessToken] = React.useState("");
	const { data: response } = useGetMyListingsQuery({ token: accessToken });
	console.log(response);

	React.useEffect(() => {
		if (window !== undefined && window.localStorage) {
			setAccessToken(getLocalStorage("accessToken"));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return response && "status" in response ? (
		<div className="flex flex-wrap gap-5">
			{response.data.accommodations.map((property) => (
				<Link
					key={property._id}
					href={`myListing/editProperty/${property._id}?view=overview`}
					className="max-w-[305px] max-h-[264px] w-[305px] h-[264px] bg-off-white relative flex flex-col items-center justify-between overflow-hidden"
				>
					<Image
						src={property.gallery[0].imageUrl}
						alt={property.accommodationName}
						width={305}
						height={222}
						className="w-min h-auto m-auto"
					/>
					<p className="text-primary-[#787878] font-semibold text-center text-[18px] w-full py-2 bg-off-white absolute bottom-0 z-20">
						{property.accommodationName}
					</p>
				</Link>
			))}

			<Link
				href={"./myListing/listProperty?view=overview"}
				className="max-w-[305px] max-h-[264px] w-[305px] h-[264px] bg-off-white flex flex-col items-center justify-between"
			>
				<Image
					src={"/plus-in-circle.svg"}
					alt={"List New Property"}
					width={53.33}
					height={53.33}
					className="w-min h-auto m-auto"
				/>
				<p className="text-primary-[#787878] font-semibold text-center text-[18px] w-full py-2 bg-primary-mid-grey">
					List New Property
				</p>
			</Link>
		</div>
	) : (
		<LoadingSpinner className="m-auto" />
	);
}
