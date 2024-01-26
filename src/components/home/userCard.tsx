"use client";
import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";
import ProfilePicture from "../profilePicture";

export default function UserCard() {
	const { getLocalStorage } = useLocalStorage();
	const [userName, setUserName] = React.useState("User");
	const [email, setEmail] = React.useState("user@gmail.com");

	React.useEffect(() => {
		if (window !== undefined && window.localStorage) {
			setUserName(getLocalStorage("username") ?? "User");
			setEmail(getLocalStorage("email") ?? "user@gmail.com");
		}
	}, [getLocalStorage]);

	return (
		<div className="max-w-[305px] h-min font-semibold mr-16 py-6 px-12 bg-white text-center shadow-md max-md:mb-10 max-sm:text-left max-sm:p-0 max-sm:pr-12 max-sm:m-0 max-sm:shadow-none">
			<div className="sm:hidden">
				<ProfilePicture height={104} width={104} />
			</div>
			<h1 className="text-[28px]">Welcome back {userName}</h1>
			<p className="text-xl font-normal mb-10">{email}</p>
			<div className="max-sm:hidden">
				<ProfilePicture height={104} width={104} />
			</div>
		</div>
	);
}
