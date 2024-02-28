import Gallery from "@/components/accommodations/gallery";
import Hero from "@/components/accommodations/hero";
import { CircularProgress } from "@mui/material";
import React from "react";

export default function Page() {
	return (
		<div className="flex flex-col items-center">
			<Hero />
			<React.Suspense
				fallback={<CircularProgress className="my-5" color="success" />}
			>
				<Gallery />
			</React.Suspense>
		</div>
	);
}
