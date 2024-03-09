"use client";
import React from "react";
import { useRouter } from "next13-progressbar";
import { ChevronRight } from "@mui/icons-material";
export default function PageCard({
	img,
	title,
	route,
}: {
	img: React.JSX.Element;
	title: string;
	route: string;
}) {
	const router = useRouter();
	const handleRoute = () => {
		router.push(route);
	};

	return (
		<button
			onClick={handleRoute}
			type="button"
			aria-label="card"
			role="button"
			className="flex flex-col items-center justify-center w-[280px] max-lg:w-48 h-[144px] bg-white rounded-lg shadow-md max-sm:flex-row max-lg:px-5 max-sm:px-0 max-sm:justify-between max-sm:w-full max-sm:h-min max-sm:font-light max-sm:shadow-none"
		>
			<div className="flex  max-sm:gap-3">
				{React.cloneElement(img, { color: "inherit" })}
				<p className="text-lg font-normal">{title}</p>
			</div>

			<ChevronRight className="xs:hidden" color="inherit" />
		</button>
	);
}
