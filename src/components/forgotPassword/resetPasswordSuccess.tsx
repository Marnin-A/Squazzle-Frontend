import React, { Suspense } from "react";
import Image from "next/image";
import { useRouter } from "next13-progressbar";
import CircularProgress from "@mui/material/CircularProgress";

export default function ResetPasswordSuccess() {
	const router = useRouter();
	const [btnClicked, setBtnClick] = React.useState(false);

	const handleClick = () => {
		setBtnClick(true);
		router.push("/signin");
	};

	return (
		<Suspense fallback={<CircularProgress />}>
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
				<h1 className="text-3xl">Password reset successful!</h1>
				<p>
					Your password has been changed. You can now sign in using your new
					password.
				</p>
				<button
					className="w-full hover:bg-primary-lightgreen hover:text-primary-green bg-primary-green text-white font-bold py-2 px-4 rounded"
					type="submit"
					formTarget="signup"
					onClick={handleClick}
				>
					{btnClicked ? (
						<CircularProgress color="inherit" />
					) : (
						<span>Proceed to sign in</span>
					)}
				</button>
			</div>
		</Suspense>
	);
}
