import React from "react";

export default function ListPropertyCard() {
	return (
		<section className="px-5 py-8 sm:px-16">
			<div className="flex max-md:flex-col">
				<div className="min-h-[400px] listProperty-bg max-md:rounded-t-2xl md:w-1/2 md:rounded-l-2xl"></div>
				<div className="bg-primary-dark-green px-16 text-white flex flex-col justify-center gap-4 max-md:rounded-b-2xl max-md:p-8 max-md:items-center md:w-1/2 md:rounded-r-2xl">
					<h2 className="text-5xl font-bold">List your property with us</h2>
					<p className="text-off-white">
						Space sharing earns you extra income and opens up new opportunities
					</p>
					<button className="bg-primary-green py-4 px-6 mt-6 rounded-lg w-max">
						Learn more
					</button>
				</div>
			</div>
		</section>
	);
}
