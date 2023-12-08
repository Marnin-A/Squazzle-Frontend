import React from "react";
import AlertPopup from "../notification/Alert";
import { MuiOtpInput } from "mui-one-time-password-input";
import {
	useForgotPasswordOTPMutation,
	useResendPasswordOTPMutation,
} from "@/app/redux/services/authServices";
import useLocalStorage from "@/hooks/useLocalStorage";
import ManageSearchParams from "@/hooks/updateSearchParams";

export default function PasswordOtpCard() {
	const alertId = React.useId();
	const { memoizedUpdateURLParam: test } = ManageSearchParams();
	const [otp, setOtp] = React.useState<string>("");
	const [openPopup, setOpenPopup] = React.useState({
		state: false,
		message: "",
	});
	const { getLocalStorage } = useLocalStorage();
	// Get user email form localStorage
	const userEmail = getLocalStorage("email");

	// Send OTP handler and States
	const [
		sendOTP,
		{
			isLoading: sendOTPLoading,
			isSuccess: sendOtpSuccess,
			isError: sendOtpIsError,
			data: sendOtpData,
			error: sendOtpError,
		},
	] = useForgotPasswordOTPMutation();

	// Send OTP handler and States
	const [
		resendOTP,
		{
			isLoading: resendOTPLoading,
			isSuccess: resendOtpSuccess,
			isError: resendOtpIsError,
			data: resendOtpData,
			error: resendOtpError,
		},
	] = useResendPasswordOTPMutation();

	const handleSendOTP = () => {
		console.log(userEmail, Number(otp));

		sendOTP({
			email: userEmail as string,
			otp: Number(otp),
		});
	};

	React.useEffect(() => {
		if (sendOtpSuccess || resendOtpSuccess) {
			setOpenPopup((prev) => ({
				...prev,
				state: true,
				message: "OTP sent successfully",
				type: "success",
			}));

			// Update url
		}
		if (sendOtpIsError || resendOtpIsError) {
			setOpenPopup((prev) => ({
				...prev,
				state: true,
				message:
					(resendOtpData?.message || sendOtpData?.message) ??
					"Sorry an error occurred, please try again",
				type: "error",
			}));
			setTimeout(() => test("view", "newPassword"), 500);
		}
		console.log(resendOtpData);
	}, [
		resendOtpData,
		resendOtpIsError,
		resendOtpSuccess,
		sendOtpData?.message,
		sendOtpIsError,
		sendOtpSuccess,
		test,
		sendOTP,
		resendOTP,
	]);
	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/2 aspect-square p-10 gap-8 text-center max-sm:justify-start max-sm:h-full max-sm:w-full max-lg:h-3/4 max-lg:w-3/4 max-sm:aspect-auto ">
			<AlertPopup
				alertId={alertId}
				open={openPopup.state}
				severity={sendOtpSuccess || resendOtpSuccess ? "success" : "error"}
				title={sendOtpSuccess || resendOtpSuccess ? "Success" : "Error"}
				message={openPopup.message ?? "Sorry an error occurred"}
			/>
			<h1 className="text-3xl">Password Reset</h1>
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
				className="w-full bg-primary-lightgreen text-primary-green hover:bg-primary-green hover:text-white font-bold py-2 px-4 rounded-lg"
				type="button"
				// Verify OTP
				onClick={handleSendOTP}
			>
				{sendOTPLoading || resendOTPLoading ? (
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
				disabled={sendOTPLoading || resendOTPLoading}
				// Resend OTP
				onClick={() =>
					resendOTP({
						email: userEmail as string,
					})
				}
			>
				Resend Code
			</button>
		</div>
	);
}
