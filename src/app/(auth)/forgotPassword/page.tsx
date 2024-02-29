import EmailVerificationNavBar from "@/components/emailVerification/NavBarEmailVerification";
import BodyForgotPassword from "@/components/forgotPassword/bodyForgotPassword";
import LoadingSpinner from "@/components/loadingSpinner";
import React from "react";

export default function Page() {
	return (
		<main className="h-screen flex flex-col justify-start items-center bg-off-white">
			<EmailVerificationNavBar />
			<React.Suspense fallback={<LoadingSpinner className="m-auto" />}>
				<BodyForgotPassword />
			</React.Suspense>
		</main>
	);
}
