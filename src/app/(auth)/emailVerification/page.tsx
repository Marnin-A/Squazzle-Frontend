import EmailVerificationNavBar from "@/components/emailVerification/NavBarEmailVerification";
import EmailVerificationBody from "@/components/emailVerification/bodyEmailVerification";
import LoadingSpinner from "@/components/loadingSpinner";

import React from "react";

export default function Page() {
	return (
		<main className="h-screen flex flex-col justify-start items-center bg-off-white">
			<EmailVerificationNavBar />
			<React.Suspense fallback={<LoadingSpinner />}>
				<EmailVerificationBody />
			</React.Suspense>
		</main>
	);
}
