import EmailVerificationNavBar from "@/components/emailVerification/NavBarEmailVerification";
import { CircularProgress } from "@mui/material";
import dynamic from "next/dynamic";

import React from "react";

export default function Page() {
	// Lazy load email notification body component with ssr:false
	// to avoid "ReferenceError: localStorage is not defined"
	const DynamicEmailNotificationBody = dynamic(
		() => import("@/components/emailVerification/bodyEmailVerification"),
		{
			ssr: false,
			loading: () => <CircularProgress color="success" className="my-auto" />,
		}
	);

	return (
		<div className="h-screen flex flex-col justify-start items-center bg-off-white">
			<EmailVerificationNavBar />
			<DynamicEmailNotificationBody />
		</div>
	);
}
