import React from "react";
import BasicTabs from "../tabPanel";
import Carousel from "../ui/carousel";

export default function FeaturedProperty() {
	return (
		<section className="mt-14 flex flex-col items-center text-center">
			<h1 className="text-4xl font-bold mb-4">Featured Property</h1>
			<p>
				We provide various types of properties for you with different categories
			</p>
			<BasicTabs content={tabContent} className="mt-10 w-full" />
		</section>
	);
}
const cardDetails = [
	{
		imageUrl: "/temp/featured-1.png",
		location: "Jos, Nigeria.",
		price: "NGN 65,000/night",
		title: "Primrose View",
	},
	{
		imageUrl: "/temp/featured-2.png",
		location: "Jos, Nigeria.",
		price: "NGN 45,000/night",
		title: "Stable House",
	},
	{
		imageUrl: "/temp/featured-3.png",
		location: "Jos, Nigeria.",
		price: "NGN 15,000/night",
		title: "Lake View",
	},
	{
		imageUrl: "/temp/featured-4.png",
		location: "Jos, Nigeria.",
		price: "NGN 5,000/night",
		title: "Ivylands",
	},
];
const tabContent = [
	{
		label: "Popular",
		panel: <Carousel details={cardDetails} />,
	},
	{ label: "All categories", panel: <>Categories</> },
	{ label: "Modern", panel: <>Helloo Modern</> },
];
