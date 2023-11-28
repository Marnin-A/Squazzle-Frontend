import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
	resetEmailVerification,
	setEmailVerified,
} from "@/app/store/slices/emailVerificationSlice";
import { Popup, SuccessfulSignupResponse } from "@/types";
import { usePostData } from "@/utils/dataHandlers";
import AlertPopup from "../notification/Alert";
// import { simulateOTPResponse } from "@/tests/signupTest";

export default function FailedEmailVerifiedCard() {
	const dispatch = useDispatch();
	const [openPopup, setOpenPopup] = React.useState<Popup>({
		state: false,
		message: "",
		type: undefined,
	});

	// Get the email from local storage
	const localStorageEmail = localStorage.getItem("email") as string;
	// Request for new OTP
	const {
		mutateAsync: handleResendCode,
		data: response,
		isSuccess,
		isError,
		isPending,
	} = usePostData();
	const data = response.data;
	// const { data, isError, isSuccess } = await simulateOTPResponse(true);

	if (isSuccess) {
		// Open success popup
		setOpenPopup({
			...openPopup,
			state: true,
			message: data.message,
			type: "success",
		});

		// Set email verified state to true
		dispatch(setEmailVerified({ emailVerified: true }));
		// Reset email verification state
		dispatch(resetEmailVerification());

		// Close success popup
		setTimeout(() => setOpenPopup({ ...openPopup, state: false }), 4000);
	}
	if (isError) {
		// Open error popup
		setOpenPopup({
			...openPopup,
			state: true,
			message: data.message,
			type: "error",
		});

		// Reset email verification state
		dispatch(resetEmailVerification());
		// Set email verified state to false
		dispatch(setEmailVerified({ emailVerified: false }));

		// Close error popup
		setTimeout(() => setOpenPopup({ ...openPopup, state: false }), 4000);
	}

	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/3 aspect-square p-10 gap-8 text-center max-sm:justify-start max-sm:w-full max-sm:h-full max-sm:aspect-auto  max-lg:w-1/2">
			<AlertPopup
				open={openPopup.state}
				severity={openPopup.type}
				title={openPopup.type == "success" ? "Success" : "Error"}
				message={openPopup.message}
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
				onClick={async () =>
					await handleResendCode({
						endpoint: "/api/v1/auth/resendOTP",
						postData: localStorageEmail,
					})
				}
			>
				{isPending ? (
					<div
						className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-neutral-100 motion-reduce:animate-[spin_1.5s_linear_infinite]"
						role="status"
					>
						<span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
							Loading...
						</span>
					</div>
				) : (
					<span> Resend Code</span>
				)}
			</button>
		</div>
	);
}
