"use client";
import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { useDeleteAccountMutation } from "@/app/redux/services/apiServices";
import { Checkbox } from "../ui/checkbox";
import LoadingSpinner from "../loadingSpinner";

export default function UserDetails() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{ email: string }>({
		criteriaMode: "all",
	});
	const [userData, setUserData] = React.useState({
		name: "Zhara Doe",
		email: "zharadoe@gmail.com",
		occupation: "Real Estate Manager",
		gender: "female",
		address: "No 49 East-End, Jos, Plateau State, Nigeria.",
		phoneNumber: "08123181961",
		NIN: "75312208056610",
		about:
			"Lorem ipsum is simply a dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.",
		verified: true,
	});
	const [acknowledgeDeletion, setAcknowledgeDeletion] = React.useState(false);
	const [deleteAccount, { isLoading }] = useDeleteAccountMutation();
	const onSubmit: SubmitHandler<{ email: string }> = (data) => {};
	return (
		<section className="pt-9 p-16">
			<h1 className="font-semibold text-2xl">Personal Details</h1>
			<p className="text-primary-light-grey">
				Update your personal info and how we can reach you.
			</p>
			<div className="flex flex-col gap-6 my-6">
				<div>
					<h3 className="font-semibold text-lg mb-2">Name</h3>
					<div>{userData.name}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">Email Address</h3>
					<div className="flex gap-2 items-center">
						{userData.email}
						{userData.verified && (
							<span className="px-1 py-0.5 text-white bg-[#3D7D50] rounded-sm">
								Verified
							</span>
						)}
					</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">Occupation</h3>
					<div>{userData.occupation}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">Gender</h3>
					<div>{userData.gender}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">Address</h3>
					<div>{userData.address}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">Phone Number</h3>
					<div>{userData.phoneNumber}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">NIN</h3>
					<div>{userData.NIN}</div>
				</div>

				<div>
					<h3 className="font-semibold text-lg mb-2">About Me</h3>
					<div>{userData.about}</div>
				</div>
			</div>
			<hr className="my-6" />

			<div>
				<Dialog>
					<DialogTrigger className="max-mlg:mt-6">
						<button className="bg-none border-none hover:bg-primary-lightgreen">
							<h3 className="font-semibold text-lg mb-2 text-left text-error">
								Delete Account
							</h3>
							<div>Permanently delete your account and all your content</div>
						</button>
					</DialogTrigger>
					<DialogContent className="py-10 flex flex-col gap-4">
						<DialogHeader className="text-left font-normal w-full px-6">
							<DialogTitle className="text-3xl">
								Delete your squazzle account
							</DialogTitle>
						</DialogHeader>
						<DialogDescription
							typeof="div"
							className="flex flex-col gap-6 px-6"
						>
							<p>
								We’re sorry to see you go. Once your account is deleted, the
								profile and listings associated with this account will
								disappear. You won’t be able to access your account information.
							</p>
							<p>To confirm,enter your password below:</p>
							<form onSubmit={handleSubmit(onSubmit)}>
								<input
									className={
										"h-12 text-xl appearance-none border border-primary-grey rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight placeholder:pl-4" +
										(errors.email
											? " outline-error"
											: " focus:outline-success focus:shadow-outline")
									}
									id="email"
									type="email"
									placeholder="Email Address"
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
								<div className="flex justify-between gap-2 mb-8">
									<Checkbox
										key={"acknowledgeDeletion"}
										id="acknowledgeDeletion"
										className="w-[18px] h-[18px]"
										onClick={() => setAcknowledgeDeletion(!acknowledgeDeletion)}
									/>
									<p>
										I understand that deleting my account is permanent and
										cannot be undone
									</p>
								</div>
								<div className="flex items-center justify-between">
									<button
										className="w-max hover:bg-error hover:text-light-red bg-white text-error outline outline-error font-bold py-2 px-4 rounded"
										type="button"
										// onClick={handleCancel}
									>
										Cancel
									</button>
									<button
										className="w-max hover:bg-error hover:text-light-red bg-light-red text-error font-bold py-2 px-4 rounded"
										type="submit"
										formTarget="sigIn"
										disabled={isLoading || acknowledgeDeletion}
									>
										<span className="flex items-center justify-center gap-2">
											{isLoading && <LoadingSpinner className="w-5" />}Delete
										</span>
									</button>
								</div>
							</form>
						</DialogDescription>
					</DialogContent>
				</Dialog>
			</div>
		</section>
	);
}
