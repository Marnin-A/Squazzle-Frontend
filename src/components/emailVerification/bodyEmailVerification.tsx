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
	const [localStorageEmail, setLocalStorageEmail] = React.useState("");
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

	React.useEffect(() => {
		if (window !== undefined && window.localStorage) {
			email && setLocalStorage("email", email);
			setLocalStorageEmail(getLocalStorage("email"));
		}
	}, [email, getLocalStorage, setLocalStorage]);

	return (
		<div className="flex-1 flex flex-col items-center justify-center w-full overflow-y-scroll max-sm:items-start">
			{continueBtnClicked && emailVerified && !emailVerificationFailed ? (
				<EmailVerifiedCard />
			) : continueBtnClicked && !emailVerified && emailVerificationFailed ? (
				<FailedEmailVerifiedCard />
			) : continueBtnClicked ? (
				<EnterOtpCard userEmail={localStorageEmail} />
			) : (
				<EmailNotificationCard userEmail={localStorageEmail} />
			)}
		</div>
	);
}
