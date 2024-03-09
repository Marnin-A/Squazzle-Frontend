"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useGetMyListingsQuery } from "@/app/redux/services/apiServices";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function ListedPropertyCard() {
	const { getLocalStorage } = useLocalStorage();
	const [requestData, setRequestData] = React.useState("");
	const { data } = useGetMyListingsQuery({ userId: requestData });

	React.useEffect(() => {
		if (window !== undefined && window.localStorage) {
			setRequestData(getLocalStorage("_id"));
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className="flex flex-wrap gap-5">
			{data?.success == true &&
				data?.data.map((property) => (
					<Link
						key={property.propertyId}
						href={`myListing/editProperty/[${property.propertyId}]`}
						className="max-w-[305px] max-h-[264px] w-[305px] h-[264px] bg-off-white relative flex flex-col items-center justify-between overflow-hidden"
					>
						<Image
							src={property.url}
							alt={property.name}
							width={305}
							height={222}
							className="w-min h-auto m-auto"
						/>
						<p className="text-primary-[#787878] font-semibold text-center text-[18px] w-full py-2 bg-off-white absolute bottom-0 z-20">
							{property.name}
						</p>
					</Link>
				))}

			<Link
				href={"./myListing/editProperty?view=overview"}
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
	);
}
