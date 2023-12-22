"use client";
import { useNewsletterSignupMutation } from "@/app/redux/services/authServices";
import { ErrorMessage } from "@hookform/error-message";
import CircularProgress from "@mui/material/CircularProgress";
import { Instagram, Facebook, Twitter, LinkedIn } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Footer() {
	const [signupToNewsletter, { data, isLoading }] =
		useNewsletterSignupMutation();
	// Form validation from React Hook Form
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<{ email: string }>({
		criteriaMode: "all",
	});
	return (
		<footer className="mt-auto px-12 py-12 border-t border-t-slate-200">
			<div className="flex items-start justify-between flex-wrap max-md:gap-8 max-sm:justify-center text-sm px-20 pb-12 text-primary-grey border-b-2 border-b-slate-300">
				<div className="flex flex-col gap-4 min-w-[150px]">
					<h3 className="font-semibold">Company</h3>
					<Link href="/about-us">About us</Link>
					<Link href="/careers">Careers</Link>
					<Link href="/contact-us">Contact us</Link>
				</div>
				<div className="flex flex-col gap-4 min-w-[150px]">
					<h3 className="font-semibold">Products</h3>
					<Link href="/about-us">Become a partner</Link>
					<Link href="/careers">List your property</Link>
					<Link href="/contact-us">Deals and Promo</Link>
				</div>
				<div className="flex flex-col gap-4 min-w-[150px]">
					<h3 className="font-semibold">Useful Links</h3>
					<Link href="/about-us">FAQ</Link>
					<Link href="/careers">Blog</Link>
					<Link href="/contact-us">Help and Support</Link>
				</div>
				{/* Email Input */}
				<form
					className=" bg-transparent w-1/4 min-w-[150px] max-md:flex-grow gap-4 flex flex-col"
					name="subscribe"
					onSubmit={handleSubmit(({ email }) => {
						signupToNewsletter({ email: email });
					})}
				>
					<div className="relative w-full gap-4 flex flex-col">
						<h3 className="font-semibold">Newsletter</h3>
						<p>
							Subscribe to our newsletter now to get the best deals for you.
						</p>
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
					</div>
					<button
						className="w-full py-3 px-4 rounded-lg hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold"
						type="submit"
						formTarget="subscribe"
					>
						{isLoading ? (
							<CircularProgress size={25} color="inherit" />
						) : (
							<span>Subscribe!</span>
						)}
					</button>
				</form>
			</div>
			<div className="self-start flex max-sm:flex-col max-sm:gap-6 justify-between items-center w-full py-5 mlg:px-20 px-8">
				<Image
					src="/Mobile-logo.svg"
					alt="Mobile Squazzle Logo"
					width={177}
					height={57}
					placeholder="empty"
					priority={false}
					className="w-min h-auto"
				/>
				<div className="flex max-sm:flex-col gap-6">
					<Link href="/privacy-policy">Privacy Policy</Link>
					<Link href="/terms-and-conditions">Terms and Conditions</Link>
				</div>
				<div className="flex items-center gap-4">
					<span className="border border-slate-300 p-2 rounded-full bg-transparent">
						<Instagram />
					</span>
					<span className="border border-slate-300 p-2 rounded-full bg-transparent">
						<Facebook />
					</span>
					<span className="border border-slate-300 p-2 rounded-full bg-transparent">
						<Twitter />
					</span>
					<span className="border border-slate-300 p-2 rounded-full bg-transparent">
						<LinkedIn />
					</span>
				</div>
			</div>
		</footer>
	);
}
