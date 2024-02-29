import * as React from "react";
import Image from "next/image";
import Link from "next/link";

export default function signUpLeft() {
	return (
		<div className="h-screen max-md:h-max max-md:drop-shadow max-md:bg-off-white flex flex-col auth-bg py-8 px-12 gap-10 text-white">
			<Link href="/">
				<Image
					src="/RedTop-Logo.svg"
					alt="Squazzle Logo"
					width={177}
					height={57}
					placeholder="empty"
					priority={false}
					className="w-min h-auto md:visible max-md:hidden"
				/>
				<Image
					src="/Mobile-logo.svg"
					alt="Mobile Squazzle Logo"
					width={177}
					height={57}
					placeholder="empty"
					priority={false}
					className="w-min h-auto max-md:visible md:hidden"
				/>
			</Link>
			<div className="max-md:hidden">
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
