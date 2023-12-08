import React from "react";
import AlertPopup from "../notification/Alert";
import {
	Change_Password_Abort_Controller,
	useChangePasswordMutation,
} from "@/app/redux/services/authServices";
import ManageSearchParams from "@/hooks/updateSearchParams";
import CircularProgress from "@mui/material/CircularProgress";
import { ErrorMessage } from "@hookform/error-message";
import ShowPassword from "../sigin/showPassword";
import { passwordSchema } from "@/utils/schemas";
import { Passwords } from "@/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Field, FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function NewPasswordCard() {
	const alertId = React.useId();
	const { updateURLParam } = ManageSearchParams();
	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
	const [openPopup, setOpenPopup] = React.useState({
		state: false,
		message: "",
		type: "success",
	});
	const [
		changePassword,
		{ isLoading, isSuccess, isError, data, error, status },
	] = useChangePasswordMutation();
	// Form validation from React Hook Form
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

	React.useEffect(() => {
		if (isSuccess) {
			setOpenPopup({
				state: true,
				message: data?.message ?? "Password changed successfully",
				type: "success",
			});
			setTimeout(() => updateURLParam("view", "resetPasswordSuccessful"), 500);
		}
		if (isError) {
			setOpenPopup({
				state: true,
				message: data?.message ?? "Error changing password",
				type: "error",
			});
		}
		// if (isLoading) {
		// 	setOpenPopup((prev) => ({
		// 		...prev,
		// 		state: true,
		// 		message: "Changing password...",
		// 		type: "loading",
		// 	}));
		// }
	}, [data?.message, isError, isLoading, isSuccess, updateURLParam]);

	console.log(
		"Data:",
		data,
		"\nState:",
		status,
		"\nError:",
		error,
		"\nisSubmitting:",
		isSubmitting
	);

	// Handle Form Submission
	const onSubmit: SubmitHandler<FieldValues> = ({
		password,
		confirmPassword,
	}) => {
		changePassword({
			password: password,
			confirmPassword: confirmPassword,
		});
	};

	// Cancel a sign in request after it has been made
	const handleCancel = () => {
		Change_Password_Abort_Controller.abort();
		setOpenPopup({
			...openPopup,
			state: true,
			message: "Sign in request cancelled",
			type: "error",
		});
	};

	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/3 aspect-square p-10 gap-4 text-center max-sm:justify-start max-sm:w-full max-sm:h-full max-sm:aspect-auto  max-lg:w-1/2">
			<AlertPopup
				alertId={alertId}
				open={openPopup.state}
				severity={isSuccess ? "success" : "error"}
				title={isSuccess ? "Success" : "Error"}
				message={openPopup.message}
			/>
			<h1 className="text-3xl">Password reset request</h1>
			<p className=" text-body-text">
				Password reset request Please use a minimum of 8 characters, including
				uppercase letters, lowercase letters and a number.
			</p>
			<form
				className=" bg-transparent w-full gap-4 flex flex-col"
				onSubmit={handleSubmit(onSubmit)}
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
				<div className="relative text-left">
					<label
						className="block text-gray-700 text-md mb-2 text-left"
						htmlFor="password"
					>
						Password <sup className=" text-red-600">*</sup>
					</label>
					<input
						className={
							"h-12 text-xl appearance-none  border border-primary-grey rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline placeholder:pl-4 " +
							(errors.password
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="password"
						type={showPassword ? "text	" : "password"}
						placeholder="Password"
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
				<div className="relative text-left">
					<label
						className="block text-gray-700 text-md mb-2 text-left"
						htmlFor="confirmPassword"
					>
						Confirm Password <sup className=" text-red-600">*</sup>
					</label>
					<input
						className={
							"h-12 text-xl appearance-none  border border-primary-grey rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline placeholder:pl-4 " +
							(errors.confirmPassword
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="confirmPassword"
						type={showConfirmPassword ? "text	" : "password"}
						autoComplete="current-password"
						placeholder="Password"
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
				{/* Submit and Cancel Buttons */}
				<div className="flex flex-col items-center justify-center gap-6">
					<button
						className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-2 px-4 rounded-lg"
						type="submit"
						formTarget="password-form"
						disabled={isSubmitting}
					>
						{isLoading ? (
							<CircularProgress color="inherit" />
						) : (
							<span> Reset Password</span>
						)}
					</button>
					<button
						className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-white text-primary-green outline outline-primary-green font-bold py-2 px-4 rounded-lg"
						type="button"
						onClick={handleCancel}
					>
						Cancel
					</button>
				</div>
			</form>
		</div>
	);
}
