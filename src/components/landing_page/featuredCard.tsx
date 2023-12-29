import React from "react";
import Image from "next/image";

export type featureDetails = {
	imageUrl: string;
	title: string;
	location: string;
	price: string;
};
export default function FeaturedCard(props: featureDetails) {
	return (
		<div className="p-4 ml-auto max-xs:mr-auto flex flex-col items-center shadow rounded-md w-[255px]">
			<Image
				src={props.imageUrl}
				alt={props.title}
				width={255}
				height={277}
				placeholder="empty"
				priority={false}
				className="md:max-w-[255px] max-w-[351px] h-auto"
			/>
			<div className="w-full text-left">
				<h3 className="text-primary-mid-green border border-b-slate-200 border-b border-t-0 border-l-0 border-r-0 p-2 font-bold">
					{props.title}
				</h3>
				<p className="p-3">{props.location}</p>
				<p className="text-primary-mid-green font-light">{props.price}</p>
			</div>
		</div>
	);
}
