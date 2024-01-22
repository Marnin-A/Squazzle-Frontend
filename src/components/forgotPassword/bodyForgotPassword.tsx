"use client";
import React from "react";
import dynamic from "next/dynamic";
import CircularProgress from "@mui/material/CircularProgress";

export default function BodyForgotPassword() {
	const DynamicComponentRender = dynamic(() => import("./renderComponent"), {
		ssr: false,
		loading: () => <CircularProgress color="success" className="m-auto" />,
	});
	return (
		<div className="flex-1 flex flex-col items-center justify-center w-full overflow-y-scroll max-sm:items-start">
			<DynamicComponentRender />
		</div>
	);
}
