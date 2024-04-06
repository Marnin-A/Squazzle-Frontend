import { Money, RadioButtonChecked, Rule } from "@mui/icons-material";
import { DateRange, House } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import AboutComponent from "../propertyDetails/aboutComponent";
import AccommodationRules from "../propertyDetails/accommodationRules";
import AboutHost from "./aboutHost";
import Link from "next/link";
import PropertyImgCarousel from "./propertyImgCarousel";
export type PropertyProps = {
	accommodationName: string;
	description: string;
	status: "available" | "not available" | undefined;
	price: string;
	gallery: Array<{ imageId: string; imageUrl: string }>;
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
	address: string;
	city: string;
	state: string;
	whyListing: string;
	hostingPeriodFrom: string;
	hostingPeriodTo: string;
	accommodationType: string;
};

export default function PropertyDetailsBody(props: { data: PropertyProps }) {
	return (
		<div className="flex flex-col items-center overflow-hidden">
			<div className="flex items-center gap-5 mb-5 max-md:w-[300px] max-md:overflow-scroll">
				<button className="flex items-center text-xs gap-[10px] p-2 sm:py-[22px] sm:px-[30px] bg-off-white">
					<RadioButtonChecked htmlColor="#03796E" />
					{props.data.status === "available" ? "Available" : "Not Available"}
				</button>
				<button className="flex items-center text-xs gap-[10px] p-2 sm:py-[22px] sm:px-[30px] bg-off-white whitespace-nowrap">
					<Money htmlColor="#03796E" />
					NGN {props.data.price.toLocaleString()} per night
				</button>
				<Link
					href={"#accommodationRules"}
					className="flex items-center text-xs gap-[10px] p-2 sm:py-[22px] sm:px-[30px] bg-off-white whitespace-nowrap"
				>
					<Rule htmlColor="#03796E" />
					Accommodation rules
				</Link>
			</div>
			<div className="flex aspect-auto gap-5 w-max relative mb-16 max-md:hidden">
				<div className="flex items-center justify-center min-h-full w-[450px] overflow-hidden max-md:w-7/12">
					<Image
						src={props.data.gallery[0].imageUrl}
						alt="Mobile Squazzle Logo"
						width={530}
						height={582}
						placeholder="empty"
						priority={false}
						className="w-full h-auto"
					/>
				</div>
				{props.data.gallery[1] && (
					<div className="flex flex-col items-center justify-between max-md:w-5/12">
						<div className="flex items-center justify-center min-h-1/2 w-[250px] overflow-hidden max-md:w-4/5">
							<Image
								src={props.data.gallery[1].imageUrl}
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
								src={props.data.gallery[2].imageUrl}
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
					{props.data.gallery.length > 3
						? `+${props.data.gallery.length - 3} Photos`
						: null}
				</div>
			</div>
			<PropertyImgCarousel
				images={props.data.gallery}
				key={"PropertyImgCarousel"}
			/>
			<div className="md:hidden w-full flex items-center gap-3 mb-10 shadow-md flex-wrap p-3">
				<div
					className={
						"flex flex-col items-center gap-4 w-full min-w-[200px] py-3 px-3 mx-auto group hover:bg-primary-lightgreen max-lg:self-start"
					}
				>
					<h3 className="font-semibold text-lg  w-full">Location</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="w-full">{`${props.data.address}, ${props.data.city}, ${props.data.state} State, Nigeria`}</p>
				</div>
				<div
					className={
						"flex flex-col items-center gap-4 w-full min-w-[200px] py-3 px-3 mx-auto group hover:bg-primary-lightgreen max-lg:self-start"
					}
				>
					<h3 className="font-semibold text-lg w-full">
						Reason for listing this accommodation
					</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="w-full">{props.data.whyListing}</p>
				</div>
				<div
					className={
						"flex flex-col items-center gap-4 w-full min-w-[200px] py-3 px-3 mx-auto group hover:bg-primary-lightgreen max-lg:self-start"
					}
				>
					<h3 className="font-semibold text-lg w-full">Hosting Duration</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="flex gap-2 w-full">
						<DateRange htmlColor="#03796E" />
						{`${props.data.hostingPeriodFrom
							.replace(/\d{4}$/, "")
							.trim()} - ${props.data.hostingPeriodTo.replace(/\d{4}$/, "")}`}
					</p>
				</div>
				<div
					className={
						"flex flex-col items-center gap-4 w-full min-w-[200px] py-3 px-3 mx-auto group hover:bg-primary-lightgreen max-lg:self-start"
					}
				>
					<h3 className="font-semibold text-lg w-full">Accommodation Type</h3>
					<hr className="w-full border-primary-mid-grey group-hover:border-off-white" />
					<p className="flex gap-2 w-full">
						<House htmlColor="#03796E" />
						{props.data.accommodationType}
					</p>
				</div>
			</div>
			<div className="max-w-[800px] ">
				<div className="flex items-center gap-10 mb-10">
					<h1 className="text-[54px] font-semibold max-md:text-2xl">
						{props.data.accommodationName}
					</h1>
					<Image
						src={props.data.createdBy.profileImage}
						alt={"Profile picture of the host"}
						width={56}
						height={56}
						placeholder="empty"
						priority={false}
						className="min-w-[56px] h-auto rounded-full"
					/>
				</div>
				<AboutComponent aboutText={props.data.description} />
				<hr className="border-primary-mid-grey my-10" />
				<AccommodationRules rules={props.data.accommodationRules} />
			</div>

			<AboutHost createdBy={props.data.createdBy} />
		</div>
	);
}
