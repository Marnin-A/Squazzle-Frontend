import React from "react";
import Image from "next/image";
import Rating from "@mui/material/Rating";
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";

export type TestimonialProps = {
	name: string;
	profileImg: string;
	platform: platform;
	quote: string;
	rating: number;
};
type platform = "twitter" | "linkedIn" | "facebook" | "instagram";

function selectPlatform(platform: platform) {
	switch (platform) {
		case "twitter":
			return <Twitter color="primary" />;
		case "linkedIn":
			return <LinkedIn color="primary" />;
		case "facebook":
			return <Facebook color="primary" />;
		case "instagram":
			return <Instagram color="primary" />;
		default:
			break;
	}
}
export default function TestimonialCard(props: TestimonialProps) {
	return (
		<div className="shadow-md rounded-xl max-w-[286px] min-h-[358px] p-4 flex flex-col justify-between max-sm:w-full">
			<p className="text-primary-mid-green">{props.quote}</p>
			<div>
				<div className="flex justify-between items-center ">
					<div>
						<span className="mr-2">{props.name}</span>
						<span>{selectPlatform(props.platform)}</span>
					</div>
					<span className="rounded-full">
						<Image
							src={props.profileImg}
							alt={props.name}
							width={34}
							height={34}
							placeholder="empty"
							priority={false}
							className="w-[34px] h-auto"
						/>
					</span>
				</div>
				<Rating
					key={props.name}
					className="justify-self-end"
					name="Testimonial Rating"
					value={props.rating}
					precision={0.5}
					readOnly
				/>
			</div>
		</div>
	);
}
