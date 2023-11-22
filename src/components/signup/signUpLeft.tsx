import * as React from "react";
import Image from "next/image";

export default function signUpLeft() {
	return (
		<div className="h-screen max-sm:h-max max-sm:drop-shadow max-sm:bg-off-white flex flex-col auth-bg py-8 px-12 gap-10 text-white">
			<Image
				src="/RedTop-Logo.svg"
				alt="Squazzle Logo"
				width={177}
				height={57}
				className="sm:visible max-sm:hidden"
			/>
			<Image
				src="/Mobile-logo.svg"
				alt="Mobile Squazzle Logo"
				width={177}
				height={57}
				className="max-sm:visible sm:hidden"
			/>
			<div className="max-sm:hidden">
				<h1 className="font-semibold text-3xl leading-[45px]">
					Find that perfect home with Squazzle.
				</h1>
				<p className="text-base leading-7 font-normal">
					We&apos;ll get you set up so you can check out affordable housing
				</p>
			</div>
		</div>
	);
}
