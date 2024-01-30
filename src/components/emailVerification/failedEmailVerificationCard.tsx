import React, { Suspense } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";
import {
	resetEmailVerification,
	setEmailVerified,
} from "@/app/redux/slices/emailVerificationSlice";
// import { simulateOTPResponse } from "@/tests/signupTest";
import { useResendOTPMutation } from "@/app/redux/services/apiServices";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";

export default function FailedEmailVerifiedCard() {
	const alertId = React.useId();

	const dispatch = useDispatch();

	// Get the email from local storage
	const localStorageEmail = localStorage.getItem("email") as string;
	// Request for new OTP
	const [resendOTP, { isError, isSuccess, isLoading }] = useResendOTPMutation();
	// const { data, isError, isSuccess } = await simulateOTPResponse(true);

	async function handleSubmit() {
		const res = await resendOTP({
			email: localStorageEmail,
		});
		if (isSuccess) {
			dispatch(setEmailVerified({ emailVerified: true }));
			dispatch(resetEmailVerification());
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "success",
					title: "Success",
					message: "Verification Email Sent",
				})
			);
		}
		if (isError) {
			const errorObj = res as unknown as {
				error: {
					data: { email: string; message: string; success: boolean };
					status: number;
				};
			};
			dispatch(resetEmailVerification());
			dispatch(setEmailVerified({ emailVerified: false }));
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "error",
					title: "Error",
					message: errorObj.error.data.email ?? "Sorry an error occurred",
				})
			);
		}

		console.log(res);
	}

	return (
		<Suspense fallback={<CircularProgress />}>
			<div className="bg-white flex flex-col items-center justify-center w-1/3 aspect-square p-10 gap-8 text-center max-sm:justify-start max-sm:w-full max-sm:h-full max-sm:aspect-auto  max-lg:w-1/2">
				<Image
					src="/failed-icon.svg"
					alt="Failed Icon"
					height={73.33}
					width={73.33}
					placeholder="empty"
					priority={false}
					className="w-min h-auto"
				/>
				<h1 className="text-3xl">Let&apos;s try that again!</h1>
				<p className="text-error">
					Your email address cannot be verified. It seems you entered the wrong
					PIN.
				</p>
				<button
					className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-2 px-4 rounded"
					type="submit"
					onClick={() => handleSubmit()}
				>
					{isLoading ? (
						<CircularProgress color="inherit" />
					) : (
						<span> Resend Code</span>
					)}
				</button>
			</div>
		</Suspense>
	);
}
