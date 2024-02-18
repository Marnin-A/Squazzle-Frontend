import {
	Money,
	RadioButtonChecked,
	RoomSharp,
	Rule,
} from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import AboutComponent from "./aboutComponent";
import AccommodationRules from "./accomodationRules";

export default function PropertyDetailsBody() {
	return (
		<div className="flex flex-col items-center">
			<div className="flex items-center gap-5 mb-5 flex-wrap">
				<button className="flex items-center gap-[10px] py-[22px] px-[30px] bg-off-white">
					<RadioButtonChecked htmlColor="#03796E" />
					Available
				</button>
				<button className="flex items-center gap-[10px] py-[22px] px-[30px] bg-off-white whitespace-nowrap">
					<Money htmlColor="#03796E" />
					NGN 65,000 per night
				</button>
				<button className="flex items-center gap-[10px] py-[22px] px-[30px] bg-off-white">
					<RoomSharp htmlColor="#03796E" />
					Location
				</button>
				<button className="flex items-center gap-[10px] py-[22px] px-[30px] bg-off-white whitespace-nowrap">
					<Rule htmlColor="#03796E" />
					Accommodation rules
				</button>
			</div>
			<div className="flex gap-5 h-[500px] w-full relative">
				<div className="flex items-center justify-center min-h-full w-[450px] overflow-hidden">
					<Image
						src="/Mobile-logo.svg"
						alt="Mobile Squazzle Logo"
						width={530}
						height={582}
						placeholder="empty"
						priority={false}
						className="w-full h-auto m-auto"
					/>
				</div>
				<div className="flex flex-col items-center justify-between">
					<div className="flex items-center justify-center min-h-1/2 w-[300px] overflow-hidden">
						<Image
							src="/Mobile-logo.svg"
							alt="Mobile Squazzle Logo"
							width={350}
							height={255}
							placeholder="empty"
							priority={false}
							className="w-full h-auto m-auto"
						/>
					</div>
					<div className="flex items-center justify-center min-h-1/2 w-[300px] overflow-hidden">
						<Image
							src="/Mobile-logo.svg"
							alt="Mobile Squazzle Logo"
							width={530}
							height={582}
							placeholder="empty"
							priority={false}
							className="w-full h-auto m-auto"
						/>
					</div>
				</div>
				<div className="absolute px-4 py-[7px] bg-white opacity-95 bottom-4 right-4">
					+17 Photos
				</div>
			</div>
			<div className="max-w-[800px] ">
				<h1 className="text-[54px] font-semibold mb-10">Primrose View</h1>
				<AboutComponent
					aboutText={
						"From the outside this house looks nice and traditional. It has windows that let in plenty of light. The house is equipped with a small kitchen and two bathrooms, it also has a cozy living room, two bedrooms, a roomy dining area, a playroom and a cozy garage.The building is fairly rounded in shape.The roof is low and v-shaped and is covered with grey ceramic tiles. The house itself is surrounded by a tranquil garden, with beautiful primrose flowers and various rock formations"
					}
				/>
				<hr className="border-primary-mid-grey my-10" />
				<AccommodationRules />
			</div>
		</div>
	);
}
