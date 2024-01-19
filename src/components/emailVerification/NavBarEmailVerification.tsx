import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function EmailVerificationNavBar() {
	return (
		<nav className="bg-white flex w-full h-max items-center justify-start py-4 px-12">
			<Link href={"/"} className="hover:cursor-pointer">
				<Image
					src="/Mobile-logo.svg"
					alt="Mobile Squazzle Logo"
					width={177}
					height={57}
					placeholder="empty"
					priority={false}
					className="w-min h-auto"
				/>
			</Link>
		</nav>
	);
}
