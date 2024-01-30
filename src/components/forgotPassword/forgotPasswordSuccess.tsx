import React from "react";
import Image from "next/image";
import ManageSearchParams from "@/hooks/updateSearchParams";
import { useRouter } from "next13-progressbar";

export default function ForgotPasswordSuccess() {
	const router = useRouter();
	const { updateURLParam } = ManageSearchParams();

	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/3 aspect-square p-10 gap-4 text-center max-sm:justify-start max-sm:w-full max-sm:h-full max-sm:aspect-auto  max-lg:w-1/2">
			<Image
				src="/email-icon.svg"
				alt="email icon"
				height={73.33}
				width={73.33}
				placeholder="empty"
				priority={false}
				className="w-min h-auto"
			/>
			<h1 className="text-3xl">Email has been sent!</h1>
			<p>
				Please check your inbox and copy the received code to reset password
			</p>

			<button
				className="w-full py-3 px-4 rounded-lg hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold"
				type="button"
				onClick={() => updateURLParam("view", "enterOTP")}
			>
				Continue
			</button>
			<button
				className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-white text-primary-green outline outline-primary-green font-bold py-2 px-4 rounded"
				type="button"
				onClick={() => router.push("/forgotPassword")}
			>
				Resend Code
			</button>
		</div>
	);
}
