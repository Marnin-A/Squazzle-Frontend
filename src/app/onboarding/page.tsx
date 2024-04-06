import Link from "next/link";
import React from "react";

export default function Page() {
	return (
		<div className="onboarding-bg flex flex-col justify-center items-center px-12 py-16	text-center">
			<div className="flex flex-col gap-6 justify-center items-center text-off-white md:mb-20 mb-6">
				<h1 className="md:text-[54px] md:font-semibold font-bold text-4xl leading-relaxed">
					Find that perfect home with Squazzle.
				</h1>
				<p className="md:text-3xl text-xl">
					Get the best accommodation and list your property for the right
					prices.
				</p>
				<h3 className="md:text-3xl font-semibold text-xl">
					So what would you like to do?
				</h3>
			</div>
			<div className="flex items-center flex-wrap justify-center md:gap-16 gap-6 w-full">
				<Link
					href={"/manageAccount/myListing/editProperty?view=overview"}
					className="w-max md:py-5 md:px-24 py-4 px-8 bg-primary-lightgreen text-center text-primary-dark-green md:text-xl text-lg font-bold rounded-2xl"
				>
					List accommodation
				</Link>
				<Link
					href="/accommodations"
					className="w-max md:py-5 md:px-24 py-4 px-6 bg-primary-lightgreen text-center text-primary-dark-green md:text-xl text-lg font-bold rounded-2xl"
				>
					Browse accommodation
				</Link>
			</div>
		</div>
	);
}
