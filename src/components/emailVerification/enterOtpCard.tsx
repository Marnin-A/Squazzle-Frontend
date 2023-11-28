import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import AlertPopup from "../notification/Alert";
import { useDispatch } from "react-redux";
import {
	setEmailVerificationFailed,
	setEmailVerified,
} from "@/app/redux/slices/emailVerificationSlice";
import {
	useResendOTPMutation,
	useValidateOTPMutation,
} from "@/app/redux/services/authSlice";
// import { simulateOTPResponse } from "@/tests/signupTest";

export default function EnterOtpCard({ userEmail }: { userEmail: string }) {
	const dispatch = useDispatch();
	const [otp, setOtp] = React.useState<string>("");
	const [
		validateOTP,
		{
			isError: isOtpError,
			isSuccess: isOtpSuccess,
			isLoading: isOtpPending,
			data: validateResponseData,
		},
	] = useValidateOTPMutation();

	const [
		resendOTP,
		{
			isError: isResendError,
			isSuccess: isResendSuccess,
			isLoading: isResendPending,
			data: resendResponseData,
		},
	] = useResendOTPMutation();

	const popupOpenState =
		isOtpSuccess || isResendSuccess || isOtpError || isResendError;

	const popupSeverity =
		isOtpSuccess || isResendSuccess
			? "success"
			: isOtpError || isResendError
			? "error"
			: "success";

	// Get the email from local storage
	const localStorageEmail = localStorage.getItem("email") as string;

	React.useEffect(() => {
		if (isOtpSuccess || isResendSuccess) {
			// Set email verification and email verified state to true
			dispatch(setEmailVerified({ emailVerified: true }));
		}

		if (isOtpError || isResendError) {
			// Set email verification and email verified state to false
			dispatch(setEmailVerified({ emailVerified: false }));
			dispatch(setEmailVerificationFailed({ emailVerificationFailed: true }));
		}

		console.log("##### EnterOtpCard Logs #####");
		console.log("error", isOtpError, "success", isOtpSuccess);
	}, [dispatch, isOtpError, isOtpSuccess, isResendError, isResendSuccess]);

	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/2 aspect-square p-10 gap-8 text-center max-sm:justify-start max-sm:h-full max-sm:w-full max-lg:h-3/4 max-lg:w-3/4 max-sm:aspect-auto ">
			<AlertPopup
				open={popupOpenState}
				severity={popupSeverity}
				title={isOtpSuccess || isResendSuccess ? "Success" : "Error"}
				message={
					(validateResponseData?.message || resendResponseData?.message) ??
					"Sorry an error occurred"
				}
			/>
			<h1 className="text-3xl">Email Verification</h1>
			<p>
				Please enter the 6-digit code sent to
				<span className="text-primary-green"> {userEmail}</span>
			</p>
			<MuiOtpInput
				value={otp}
				onChange={(newValue) => setOtp(newValue)}
				length={6}
			/>
			<button
				className="w-full bg-primary-lightgreen text-primary-green hover:bg-primary-green hover:text-white font-bold py-2 px-4 rounded"
				type="button"
				// Verify OTP
				onClick={() =>
					validateOTP({
						email: localStorageEmail,
						otp: Number(otp),
					})
				}
			>
				{isOtpPending || isResendPending ? (
					<div
						className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
						role="status"
					>
						<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
							Loading...
						</span>
					</div>
				) : (
					<span>Confirm</span>
				)}
			</button>
			<button
				className="w-full hover:bg-primary-lightgreen text-primary-green bg-inherit font-bold py-2 px-4 rounded"
				type="button"
				// Resend OTP
				onClick={() =>
					resendOTP({
						email: localStorageEmail,
					})
				}
			>
				Resend Code
			</button>
		</div>
	);
}
