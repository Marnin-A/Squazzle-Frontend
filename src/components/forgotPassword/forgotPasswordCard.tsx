"use client";
import React from "react";
import Image from "next/image";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import {
	Forgot_Password_Abort_Controller,
	useForgotPasswordMutation,
} from "@/app/redux/services/apiServices";
import ManageSearchParams from "@/hooks/updateSearchParams";
import useLocalStorage from "@/hooks/useLocalStorage";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import { useDispatch } from "react-redux";
import LoadingSpinner from "../loadingSpinner";

export default function ForgotPasswordCard() {
	const alertId = React.useId();
	const dispatch = useDispatch();
	// Form validation from React Hook Form
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{ email: string }>({
		criteriaMode: "all",
	});

	const { setLocalStorage } = useLocalStorage();

	const { setURLParam } = ManageSearchParams();
	// Memoized setURLParams to prevent it from causing infinite rerenders
	const memoizedSetURLParam = React.useCallback(
		(name: string, value: string) => setURLParam(name, value),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[]
	);

	// Data mutation and req/res states from RTK Query
	const [
		handleForgotPassword,
		{ isSuccess, isLoading, status, isError, data, error },
	] = useForgotPasswordMutation();

	// Cancel a forgot password request after it has been made
	const handleCancel = () => {
		Forgot_Password_Abort_Controller.abort();
		dispatch(
			setAlertOpen({
				alertId: alertId,
				open: true,
				severity: "info",
				title: "Info",
				message: "Request cancelled, refresh before resending",
			})
		);
	};
	console.log("Error:", error, "Status:", status);

	React.useEffect(() => {
		if (isSuccess) {
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "success",
					title: "Success",
					message: "Request Successful",
				})
			);
			setTimeout(
				() => memoizedSetURLParam("view", "forgotPasswordSuccess"),
				500
			);
		}

		if (isError) {
			const e = error as unknown as {
				status: number;
				data: { error: string; message: string; success: boolean };
			};
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "error",
					title: "Error",
					message: e?.data.error ?? "Sorry an error occurred, please try again",
				})
			);
		}
	}, [
		error,
		data,
		isError,
		isSuccess,
		status,
		memoizedSetURLParam,
		dispatch,
		alertId,
	]);

	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/3 aspect-square p-10 gap-4 text-center max-sm:justify-start max-sm:w-full max-sm:h-full max-sm:aspect-auto  max-lg:w-1/2">
			<Image
				src="/email-icon.svg"
				alt="email icon"
				height={73.33}
				width={73.33}
				placeholder="empty"
				priority={false}
				className="w-min h-auto"
			/>
			<h1 className="text-3xl">Forgot Password?</h1>
			<p>
				Enter your registered email address below to receive the password reset
				code.
			</p>
			{/* Email Input */}
			<form
				className=" bg-transparent w-full gap-4 flex flex-col"
				onSubmit={handleSubmit(({ email }) => {
					setLocalStorage("email", email);
					handleForgotPassword(email);
				})}
			>
				<div className="relative w-full">
					<label
						className="block text-left text-sm text-gray-700 text-md mb-2"
						htmlFor="email"
					>
						Email Address<sup className=" text-error">*</sup>
					</label>
					<input
						className={
							"h-12 text-xl appearance-none border border-primary-green rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight placeholder:pl-4" +
							(errors.email
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="email"
						type="email"
						placeholder="zharadoe@gmail"
						autoComplete="email"
						{...register("email", {
							required: "Please enter a valid email address",
							pattern: {
								value:
									/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
								message: "A valid email is required",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="email"
						render={({ message }) => (
							<p className="text-xs text-error absolute bottom-[-10%]">
								{message}
							</p>
						)}
					/>
				</div>
				<button
					className="w-full py-3 px-4 rounded-lg hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold"
					type="submit"
					formTarget="signup"
				>
					<span className="flex items-center justify-center gap-2">
						{isLoading && <LoadingSpinner />}Get a reset code
					</span>
				</button>
				<button
					className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-white text-primary-green outline outline-primary-green font-bold py-2 px-4 rounded"
					type="button"
					onClick={handleCancel}
				>
					Cancel
				</button>
			</form>
		</div>
	);
}
