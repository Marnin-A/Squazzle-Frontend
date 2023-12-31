"use client";
import React from "react";
import { useSelector } from "react-redux";
import EnterOtpCard from "./enterOtpCard";
import { RootState } from "@/app/redux/store";
import EmailVerifiedCard from "./emailVerifiedCard";
import useLocalStorage from "@/hooks/useLocalStorage";
import EmailNotificationCard from "./emailNotificationCard";
import FailedEmailVerifiedCard from "./failedEmailVerificationCard";

export default function EmailVerificationBody() {
	const { setLocalStorage, getLocalStorage } = useLocalStorage();
	const { email } = useSelector((state: RootState) => state.CreateProfile);
	const { continueBtnClicked } = useSelector(
		(state: RootState) => state.EmailVerification
	);
	const { emailVerified } = useSelector(
		(state: RootState) => state.EmailVerification
	);
	const { emailVerificationFailed } = useSelector(
		(state: RootState) => state.EmailVerification
	);
	console.log("failed", emailVerificationFailed);

	email && setLocalStorage("email", email);
	const localStorageEmail = getLocalStorage("email") as string;
	const renterComponentsConditionally = (): React.JSX.Element => {
		// Render when continue btn is clicked and email is verified
		if (continueBtnClicked && emailVerified && !emailVerificationFailed)
			return <EmailVerifiedCard />;

		// Render when continue btn is clicked email is not verified and email verification failed
		if (continueBtnClicked && !emailVerified && emailVerificationFailed)
			return <FailedEmailVerifiedCard />;

		// Render when only continue btn is clicked
		if (continueBtnClicked)
			return <EnterOtpCard userEmail={localStorageEmail} />;

		// Default case
		return <EmailNotificationCard userEmail={localStorageEmail} />;
	};

	return (
		<div className="flex-1 flex flex-col items-center justify-center w-full overflow-y-scroll max-sm:items-start">
			{renterComponentsConditionally()}
		</div>
	);
}
