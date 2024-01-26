import React from "react";
import EditProfileTabs from "./editProfileTabs";
import EditProfileCard from "./editProfileCard";

export default function Menu() {
	return (
		<aside className="flex flex-col w-min gap-9 mr-16">
			<EditProfileCard />
			<EditProfileTabs />
		</aside>
	);
}
