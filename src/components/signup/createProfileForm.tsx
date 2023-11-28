"use client";
import React, { useRef } from "react";
import { Phone, getCountryByIso } from "react-telephone";
import { useDispatch } from "react-redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import {
	CreateProfileType,
	setProfileData,
} from "@/app/redux/slices/signUpSlice";

export default function UserCreateProfileForm() {
	const dispatch = useDispatch();
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<CreateProfileType>({
		criteriaMode: "all",
	});
	const [countryCode, setCountryCode] = React.useState<string>("");
	const countryCodeInput = React.useRef<HTMLSelectElement>(null);

	function addCountryCode(
		countryCodeInput: React.RefObject<HTMLSelectElement>
	) {
		setCountryCode(
			`+${getCountryByIso(countryCodeInput.current?.value as any)[3]}`
		);
	}

	// Update user data in redux
	const onSubmit: SubmitHandler<CreateProfileType> = async (
		data: CreateProfileType
	) => {
		// Set user data in redux
		dispatch(
			setProfileData({
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				phoneNumber: countryCode + data.phoneNumber,
			})
		);
	};

	return (
		<div className="bg-off-white flex flex-col items-center justify-start py-8 px-16 max-md:mb-10 max-xs:px-8 h-screen max-md:mt-8 max-md:w-full md:overflow-y-scroll">
			{/* Header */}
			<div className="flex flex-col items-start w-full">
				<h1 className=" text-2xl leading-8 font-bold">
					Create a squazzle profile
				</h1>
				<h3 className="text-md">It&apos;s quick and simple.</h3>
			</div>
			{/* Form */}
			<form
				className=" bg-transparent w-full pt-6 flex flex-col gap-6"
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* First Name Input */}
				<div className="relative">
					<label
						className="block text-gray-700 text-md mb-2"
						htmlFor="firstName"
					>
						First Name <sup className="text-error">*</sup>
					</label>
					<input
						className={
							"h-12 text-xl shadow-md appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight  placeholder:pl-4" +
							(errors.firstName?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="firstName"
						type="text"
						placeholder="Zhara"
						autoComplete="first-name"
						{...register("firstName", {
							required: "First Name is required",
							pattern: {
								value: /^[A-Za-z]+$/i,
								message: "First Name is required",
							},
							maxLength: {
								value: 20,
								message: "First name can't be more than 20 chars",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="firstName"
						render={({ message }) => (
							<p className="text-xs text-error absolute bottom-[-22%]">
								{message}
							</p>
						)}
					/>
				</div>
				{/* last Name Input */}
				<div className="relative">
					<label
						className="block text-gray-700 text-md mb-2"
						htmlFor="lastName"
					>
						Last Name <sup className=" text-error">*</sup>
					</label>
					<input
						className={
							"h-12 text-xl shadow-md appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight placeholder:pl-4" +
							(errors.lastName?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
						id="lastName"
						type="text"
						placeholder="Doe"
						autoComplete="on"
						{...register("lastName", {
							required: "Last Name is required",
							pattern: {
								value: /^[A-Za-z]+$/i,
								message: "Last Name is required",
							},
							maxLength: {
								value: 20,
								message: "Last name can't be more than 20 chars",
							},
						})}
					/>
					<ErrorMessage
						errors={errors}
						name="lastName"
						render={({ message }) => (
							<p className="text-xs text-error absolute bottom-[-22%]">
								{message}
							</p>
						)}
					/>
				</div>
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
				{/* Phone Number Input */}
				<div className="relative">
					<label className="block text-gray-700 text-md mb-2" htmlFor="email">
						Phone Number <sup className=" text-error">*</sup>
					</label>
					<div
						className={
							"bg-white h-12 flex items-center justify-center rounded-lg shadow-md" +
							(errors.phoneNumber?.type === "required"
								? " outline-error"
								: " focus:outline-success focus:shadow-outline")
						}
					>
						<Phone defaultCountry="ng">
							<Phone.Country
								value={countryCode}
								ref={countryCodeInput}
								className="w-[35%] md:w-[28%] ml-[2%] mr-[2%] outline-none text-base border-r border-neutral-600"
							/>
							<Phone.Number
								placeholder="Number"
								type="number"
								autoComplete="on"
								className="w-[60%]  outline-none text-xl"
								{...register("phoneNumber", {
									required: "Phone number is required",
									maxLength: {
										value: 10,
										message: "Phone number can't be more than 10 chars",
									},
									onBlur() {
										addCountryCode(countryCodeInput);
									},
								})}
							/>
							<ErrorMessage
								errors={errors}
								name="phoneNumber"
								render={({ message }) => (
									<p className="text-xs text-error absolute bottom-[-22%]">
										{message}
									</p>
								)}
							/>
						</Phone>
					</div>
				</div>
				{/* Continue Button */}
				<div className="flex items-center justify-center">
					<button
						className="w-full bg-primary-lightgreen text-primary-green hover:bg-primary-green hover:text-white font-bold py-2 px-4 rounded"
						type="button"
					>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
}
