import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
	resetEmailVerification,
	setEmailVerified,
} from "@/app/redux/slices/emailVerificationSlice";
import AlertPopup from "../notification/Alert";
import { useResendOTPMutation } from "@/app/redux/services/authSlice";
import { CircularProgress } from "@mui/material";
// import { simulateOTPResponse } from "@/tests/signupTest";

export default function FailedEmailVerifiedCard() {
	const dispatch = useDispatch();

	// Get the email from local storage
	const localStorageEmail = localStorage.getItem("email") as string;
	// Request for new OTP
	const [resendOTP, { isError, isSuccess, isLoading, data }] =
		useResendOTPMutation();
	// const { data, isError, isSuccess } = await simulateOTPResponse(true);

	React.useEffect(() => {
		if (isSuccess) {
			// Set email verified state to true
			dispatch(setEmailVerified({ emailVerified: true }));
			// Reset email verification state
			dispatch(resetEmailVerification());
		}
		if (isError) {
			// Reset email verification state
			dispatch(resetEmailVerification());
			// Set email verified state to false
			dispatch(setEmailVerified({ emailVerified: false }));
		}
	}, [dispatch, isError, isSuccess]);

	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/3 aspect-square p-10 gap-8 text-center max-sm:justify-start max-sm:w-full max-sm:h-full max-sm:aspect-auto  max-lg:w-1/2">
			<AlertPopup
				open={data ? true : false}
				severity={isSuccess ? "success" : "error"}
				title={isSuccess ? "Success" : "Error"}
				message={data?.message ?? "Sorry an error occurred"}
			/>
			<Image
				src="/failed-icon.svg"
				alt="Failed Icon"
				height={73.33}
				width={73.33}
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
				onClick={() =>
					resendOTP({
						email: localStorageEmail,
					})
				}
			>
				{isLoading ? (
					<CircularProgress color="inherit" />
				) : (
					<span> Resend Code</span>
				)}
			</button>
		</div>
	);
}
