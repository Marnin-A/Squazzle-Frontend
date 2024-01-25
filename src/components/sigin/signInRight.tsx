"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import CircularProgress from "@mui/material/CircularProgress";
import {
	useSignInMutation,
	SignIn_Abort_Controller,
} from "@/app/redux/services/authServices";
import { useRouter } from "next13-progressbar";
import { FailedResponse } from "@/types/authTypes";
import ShowPassword from "./showPassword";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import { useDispatch } from "react-redux";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function SignInRight() {
	const router = useRouter();
	const alertId = React.useId();
	const dispatch = useDispatch();
	const [showPassword, setShowPassword] = React.useState(false);
	// Checkbox aria-label
	const label = { inputProps: { "aria-label": "Remember me" } };
	// Form validation from React Hook Form
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{ email: string; password: string; rememberMe: boolean }>({
		criteriaMode: "all",
	});
	const { setLocalStorage } = useLocalStorage();
	// Data mutation and req/res states from RTK Query
	const [signIn, { isSuccess, isLoading, isError, data, error }] =
		useSignInMutation();

	// Cancel a sign in request after it has been made
	const handleCancel = () => {
		SignIn_Abort_Controller.abort();
		dispatch(
			setAlertOpen({
				alertId: alertId,
				open: true,
				severity: "info",
				title: "Info",
				message: "Sign in request cancelled",
			})
		);
	};

	React.useEffect(() => {
		console.log("Data: ", data);
		console.log("Error: ", error);

		if (data || data === undefined) {
			if (isSuccess) {
				if (data?.success === true) {
					setLocalStorage(
						"username",
						`${data.response.data.user.firstName} ${data.response.data.user.lastName}`
					);
					setLocalStorage("accessToken", data.response.accessToken);
					setLocalStorage("accessToken", data.response.refreshToken);
					setLocalStorage("_id", data.response.data.user._id);
					setLocalStorage("profileImage", data.response.data.user.profileImage);
				}
				// Display Success popup
				dispatch(
					setAlertOpen({
						alertId: alertId,
						open: true,
						severity: "success",
						title: "Success",
						message: data?.message as string,
					})
				);
				router.push("/home");
			}
			if (isError) {
				const e = { ...error } as unknown as {
					status: number;
					data: FailedResponse;
				};
				console.log(e);

				// Display error popup
				dispatch(
					setAlertOpen({
						alertId: alertId,
						open: true,
						severity: "error",
						title: "Error",
						message:
							e.data?.error ??
							"Sorry an error occurred, check your internet access and try again.",
					})
				);
			}
		}
	}, [
		alertId,
		data,
		data?.message,
		dispatch,
		error,
		isError,
		isSuccess,
		router,
		setLocalStorage,
	]);

	return (
		<div className="bg-off-white flex flex-col items-center justify-center h-screen w-1/2 py-8 px-16 max-xs:justify-start max-xs:px-8 max-md:mt-8 max-md:w-full md:overflow-y-scroll">
			{/* Header */}
			<div className="flex flex-col items-start w-full">
				<h1 className=" text-2xl leading-8 font-bold">Welcome back!</h1>
				<h3 className="text-md text-primary-grey">
					We are thrilled to see you
				</h3>
			</div>
			{/* Form */}
			<form
				name="sigIn"
				className=" bg-transparent w-full pt-6 flex flex-col gap-6"
				onSubmit={handleSubmit((userData) => signIn(userData))}
			>
				{/* Email Input */}
				<div className="relative">
					<label className="block text-gray-700 text-md mb-2" htmlFor="email">
						Email <sup className=" text-error">*</sup>
					</label>
					<input
						className={
							"h-12 text-xl shadow-md appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight placeholder:pl-4" +
							(errors.email
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="email"
						type="email"
						placeholder="zharadoe@gmail"
						autoComplete="on"
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
				{/* Password Input */}
				<div className="relative">
					<label
						className="block text-gray-700 text-md mb-2"
						htmlFor="password"
					>
						Password <sup className=" text-red-600">*</sup>
					</label>
					<input
						className={
							"h-12 text-xl shadow-md appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline placeholder:pl-4 " +
							(errors.password
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="password"
						type={showPassword ? "text" : "password"}
						placeholder="**************"
						autoComplete="on"
						{...register("password")}
					/>
					<ShowPassword
						onClick={() => setShowPassword((prev) => !prev)}
						showPassword={showPassword}
					/>
					<ErrorMessage
						errors={errors}
						name="password"
						render={({ message }) => (
							<p className="text-xs text-error bottom-[-22%]">{message}</p>
						)}
					/>
				</div>
				{/* Remember me and Forgot Password */}
				<div className="text-primary-grey text-base flex justify-between items-center">
					<div className="flex items-center">
						<span>
							<Checkbox {...register("rememberMe")} {...label} />
						</span>
						<span className="text-gray-500">Remember me</span>
					</div>
					<Link className="text-primary-green" href="/forgotPassword">
						Forgot Password?
					</Link>
				</div>
				{/* Buttons */}
				<div className="flex flex-col items-center justify-center gap-6">
					<button
						className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-2 px-4 rounded"
						type="submit"
						formTarget="sigIn"
						disabled={isLoading}
					>
						{isLoading ? (
							<CircularProgress color="inherit" />
						) : (
							<span>Sign In</span>
						)}
					</button>
					<button
						className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-white text-primary-green outline outline-primary-green font-bold py-2 px-4 rounded"
						type="button"
						onClick={handleCancel}
					>
						Cancel
					</button>
				</div>
				<div className="flex justify-center items-center">
					<p>
						New to squazzle account?{" "}
						<Link className="text-primary-green" href={"/signup"}>
							Sign up
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
