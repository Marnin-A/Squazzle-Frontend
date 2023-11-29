import React from "react";
import Image from "next/image";

export default function SignInLeft() {
	return (
		<div className="h-screen w-1/2 flex flex-col signIn-bg py-8 px-12 gap-10 text-white max-md:w-full max-md:h-max max-md:drop-shadow max-md:bg-off-white">
			<Image
				src="/RedTop-Logo.svg"
				alt="Squazzle Logo"
				width={177}
				height={57}
				priority={false}
				className="w-min h-auto md:visible max-md:hidden"
			/>
			<Image
				src="/Mobile-logo.svg"
				alt="Mobile Squazzle Logo"
				width={177}
				height={57}
				priority={false}
				className="w-min h-auto max-md:visible md:hidden"
			/>
			<div className="max-md:hidden">
				<h1 className="font-semibold text-3xl leading-[45px]">
					Welcome to Squazzle
				</h1>
				<p className="text-base leading-7 font-normal">
					Lets help you find a home you&apos;ll love
				</p>
			</div>
		</div>
	);
}
