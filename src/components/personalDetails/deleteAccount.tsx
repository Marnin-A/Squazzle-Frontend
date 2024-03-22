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
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ErrorMessage } from "@hookform/error-message";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { useDeleteAccountMutation } from "@/app/redux/services/apiServices";
import { Checkbox } from "../ui/checkbox";
import LoadingSpinner from "../loadingSpinner";

export default function DeleteAccount() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{ email: string }>({
		criteriaMode: "all",
	});
	const [acknowledgeDeletion, setAcknowledgeDeletion] = React.useState(false);
	const [deleteAccount, { isLoading }] = useDeleteAccountMutation();
	const onSubmit: SubmitHandler<{ email: string }> = (data) => {};
	return (
		<div>
			<Dialog>
				<DialogTrigger className="max-mlg:mt-6">
					<div className="bg-none border-none hover:bg-slate-100">
						<h3 className="font-semibold text-lg mb-2 text-left text-error">
							Delete Account
						</h3>
						<div>Permanently delete your account and all your content</div>
					</div>
				</DialogTrigger>
				<DialogContent className="py-10 flex flex-col gap-4">
					<DialogHeader className="text-left font-normal w-full px-6">
						<DialogTitle className="text-3xl">
							Delete your squazzle account
						</DialogTitle>
					</DialogHeader>
					<DialogDescription className="flex flex-col gap-6 px-6">
						<p>
							We’re sorry to see you go. Once your account is deleted, the
							profile and listings associated with this account will disappear.
							You won’t be able to access your account information.
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
									I understand that deleting my account is permanent and cannot
									be undone
								</p>
							</div>
							<div className="flex items-center justify-between">
								<div
									className="w-max hover:bg-error hover:text-light-red bg-white text-error outline outline-error font-bold py-2 px-4 rounded"
									// onClick={handleCancel}
								>
									<DialogPrimitive.Close>Cancel</DialogPrimitive.Close>
								</div>
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
	);
}
