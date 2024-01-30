import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center gap-6">
			<h2 className="text-4xl font-bold">Page Not Found</h2>
			<p className="text-2xl">Could not find requested resource</p>
			<Link
				href="/"
				className="py-6 px-4 text-white text-2xl font-semibold bg-primary-mid-green rounded-md"
			>
				Back to homepage
			</Link>
		</div>
	);
}
