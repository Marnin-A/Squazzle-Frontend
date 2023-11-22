"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Form, SubmitHandler } from "react-hook-form";
import { Phone } from "react-telephone";
import { CreateProfile, setProfileData } from "@/app/store/slices/signUpSlice";
import { RootState } from "@/app/store/store";

export default function SignupRight() {
	const dispatch = useDispatch();
	const user = useSelector((state: RootState) => state.CreateProfile);

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<CreateProfile>();
	// const onSubmit: SubmitHandler<IFormInput> = async (data) => {
	// 	const url = process.env.NEXT_PUBLIC_SERVER_URL as RequestInfo;
	// 	try {
	// 		const result = await fetch(url + "/api/v1/auth/signup",{
	// 			method: "POST",
	// 			body: JSON.stringify(data),
	// 		});
	// 		const response = await result.json();
	// 		console.log(response);
	// 	} catch (error) {

	// 		throw error;
	// 	}
	// };
	const onSubmit: SubmitHandler<CreateProfile> = async (
		data: CreateProfile
	) => {
		dispatch(
			setProfileData({
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				phoneNumber: data.phoneNumber,
			})
		);
	};
	// console.log(user);
	return (
		<div className="bg-off-white flex flex-col items-center justify-center px-16 h-screen max-sm:mt-16 max-sm:w-full overflow-y-scroll">
			{/* Header */}
			<div className="flex flex-col items-start w-full">
				<h1 className=" text-2xl leading-8 font-bold">
					Create a squazzle profile
				</h1>
				<h3 className="text-sm">It&apos;s quick and simple.</h3>
			</div>
			{/* Form */}
			<form
				className=" bg-transparent w-full pt-6 flex flex-col gap-6"
				onSubmit={handleSubmit(onSubmit)}
				id="signup"
			>
				{/* First Name Input */}
				<div className="">
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="firstName"
					>
						First Name <sup className=" text-red-600">*</sup>
					</label>
					<input
						className="h-12 text-xl shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline placeholder:pl-4"
						id="firstName"
						type="text"
						placeholder="Albert"
						autoComplete="first-name"
						{...register("firstName", {
							required: true,
							maxLength: 20,
							pattern: /^[A-Za-z]+$/i,
						})}
					/>
					{errors.firstName && <p role="alert">{errors.firstName.message}</p>}
				</div>
				{/* last Name Input */}
				<div className="">
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="lastName"
					>
						Last Names <sup className=" text-red-600">*</sup>
					</label>
					<input
						className="h-12 text-xl shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline placeholder:pl-4"
						id="lastName"
						type="text"
						placeholder="Einstein"
						autoComplete="on"
						{...register("lastName", {
							required: true,
							maxLength: 20,
							pattern: /^[A-Za-z]+$/i,
						})}
					/>
					{errors.lastName && <p role="alert">{errors.lastName.message}</p>}
				</div>
				{/* Email Input */}
				<div className="">
					<label className="block text-gray-700 text-sm mb-2" htmlFor="email">
						Email <sup className=" text-red-600">*</sup>
					</label>
					<input
						className=" h-12 text-xl shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline placeholder:pl-4"
						id="email"
						type="email"
						placeholder="user@gmail.com"
						autoComplete="on"
						{...register("email", {
							required: true,
							maxLength: 20,
							pattern:
								/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						})}
					/>
					{errors.email && <p role="alert">{errors.email.message}</p>}
				</div>
				{/* Phone Number Input */}
				<div className="bg-white h-12 flex items-center justify-center rounded-lg shadow-sm focus:outline">
					<Phone defaultCountry="ng">
						<Phone.Country className="w-[25%] ml-[2%] mr-[2%] outline-none text-base border-r border-neutral-600" />
						<Phone.Number
							placeholder="801 234 5678"
							type="number"
							autoComplete="on"
							className="w-[70%] placeholder:p-4 outline-none text-xl"
							{...register("phoneNumber", {
								required: true,
								maxLength: 20,
							})}
						/>
					</Phone>
				</div>
				{/* Continue Button */}
				<div className="flex items-center justify-center">
					<button
						className="w-full bg-primary-lightgreen text-primary-green hover:bg-primary-green hover:text-white font-bold py-2 px-4 rounded"
						type="submit"
						formTarget="signup"
					>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
}
