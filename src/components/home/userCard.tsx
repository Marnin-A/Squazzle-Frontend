"use client";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import useLocalStorage from "@/hooks/useLocalStorage";
import React from "react";

export default function UserCard() {
	const { getLocalStorage } = useLocalStorage();

	return (
		<div className="max-w-[305px] h-min font-semibold mr-16 py-6 px-12 bg-white text-center shadow-md max-md:mb-10 max-sm:text-left max-sm:p-0 max-sm:pr-12 max-sm:m-0 max-sm:shadow-none">
			<AccountCircleIcon
				htmlColor="#016D71"
				color="inherit"
				className="min-w-[104px] min-h-[104px] sm:hidden"
			/>
			<h1 className="text-[28px]">
				Welcome back {removeQuotes(getLocalStorage("username") ?? "User")}
			</h1>
			<p className="text-xl font-normal mb-10">
				{removeQuotes(getLocalStorage("email") ?? "user@gmail.com")}
			</p>
			<AccountCircleIcon
				htmlColor="#016D71"
				color="inherit"
				className="min-w-[104px] min-h-[104px] max-sm:hidden"
			/>
		</div>
	);
}
function removeQuotes(word: string) {
	return word.slice(1, word.length - 1);
}
