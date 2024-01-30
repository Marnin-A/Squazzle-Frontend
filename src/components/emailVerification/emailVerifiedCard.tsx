import React from "react";
import Image from "next/image";
import { useRouter } from "next13-progressbar";
import { CircularProgress } from "@mui/material";

export default function EmailVerifiedCard() {
	const router = useRouter();

	const handleClick = () => {
		router.push("/signin");
	};

	return (
		<React.Suspense fallback={<CircularProgress />}>
			<div className="bg-white flex flex-col items-center justify-center w-1/3 aspect-square p-10 gap-8 text-center max-sm:justify-start max-sm:w-full max-sm:h-full max-sm:aspect-auto  max-lg:w-1/2">
				<Image
					src="/success-tick.svg"
					alt="Success icon"
					height={73.33}
					width={73.33}
					placeholder="empty"
					priority={false}
					className="w-min h-auto"
				/>
				<h1 className="text-3xl">Verification Successful!</h1>
				<p>
					Your email address has been verified. You can start enjoying all the
					amazing features of Squazzle.
				</p>
				<button
					className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-2 px-4 rounded"
					type="submit"
					formTarget="signup"
					onClick={handleClick}
				>
					Proceed to sign in
				</button>
			</div>
		</React.Suspense>
	);
}
