import React from "react";

export default function ListPropertyCard() {
	return (
		<section className="px-16 py-8">
			<div className="flex">
				<div className="w-1/2 min-h-[400px] rounded-l-2xl listProperty-bg"></div>
				<div className="bg-primary-dark-green w-1/2 px-16 text-white flex flex-col justify-center gap-4 rounded-r-2xl">
					<h2 className="text-5xl font-bold">List your property with us</h2>
					<p className="text-off-white">
						Space sharing earns you extra income and opens up new opportunities
					</p>
					<button className="bg-primary-green py-4 px-6 rounded-lg w-max">
						Learn more
					</button>
				</div>
			</div>
		</section>
	);
}
