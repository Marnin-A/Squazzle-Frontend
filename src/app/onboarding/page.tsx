import Link from "next/link";
import React from "react";

export default function Page() {
	return (
		<div className="onboarding-bg flex flex-col justify-center items-center px-12 py-16	">
			<div className="flex flex-col gap-6 justify-center items-center text-off-white mb-20">
				<h1 className="text-[54px]  font-semibold">
					Find that perfect home with Squazzle.
				</h1>
				<p className="text-3xl">
					Get the best accommodation and list your property for the right
					prices.
				</p>
				<h3 className="text-3xl font-semibold">
					So what would you like to do?
				</h3>
			</div>
			<div className="flex items-center justify-center gap-16 w-full">
				<Link
					href={"/manageAccount/myListing/editProperty?view=overview"}
					className="w-max py-5 px-24 bg-primary-lightgreen text-primary-dark-green text-xl font-bold rounded-2xl"
				>
					List accommodation
				</Link>
				<Link
					href="/accommodations"
					className="w-max py-5 px-24 bg-primary-lightgreen text-primary-dark-green text-xl font-bold rounded-2xl"
				>
					Browse accommodation
				</Link>
			</div>
		</div>
	);
}
