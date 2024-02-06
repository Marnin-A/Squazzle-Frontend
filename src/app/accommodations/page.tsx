import Gallery from "@/components/accommodations/gallery";
import Hero from "@/components/accommodations/hero";
import { CircularProgress } from "@mui/material";
import React from "react";

export default function Page() {
	return (
		<div>
			<Hero />
			<React.Suspense fallback={<CircularProgress color="success" />}>
				<Gallery />
			</React.Suspense>
		</div>
	);
}
