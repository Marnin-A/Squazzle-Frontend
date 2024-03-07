import React from "react";
import { MuiOtpInput } from "mui-one-time-password-input";
import { useDispatch } from "react-redux";
import {
	useResendOTPMutation,
	useValidateOTPMutation,
} from "@/app/redux/services/apiServices";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import ManageSearchParams from "@/hooks/updateSearchParams";
import useLocalStorage from "@/hooks/useLocalStorage";

type TError = {
	data: { error: string; message: string; success: false };
	status: number;
};

export default function EnterOtpCard({ userEmail }: { userEmail: string }) {
	const alertId = React.useId();
	const dispatch = useDispatch();
	const [otp, setOtp] = React.useState<string>("");
	const [email, setEmail] = React.useState("");
	const { getLocalStorage } = useLocalStorage();
	const { memoizedUpdateURLParam } = ManageSearchParams();
	const [
		validateOTP,
		{
			isError: isOtpError,
			isSuccess: isOtpSuccess,
			isLoading: isOtpPending,
			data: validateResponseData,
			error,
		},
	] = useValidateOTPMutation();

	const [
		resendOTP,
		{
			isError: isResendError,
			isSuccess: isResendSuccess,
			isLoading: isResendPending,
			data: resendResponseData,
			error: resendError,
		},
	] = useResendOTPMutation();

	async function handleValidateOTP() {
		console.log({
			email: email,
			OTP: otp,
		});

		const res = (await validateOTP({
			email: email,
			OTP: otp,
		})) as unknown as any;

		console.log(res);
		if (res.data?.success) {
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "success",
					title: "Success",
					message: res.data.message ?? "Email Verification Successful",
				})
			);
			return memoizedUpdateURLParam("view", "emailVerified");
		}
		if (res.error?.data.success === false) {
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "error",
					title: "Error",
					message:
						(res.error as TError)?.data.error ?? "Sorry an error occurred",
				})
			);
		}
	}
	async function handleResendOTP() {
		const res = (await resendOTP({
			email: email,
		})) as unknown as any;
		console.log(res);

		if (res.data.success === true) {
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "success",
					title: "Success",
					message: res.data.message ?? "OTP Resent to email",
				})
			);
		}
		if (res.data.success === false) {
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "error",
					title: "Error",
					message: res.data.error ?? "Sorry an error occurred",
				})
			);
		}
	}

	React.useEffect(() => {
		if (window && window.localStorage) {
			setEmail(getLocalStorage("email"));
		}
	}, [
		dispatch,
		isOtpError,
		isOtpSuccess,
		isResendError,
		isResendSuccess,
		error,
		alertId,
		validateResponseData?.message,
		resendResponseData?.message,
		memoizedUpdateURLParam,
		resendError,
	]);

	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/2 aspect-square p-10 gap-8 text-center max-sm:justify-start max-sm:h-full max-sm:w-full max-lg:h-3/4 max-lg:w-3/4 max-sm:aspect-auto ">
			<h1 className="text-3xl">Email Verification</h1>
			<p>
				Please enter the 6-digit code sent to
				<span className="text-primary-green"> {userEmail}</span>
			</p>

			<MuiOtpInput
				key="otpInputField"
				value={otp}
				onChange={(newValue) => setOtp(newValue)}
				length={6}
			/>

			<button
				className="w-full bg-primary-lightgreen text-primary-green hover:bg-primary-green hover:text-white font-bold py-2 px-4 rounded"
				type="button"
				key="validateOTPBtn"
				onClick={handleValidateOTP}
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
				key={"resendOTPBtn"}
				// Resend OTP
				onClick={handleResendOTP}
			>
				Resend Code
			</button>
		</div>
	);
}
