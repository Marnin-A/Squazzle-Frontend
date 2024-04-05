import { Money, RadioButtonChecked, Rule } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import AboutComponent from "../propertyDetails/aboutComponent";
import AccommodationRules from "../propertyDetails/accommodationRules";
import AboutHost from "./aboutHost";
import Link from "next/link";
import LoadingSpinner from "../loadingSpinner";
export type PropertyProps = {
	accommodationName: string;
	description: string;
	availability: "available" | "not available" | undefined;
	price: string;
	images: Array<{ imageId: string; imageUrl: string }>;
	accommodationRules: Array<string>;
	createdBy: {
		isProfileComplete: boolean;
		id: string;
		firstName: string;
		lastName: string;
		email: string;
		phoneNumber: string;
		profileImage: string;
		createdAt: string;
		isEmailVerified: boolean;
	};
};

export default function PropertyDetailsBody(props: PropertyProps) {
	return (
		<div className="flex flex-col items-center">
			<div className="flex items-center gap-5 mb-5 flex-wrap">
				<button className="flex items-center gap-[10px] py-[22px] px-[30px] bg-off-white">
					<RadioButtonChecked htmlColor="#03796E" />
					{props.availability === "available" ? "Available" : "Not Available"}
				</button>
				<button className="flex items-center gap-[10px] py-[22px] px-[30px] bg-off-white whitespace-nowrap">
					<Money htmlColor="#03796E" />
					NGN {props.price.toLocaleString()} per night
				</button>
				<Link
					href={"#accommodationRules"}
					className="flex items-center gap-[10px] py-[22px] px-[30px] bg-off-white whitespace-nowrap"
				>
					<Rule htmlColor="#03796E" />
					Accommodation rules
				</Link>
			</div>
			<div className="flex aspect-auto gap-5 w-max relative mb-16 max-md:w-full">
				<div className="flex items-center justify-center min-h-full w-[450px] overflow-hidden max-md:w-7/12">
					<Image
						src={props.images[0].imageUrl}
						alt="Mobile Squazzle Logo"
						width={530}
						height={582}
						placeholder="empty"
						priority={false}
						className="w-full h-auto"
					/>
				</div>
				{props.images[1] && (
					<div className="flex flex-col items-center justify-between max-md:w-5/12">
						<div className="flex items-center justify-center min-h-1/2 w-[250px] overflow-hidden max-md:w-4/5">
							<Image
								src={props.images[1].imageUrl}
								alt="Mobile Squazzle Logo"
								width={350}
								height={255}
								placeholder="empty"
								priority={false}
								className="w-full h-auto m-auto"
							/>
						</div>
						<div className="flex items-center justify-center min-h-1/2 w-[250px] overflow-hidden max-md:w-4/5">
							<Image
								src={props.images[2].imageUrl}
								alt="Mobile Squazzle Logo"
								width={530}
								height={582}
								placeholder="empty"
								priority={false}
								className="w-full h-auto m-auto"
							/>
						</div>
					</div>
				)}
				<div className="absolute px-2 py-[4px] bg-white opacity-95 bottom-4 right-4">
					{props.images.length > 3
						? `+${props.images.length - 3} Photos`
						: null}
				</div>
			</div>
			<div className="max-w-[800px] ">
				<div className="flex items-center gap-10 mb-10">
					<h1 className="text-[54px] font-semibold max-md:text-2xl">
						{props.accommodationName}
					</h1>
					<Image
						src={props.createdBy.profileImage}
						alt={"Profile picture of the host"}
						width={56}
						height={56}
						placeholder="empty"
						priority={false}
						className="min-w-[56px] h-auto rounded-full"
					/>
				</div>
				<AboutComponent aboutText={props.description} />
				<hr className="border-primary-mid-grey my-10" />
				<AccommodationRules rules={props.accommodationRules} />
			</div>
			<React.Suspense fallback={<LoadingSpinner className="m-auto" />}>
				<AboutHost createdBy={props.createdBy} />
			</React.Suspense>
		</div>
	);
}
