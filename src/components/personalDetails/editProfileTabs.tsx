"use client";
import Link from "next/link";
import React from "react";
import {
	LocationCity,
	Notifications,
	GppMaybe,
	Payments,
	AccountCircle,
} from "@mui/icons-material";

export default function EditProfileTabs() {
	return (
		<div className="p-5 shadow-md">
			<Link
				href="home/profile"
				className="flex items-center gap-4 py-3 pl-3 bg-primary-lightgreen"
			>
				<AccountCircle className="w-7 h-7" htmlColor="#575757" />
				Personal Details
			</Link>
			<hr />
			<Link href="home/myListing" className="flex items-center gap-4 py-3 pl-3">
				<LocationCity className="w-7 h-7" htmlColor="#575757" />
				My Listings
			</Link>
			<hr />
			<Link
				href="home/passwordSetting"
				className="flex items-center gap-4 py-3 pl-3"
			>
				<GppMaybe className="w-7 h-7" htmlColor="#575757" />
				Password Settings
			</Link>
			<hr />
			<Link
				href="home/notification"
				className="flex items-center gap-4 py-3 pl-3"
			>
				<Notifications className="w-7 h-7" htmlColor="#575757" />
				Notifications
			</Link>
			<hr />
			<Link
				href="home/paymentDetails"
				className="flex items-center gap-4 py-3 pl-3"
			>
				<Payments className="w-7 h-7" htmlColor="#575757" />
				Payment Details
			</Link>
		</div>
	);
}
