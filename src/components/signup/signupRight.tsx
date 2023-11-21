"use client";

import React from "react";
import { Phone } from "react-telephone";

export default function SignupRight() {
	return (
		<div className="bg-off-white flex flex-col items-center justify-center px-16 h-screen max-sm:mt-16 max-sm:w-full overflow-y-scroll">
			<div className="flex flex-col items-start w-full">
				<h1 className=" text-2xl leading-8 font-bold">
					Create a squazzle profile
				</h1>
				<h3 className="text-sm">It&apos;s quick and simple.</h3>
			</div>

			<form className=" bg-transparent w-full pt-6 flex flex-col gap-6">
				{/* First Name Input */}
				<div className="">
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="username"
					>
						First Name <sup className=" text-red-600">*</sup>
					</label>
					<input
						className="h-12 text-xl shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline placeholder:pl-4"
						id="username"
						type="text"
						placeholder="Albert"
					/>
				</div>
				{/* last Name Input */}
				<div className="">
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="username"
					>
						Last Names <sup className=" text-red-600">*</sup>
					</label>
					<input
						className="h-12 text-xl shadow-sm appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline focus:shadow-outline placeholder:pl-4"
						id="username"
						type="text"
						placeholder="Einstein"
					/>
				</div>
				{/* Password Input */}
				<div className="">
					<label
						className="block text-gray-700 text-sm mb-2"
						htmlFor="password"
					>
						Password <sup className=" text-red-600">*</sup>
					</label>
					<input
						className=" h-12 text-xl shadow-sm appearance-none border border-red-500 rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline focus:shadow-outline placeholder:pl-4"
						id="password"
						type="password"
						placeholder="************"
					/>
					<p className="text-red-500 text-xs italic">
						Please choose a password
					</p>
				</div>
				{/* Phone Number Input */}
				<div className="bg-white h-12 flex items-center justify-center rounded-lg shadow-sm focus:outline">
					<Phone defaultCountry="ng">
						<Phone.Country className="w-[25%] ml-[2%] mr-[2%] outline-none text-base border-r border-neutral-600" />
						<Phone.Number
							placeholder="801 234 5678"
							className="w-[70%] placeholder:p-4 outline-none text-xl"
						/>
					</Phone>
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
