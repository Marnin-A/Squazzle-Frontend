import React from "react";
import BasicTabs from "../tabPanel";

export default function FeaturedProperty() {
	return (
		<section className="mt-14 flex flex-col items-center text-center">
			<h1 className="text-4xl font-bold mb-4">Featured Property</h1>
			<p>
				We provide various types of properties for you with different categories
			</p>
			<BasicTabs content={tabContent} className="mt-10" />
		</section>
	);
}

const tabContent = [
	{ label: "Popular", panel: <>Helloo Popular</> },
	{ label: "All categories", panel: <>Helloo All Cats</> },
	{ label: "Modern", panel: <>Helloo Modern</> },
];
