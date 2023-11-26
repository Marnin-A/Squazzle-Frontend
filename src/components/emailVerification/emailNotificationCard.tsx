import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setContinueBtnClicked } from "@/app/store/slices/emailVerificationSlice";

export default function EmailNotificationCard({
	userEmail,
}: {
	userEmail: string;
}) {
	const dispatch = useDispatch();
	const handleClick = () => {
		dispatch(setContinueBtnClicked());
	};
	return (
		<div className="bg-white flex flex-col items-center justify-center w-1/3 aspect-square p-10 gap-8 text-center max-sm:justify-start max-sm:w-full max-sm:h-full max-sm:aspect-auto  max-lg:w-1/2">
			<Image
				src="/email-icon.svg"
				alt="email icon"
				height={88}
				width={88}
				priority={false}
				className="w-min h-auto"
			/>
			<h1 className="text-3xl">Email has been sent!</h1>
			<p>
				We have sent a 6 digit PIN to
				<span className="text-primary-green"> {userEmail}</span>. Click on the
				button to confirm the validity of your email address.
			</p>
			<button
				className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-2 px-4 rounded"
				type="submit"
				formTarget="signup"
				onClick={handleClick}
			>
				Continue
			</button>
		</div>
	);
}
