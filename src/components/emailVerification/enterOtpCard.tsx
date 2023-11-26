import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { PostData } from "@/utils/dataHandlers";
import AlertPopup from "../notification/Alert";
import { Popup, PopupSeverity, SuccessfulSignupResponse } from "@/types";
import { simulateOTPResponse } from "@/tests/signupTest";
import { useDispatch } from "react-redux";
import { setEmailVerification } from "@/app/store/slices/emailVerificationSlice";
import { set } from "react-hook-form";

export default function EnterOtpCard({ userEmail }: { userEmail: string }) {
	const dispatch = useDispatch();
	const [otp, setOtp] = React.useState<string>("");
	const [openPopup, setOpenPopup] = React.useState<Popup>({
		state: false,
		message: "",
	});
	const [popupType, setPopupType] = React.useState<PopupSeverity>("success");
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	// Handle the OTP input changes
	const handleOTPChange = (newValue: string) => {
		setOtp(newValue);
		console.log(newValue);
	};

	// Handle the confirm OTP button click
	const handleConfirmOTP = async (otp: string): Promise<void> => {
		setIsLoading(true);

		// const {
		// 	data: response,
		// 	status,
		// 	isError,
		// 	isSuccess,
		// } = PostData("/api/v1/auth/activateAccount", otp);
		const { data, status, isError, isSuccess } = await simulateOTPResponse();
		// const { data } = response as SuccessfulSignupResponse;
		if (isSuccess) {
			setPopupType("success");
			setOpenPopup({ ...openPopup, state: true, message: data.message });
			setTimeout(() => dispatch(setEmailVerification()), 500);
		}
		if (isError) {
			setPopupType("error");
			setOpenPopup({ ...openPopup, state: true, message: data.message });
		}

		setIsLoading(false);
		setTimeout(() => setOpenPopup({ ...openPopup, state: false }), 4000);

		console.log(data);
	};

	// Handle resending OTP
	const handleResendCode = (): void => {
		setIsLoading(true);

		const {
			data: response,
			isSuccess,
			isError,
		} = PostData("/api/v1/auth/resendOTP", otp);
		const { data } = response as SuccessfulSignupResponse;

		if (isSuccess) {
			setPopupType("success");
			setOpenPopup({ ...openPopup, state: true, message: data.message });
			setTimeout(() => dispatch(setEmailVerification()), 500);
		}
		if (isError) {
			setPopupType("error");
			setOpenPopup({ ...openPopup, state: true, message: data.message });
		}

		setIsLoading(false);
		setTimeout(() => setOpenPopup({ ...openPopup, state: false }), 4000);
	};

	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/2 aspect-square p-10 gap-8 text-center max-sm:justify-start max-sm:h-full max-sm:w-full max-lg:h-3/4 max-lg:w-3/4 max-sm:aspect-auto ">
			<AlertPopup
				open={openPopup.state}
				severity={popupType}
				title={popupType == "success" ? "Success" : "Error"}
				message={openPopup.message}
			/>
			<h1 className="text-3xl">Email Verification</h1>
			<p>
				Please enter the 6-digit code sent to
				<span className="text-primary-green"> {userEmail}</span>
			</p>
			<MuiOtpInput value={otp} onChange={handleOTPChange} length={6} />
			<button
				className="w-full bg-primary-lightgreen text-primary-green hover:bg-primary-green hover:text-white font-bold py-2 px-4 rounded"
				type="button"
				formTarget="signup"
				onClick={() => handleConfirmOTP(otp)}
			>
				{isLoading ? (
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
				formTarget="signup"
				onClick={handleResendCode}
			>
				Resend Code
			</button>
		</div>
	);
}
