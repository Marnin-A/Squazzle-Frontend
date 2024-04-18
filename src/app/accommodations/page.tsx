import Gallery from "@/components/accommodations/gallery";
import Hero from "@/components/accommodations/hero";

import React from "react";

export default function Page() {
	return (
		<div className="flex flex-col items-center">
			<Hero />

			<Gallery />
		</div>
	);
}
