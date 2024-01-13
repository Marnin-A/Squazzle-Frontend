"use client";
import React from "react";
import AlertPopup from "./Alert";
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";

export default function NotificationContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	const notificationState = useSelector(
		(state: RootState) => state.Notification
	);
	return (
		<div className="w-full h-full">
			<AlertPopup />
			{children}
		</div>
	);
}
