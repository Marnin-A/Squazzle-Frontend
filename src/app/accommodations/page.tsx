import Gallery from "@/components/accommodations/gallery";
import Hero from "@/components/accommodations/hero";
import LoadingSpinner from "@/components/loadingSpinner";

import React from "react";

export default function Page() {
	return (
		<div className="flex flex-col items-center">
			<Hero />
			<React.Suspense fallback={<LoadingSpinner className="my-5" />}>
				<Gallery />
			</React.Suspense>
		</div>
	);
}
