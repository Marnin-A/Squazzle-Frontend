import Link from "next/link";
import React from "react";

export default function NotFound() {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center gap-6">
			<h2 className="text-2xl font-bold">Page Not Found</h2>
			<p className="text-lg">Could not find requested resource</p>
			<Link
				href="/"
				className="py-3 px-2 text-white text-lg font-semibold bg-primary-mid-green rounded-md"
			>
				Back to homepage.
			</Link>
		</div>
	);
}
