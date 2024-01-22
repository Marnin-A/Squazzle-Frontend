"use client";
import React from "react";
import ForgotPasswordCard from "./forgotPasswordCard";
import ForgotPasswordSuccess from "./forgotPasswordSuccess";
import PasswordOtpCard from "./passwordOtpCard";
import ManageSearchParams from "@/hooks/updateSearchParams";
import NewPasswordCard from "./newPasswordCard";
import ResetPasswordSuccess from "./resetPasswordSuccess";

export default function BodyForgotPassword() {
	return (
		<div className="flex-1 flex flex-col items-center justify-center w-full overflow-y-scroll max-sm:items-start">
			<RenderComponents />
		</div>
	);
}

function RenderComponents() {
	const { getURLParam } = ManageSearchParams();
	const view = getURLParam("view");
	console.log(view);
	return (
		<React.Suspense>
			{view === "forgotPasswordSuccess" ? (
				<ForgotPasswordSuccess />
			) : view === "enterOTP" ? (
				<PasswordOtpCard />
			) : view === "newPassword" ? (
				<NewPasswordCard />
			) : view === "resetPasswordSuccess" ? (
				<ResetPasswordSuccess />
			) : (
				<ForgotPasswordCard />
			)}
		</React.Suspense>
	);
}
