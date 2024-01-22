"use client";
import React from "react";
import EditProfileTabs from "./editProfileTabs";
import dynamic from "next/dynamic";
import CircularProgress from "@mui/material/CircularProgress";

export default function Menu() {
	const DynamicEditProfileCard = dynamic(
		() => import("@/components/personalDetails/editProfileCard"),
		{
			ssr: false,
			loading: () => <CircularProgress color="success" className="m-auto" />,
		}
	);
	return (
		<aside className="flex flex-col w-min gap-9 mr-16">
			<DynamicEditProfileCard />
			<EditProfileTabs />
		</aside>
	);
}
