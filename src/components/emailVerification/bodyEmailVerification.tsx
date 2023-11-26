"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";
import EmailNotificationCard from "./emailNotificationCard";
import EnterOtpCard from "./enterOtpCard";
import EmailVerifiedCard from "./emailVerifiedCard";

export default function EmailVerificationBody() {
	const { email } = useSelector((state: RootState) => state.CreateProfile);
	const { continueBtnClicked } = useSelector(
		(state: RootState) => state.EmailContinueBtnClicked
	);
	const { emailVerification } = useSelector(
		(state: RootState) => state.EmailContinueBtnClicked
	);

	email && localStorage.setItem("email", email);
	const localStorageEmail = localStorage.getItem("email") as string;
	console.log(continueBtnClicked);

	return (
		<main className="flex-1 flex flex-col items-center justify-center w-full overflow-y-scroll max-sm:items-start">
			{continueBtnClicked && emailVerification ? (
				<EmailVerifiedCard />
			) : continueBtnClicked ? (
				<EnterOtpCard userEmail={localStorageEmail} />
			) : (
				<EmailNotificationCard userEmail={localStorageEmail} />
			)}
		</main>
	);
}
