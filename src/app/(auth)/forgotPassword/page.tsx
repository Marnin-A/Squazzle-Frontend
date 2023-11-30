import EmailVerificationNavBar from "@/components/emailVerification/NavBarEmailVerification";
import BodyForgotPassword from "@/components/forgotPassword/bodyForgotPassword";
import CircularProgress from "@mui/material/CircularProgress";
import dynamic from "next/dynamic";
import React from "react";

export default function Page() {
	const DynamicForgotPasswordBody = dynamic(
		() => import("@/components/forgotPassword/bodyForgotPassword"),
		{
			ssr: false,
			loading: () => <CircularProgress color="success" className="m-auto" />,
		}
	);
	return (
		<main className="h-screen flex flex-col justify-start items-center bg-off-white">
			<EmailVerificationNavBar />
			<DynamicForgotPasswordBody />
		</main>
	);
}
