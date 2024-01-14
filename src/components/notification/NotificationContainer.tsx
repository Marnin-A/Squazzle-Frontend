"use client";
import React from "react";
import AlertPopup from "./Alert";
import { Next13ProgressBar } from "next13-progressbar";

export default function NotificationContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full h-full">
			<AlertPopup />
			{children}
			<Next13ProgressBar
				height="4px"
				color="#CCE6E7"
				options={{ showSpinner: true }}
				showOnShallow
			/>
		</div>
	);
}
