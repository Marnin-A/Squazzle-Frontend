"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "@hookform/error-message";
import { RootState } from "@/app/store/store";
import Checkbox from "@mui/material/Checkbox";
import * as yup from "yup";
import Link from "next/link";
import { resetProfileData } from "@/app/store/slices/signUpSlice";
import AlertPopup from "../notification/Alert";
import {
	Passwords,
	Popup,
	FailedSignupResponse,
	SuccessfulSignupResponse,
} from "@/types";
// import { simulateApiResponse } from "@/tests/signupTest";
import { usePostData } from "@/utils/dataHandlers";
import CircularProgress from "@mui/material/CircularProgress";

export default function UserCreatePasswordForm() {
	const router = useRouter();
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.CreateProfile);
	const [openPopup, setOpenPopup] = React.useState<Popup>({
		state: false,
		message: "",
		type: undefined,
	});
	const label = { inputProps: { "aria-label": "Squazzle privacy policy" } };
	const containerRef = React.useRef<HTMLDivElement>(null);
	const passwordSchema = yup.object().shape({
		password: yup
			.string()
			.required("*Password is required")
			.min(8, "*Password must have at least 8 charaters")
			.matches(RegExp("(.*[a-z].*)"), "*Must contain at least one lowercase")
			.matches(RegExp("(.*[A-Z].*)"), "*Must contain at least one uppercase")
			.matches(RegExp("(.*\\d.*)"), "*Must contain at least one number")
			.matches(
				RegExp('[!@#$%^&*(),.?":{}|<>]'),
				"*Must contain at least one special"
			),
		confirmPassword: yup
			.string()
			.required("*Confirm password is required")
			.oneOf([yup.ref("password")], "*Passwords do not match"),
		acceptPolicy: yup.boolean().required("Checkbox must be checked"),
	});
	// React Hook Form Validation
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Passwords>({
		resolver: yupResolver(passwordSchema),
		criteriaMode: "all",
		reValidateMode: "onChange",
		mode: "onChange",
	});
	const {
		error,
		isError,
		isPending,
		isSuccess,
		data: response,
		mutateAsync: submitData,
	} = usePostData();
	console.log(response);
	// Apply correct type to successfully retrieved data
	const data = response?.data;
	console.log(data);
	console.log("error", isError, "success", isSuccess);

	// Handle Form Submission
	const onSubmit: SubmitHandler<Passwords> = async (passwords: Passwords) => {
		// Upload user data
		const res = await submitData({
			endpoint: "/api/v1/auth/signup",
			postData: {
				...user,
				password: passwords.password,
			},
		});
		console.log("RES", res);

		if (isSuccess) {
			// Display popup
			setOpenPopup({
				...openPopup,
				state: true,
				message: data.message,
				type: "success",
			});
			// Remove popup
			setTimeout(() => setOpenPopup({ ...openPopup, state: false }), 4000);
			// console.log(data);
			console.log({ ...user, password: passwords.password });
			router.push("/emailVerification");
		}
		if (isError) {
			const e = error as unknown as FailedSignupResponse;
			// Display error popup
			setOpenPopup({
				...openPopup,
				state: true,
				message: e.message,
				type: "error",
			});
			// Hide error popup
			setTimeout(() => setOpenPopup({ ...openPopup, state: false }), 4000);
			console.log(e);
			throw e;
		}
	};
	// Cancel sign up
	const handleCancel = () => {
		dispatch(resetProfileData());
	};

	return (
		<div
			ref={containerRef}
			className="bg-off-white flex flex-col items-center justify-start py-8 max-xs:px-8 px-16 h-screen max-md:mt-8 max-md:w-full md:overflow-y-scroll"
		>
			<AlertPopup
				container={containerRef.current}
				open={openPopup.state}
				severity={openPopup.type}
				title={openPopup.type == "success" ? "Success" : "Error"}
				message={
					openPopup.type == "success"
						? "Account created successfully."
						: "Sorry an error occurred, try again."
				}
			/>

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
				{/* Password Input */}
				<div className="">
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
						type="password"
						placeholder="**************"
						autoComplete="on"
						{...register("password")}
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
				<div className="">
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
						type="password"
						placeholder="**************"
						autoComplete="current-password"
						{...register("confirmPassword")}
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
					>
						{isPending ? <CircularProgress /> : <span> Create Account</span>}
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
