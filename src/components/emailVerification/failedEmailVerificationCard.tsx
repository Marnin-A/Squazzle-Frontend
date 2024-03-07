import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
	resetEmailVerification,
	setEmailVerified,
} from "@/app/redux/slices/emailVerificationSlice";
// import { simulateOTPResponse } from "@/tests/signupTest";
import { useResendOTPMutation } from "@/app/redux/services/apiServices";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import LoadingSpinner from "../loadingSpinner";
import ManageSearchParams from "@/hooks/updateSearchParams";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function FailedEmailVerifiedCard() {
	const alertId = React.useId();
	const dispatch = useDispatch();
	const [email, setEmail] = React.useState("");
	const { setURLParam } = ManageSearchParams();
	const { getLocalStorage } = useLocalStorage();

	// Request for new OTP
	const [resendOTP, { isError, isSuccess, isLoading }] = useResendOTPMutation();
	// const { data, isError, isSuccess } = await simulateOTPResponse(true);

	async function handleSubmit() {
		const res = (await resendOTP({
			email: email,
		})) as unknown as any;
		if (res.data.success == true) {
			// dispatch(setEmailVerified({ emailVerified: true }));
			setURLParam("view", "enterOTP");
			// dispatch(resetEmailVerification());
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
		if (res.error) {
			const errorObj = res as unknown as {
				error: {
					data: { email: string; message: string; success: boolean };
					status: number;
				};
			};
			setURLParam("view", "resendOTP");

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
	React.useEffect(() => {
		if (window && window.localStorage) {
			setEmail(getLocalStorage("email"));
		}
	}, []);

	return (
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
				<span className="flex items-center justify-center gap-2">
					{isLoading && <LoadingSpinner />} Resend Code
				</span>
			</button>
		</div>
	);
}
{
	data: {
		error: "Resource for user not found";
		message: "This wasn't supposed to happen Our engineers are working on it. How about a fresh start?";
		success: false;
	}
	status: 404;
}
