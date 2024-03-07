"use client";
import React from "react";
import { useSelector } from "react-redux";
import EnterOtpCard from "./enterOtpCard";
import { RootState } from "@/app/redux/store";
import EmailVerifiedCard from "./emailVerifiedCard";
import useLocalStorage from "@/hooks/useLocalStorage";
import EmailNotificationCard from "./emailNotificationCard";
import FailedEmailVerifiedCard from "./failedEmailVerificationCard";
import ManageSearchParams from "@/hooks/updateSearchParams";

export default function EmailVerificationBody() {
	const { getURLParam } = ManageSearchParams();
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
	console.log(getURLParam("view"));

	return (
		<div className="flex-1 flex flex-col items-center justify-center w-full overflow-y-scroll max-sm:items-start">
			{getURLParam("view") === "emailVerified" ? (
				<EmailVerifiedCard />
			) : getURLParam("view") === "verificationFailed" ? (
				<FailedEmailVerifiedCard />
			) : getURLParam("view") === "enterOTP" ? (
				<EnterOtpCard userEmail={localStorageEmail} />
			) : getURLParam("view") === null ? (
				<EmailNotificationCard userEmail={localStorageEmail} />
			) : (
				""
			)}
		</div>
	);
}
