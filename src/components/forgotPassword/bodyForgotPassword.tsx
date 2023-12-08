"use client";
import React from "react";
import ForgotPasswordCard from "./forgotPasswordCard";
import ForgotPasswordSuccess from "./forgotPasswordSuccess";
import PasswordOtpCard from "./passwordOtpCard";
import ManageSearchParams from "@/hooks/updateSearchParams";
import NewPasswordCard from "./newPasswordCard";

export default function BodyForgotPassword() {
	const { getURLParam } = ManageSearchParams();

	const RenderComponents = () => {
		const otpSent = getURLParam("otpSent");
		const enterOtp = getURLParam("enterOtp");
		const view = getURLParam("view");
		console.log(view);

		switch (view) {
			case "forgotPasswordSuccess":
				return <ForgotPasswordSuccess />;

			case "enterOTP":
				return <PasswordOtpCard />;

			case "newPassword":
				return <NewPasswordCard />;

			default:
				return <ForgotPasswordCard />;
		}
	};

	return (
		<div className="flex-1 flex flex-col items-center justify-center w-full overflow-y-scroll max-sm:items-start">
			{RenderComponents()}
		</div>
	);
}
