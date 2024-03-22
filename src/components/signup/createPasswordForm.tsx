"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next13-progressbar";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { RootState } from "@/app/redux/store";
import Checkbox from "@mui/material/Checkbox";
import Link from "next/link";
import { resetProfileData } from "@/app/redux/slices/signUpSlice";
import { Passwords } from "@/types/types";
import { useSignUpMutation } from "@/app/redux/services/apiServices";
import { passwordSchema } from "@/utils/schemas";
import ShowPassword from "../sigin/showPassword";
import { setAlertOpen } from "@/app/redux/slices/notificationSlice";
import LoadingSpinner from "../loadingSpinner";

export default function UserCreatePasswordForm() {
	const alertId = React.useId();
	const router = useRouter();
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.CreateProfile);
	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

	// Checkbox aria-label
	const label = { inputProps: { "aria-label": "Squazzle privacy policy" } };
	// Popup container ref
	const containerRef = React.useRef<HTMLDivElement>(null);

	// React Hook Form Validation
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<Passwords>({
		resolver: yupResolver(passwordSchema),
		criteriaMode: "all",
		reValidateMode: "onChange",
		mode: "onChange",
	});
	// Data mutation and req/res states from RTK Query
	const [submitData, { isLoading }] = useSignUpMutation();

	// Handle Form Submission
	const onSubmit: SubmitHandler<FieldValues> = async (passwords) => {
		// Upload user data
		const res = (await submitData({
			...user,
			password: passwords.password,
		})) as unknown as any;

		if (res.error?.status === "FETCH_ERROR") {
			// Display error popup
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "error",
					title: "Error",
					message: "Network error, check your internet access and try again.",
				})
			);
			return;
		}
		if (res.error?.data.success === false) {
			// console.log("Error");
			const phoneNumberErrorMsg = `something went wrong here is the error MongoServerError: E11000 duplicate key error collection: stayshare.users index: phoneNumber_1 dup key: { phoneNumber: "${user.phoneNumber}" }`;
			// Display error popup
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "error",
					title: "Error",
					message:
						res.error.data.error === phoneNumberErrorMsg
							? `A user with the phone number ${user.phoneNumber} already exists`
							: res.error.data.error ?? "Sorry an error occurred, try again.",
				})
			);
			return;
		}
		if (res.data.status === "success") {
			// Display popup
			dispatch(
				setAlertOpen({
					alertId: alertId,
					open: true,
					severity: "success",
					title: "Success",
					message: res.data.message ?? "Account created successfully.",
				})
			);

			router.push("/emailVerification");
		}
	};
	// Cancel sign up
	const handleCancel = () => {
		dispatch(resetProfileData());
	};

	return (
		<div
			ref={containerRef}
			className="bg-off-white flex flex-col items-center justify-start py-8 max-xs:px-8 px-16 h-screen max-md:mb-8 max-xs:mb-20 max-md:w-full md:overflow-y-scroll"
		>
			{/* Header */}
			<div className="flex flex-col items-start w-full">
				<h1 className=" text-2xl leading-8 font-bold">Create a Password</h1>
				<h3 className="text-md">
					Use a minimum of 8 characters, including uppercase letters, lowercase
					letters and a number.
				</h3>
			</div>
			{/* Form */}
			<form
				className=" bg-transparent w-full pt-6 flex flex-col gap-6"
				onSubmit={handleSubmit(onSubmit)}
				id="password-form"
			>
				{/* Hidden username field for web accessibility */}
				<div className="hidden">
					<label
						className="block text-gray-700 text-md mb-2"
						htmlFor="password"
					>
						Username
					</label>
					<input
						className={
							"h-12 text-xl shadow-md appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline placeholder:pl-4 "
						}
						type="text"
						placeholder="username"
						autoComplete="username"
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
						type={showPassword ? "text	" : "password"}
						placeholder="**************"
						autoComplete="new-password"
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
				{/* Confirm Password Input */}
				<div className="relative">
					<label
						className="block text-gray-700 text-md mb-2"
						htmlFor="confirmPassword"
					>
						Confirm Password <sup className=" text-red-600">*</sup>
					</label>
					<input
						className={
							"h-12 text-xl shadow-md appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline placeholder:pl-4 " +
							(errors.confirmPassword
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="confirmPassword"
						type={showConfirmPassword ? "text	" : "password"}
						autoComplete="current-password"
						placeholder="**************"
						{...register("confirmPassword")}
					/>
					<ShowPassword
						onClick={() => setShowConfirmPassword((prev) => !prev)}
						showPassword={showConfirmPassword}
					/>
					<ErrorMessage
						errors={errors}
						name="confirmPassword"
						render={({ message }) => (
							<p className="text-xs text-error bottom-[-22%]">{message}</p>
						)}
					/>
				</div>
				{/* Privacy Policy Text */}
				<div className="text-primary-grey text-base flex flex-col items-center">
					<div className="flex">
						<span>
							<Checkbox {...register("acceptPolicy")} {...label} />
						</span>
						<p className="">
							I confirm that I have read & agree to Squazzle{" "}
							<span className="text-primary-green">Terms of Service</span> and{" "}
							<span className="text-primary-green">Privacy Policy.</span>
						</p>
					</div>
					<ErrorMessage
						errors={errors}
						name="acceptPolicy"
						render={({ message }) => (
							<p className="text-xs text-error bottom-[-22%]">{message}</p>
						)}
					/>
				</div>
				{/* Buttons */}
				<div className="flex flex-col items-center justify-center gap-6">
					<button
						className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-2 px-4 rounded"
						type="submit"
						formTarget="password-form"
						disabled={isSubmitting}
					>
						<span className="flex items-center justify-center gap-2">
							{isLoading && <LoadingSpinner />} Create Account
						</span>
					</button>
					<button
						className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-white text-primary-green outline outline-primary-green font-bold py-2 px-4 rounded"
						type="button"
						onClick={handleCancel}
					>
						Back
					</button>
				</div>
				<div className="flex justify-center items-center">
					<p>
						Already have an account?{" "}
						<Link className="text-primary-green" href={"/signin"}>
							Sign in
						</Link>
					</p>
				</div>
			</form>
		</div>
	);
}
