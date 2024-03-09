"use client";
import React from "react";
import AlertPopup from "./Alert";
import { Next13ProgressBar } from "next13-progressbar";
import PopupDialog from "./PopupDialog";

export default function NotificationContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="w-full h-full">
			<>
				<PopupDialog />
				<AlertPopup />
			</>
			{children}
			<Next13ProgressBar
				height="4px"
				color="#018388"
				options={{ showSpinner: true }}
				showOnShallow
			/>
		</div>
	);
}
