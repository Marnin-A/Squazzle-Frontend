import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { usePostData } from "@/utils/dataHandlers";
import AlertPopup from "../notification/Alert";
import { Popup, SuccessfulSignupResponse } from "@/types";
// import { simulateOTPResponse } from "@/tests/signupTest";
import { useDispatch } from "react-redux";
import {
	setEmailVerificationFailed,
	setEmailVerified,
} from "@/app/store/slices/emailVerificationSlice";

export default function EnterOtpCard({ userEmail }: { userEmail: string }) {
	const dispatch = useDispatch();
	const [otp, setOtp] = React.useState<string>("");
	const [openPopup, setOpenPopup] = React.useState<Popup>({
		state: false,
		message: "",
		type: undefined,
	});
	const {
		mutateAsync: handleOTP,
		isError: isOtpError,
		isSuccess: isOtpSuccess,
		isPending: isOtpPending,
		data: response,
	} = usePostData();
	console.log(response);
	// Apply correct type to successfully retrieved data
	const data = response.data;
	console.log(data);
	console.log("error", isOtpError, "success", isOtpSuccess);
	// Get the email from local storage
	const localStorageEmail = localStorage.getItem("email") as string;

	if (isOtpSuccess) {
		// Open success popup
		setOpenPopup({
			...openPopup,
			state: true,
			message: data.message,
			type: "success",
		});

		// Set email verification and email verified state to true
		dispatch(setEmailVerified({ emailVerified: true }));

		// Close success popup
		setTimeout(() => setOpenPopup({ ...openPopup, state: false }), 4000);
	}

	if (isOtpError) {
		// Open error popup
		setOpenPopup({
			...openPopup,
			state: true,
			message: data.message,
			type: "error",
		});

		// Set email verification and email verified state to false
		dispatch(setEmailVerified({ emailVerified: false }));
		dispatch(setEmailVerificationFailed({ emailVerificationFailed: true }));

		// Close error popup
		setTimeout(() => setOpenPopup({ ...openPopup, state: false }), 4000);
	}

	// Handle the OTP input changes
	const handleOTPChange = (newValue: string) => {
		setOtp(newValue);
		console.log(newValue);
	};

	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/2 aspect-square p-10 gap-8 text-center max-sm:justify-start max-sm:h-full max-sm:w-full max-lg:h-3/4 max-lg:w-3/4 max-sm:aspect-auto ">
			<AlertPopup
				open={openPopup.state}
				severity={openPopup.type}
				title={openPopup.type == "success" ? "Success" : "Error"}
				message={openPopup.message}
			/>
			<h1 className="text-3xl">Email Verification</h1>
			<p>
				Please enter the 6-digit code sent to
				<span className="text-primary-green"> {userEmail}</span>
			</p>
			<MuiOtpInput
				value={otp}
				onChange={async () => await handleOTPChange}
				length={6}
			/>
			<button
				className="w-full bg-primary-lightgreen text-primary-green hover:bg-primary-green hover:text-white font-bold py-2 px-4 rounded"
				type="button"
				// Verify OTP
				onClick={async () =>
					await handleOTP({
						endpoint: "/api/v1/auth/activateAccount",
						postData: otp,
					})
				}
			>
				{isOtpPending ? (
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
				onClick={async () =>
					await handleOTP({
						endpoint: "/api/v1/auth/resendOTP",
						postData: localStorageEmail,
					})
				}
			>
				Resend Code
			</button>
		</div>
	);
}
