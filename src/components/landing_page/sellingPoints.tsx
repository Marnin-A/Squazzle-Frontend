import Image from "next/image";
import React from "react";

export default function SellingPoints() {
	return (
		<section className="sellingPoints-bg max-md:px-10 max-xs:px-5 py-14 bg-primary-green text-white flex items-center justify-center gap-40 md:h-[80dvh]">
			<Image
				src="/Selling-Points.png"
				alt="Diagonal Arrow"
				width={385}
				height={507}
				placeholder="empty"
				priority={false}
				className="w-3/12 h-auto min-w-[285px] max-md:hidden md:block"
			/>
			<aside className="flex flex-col md:w-1/3 gap-8">
				<h1 className="text-4xl font-bold">
					What makes us different from others
				</h1>
				<p>
					We have more than five years of experience to provide suitable housing
					for you to live in later, we also ensure that all the housing we
					provide a conducive environment with basic housing facilities that
					have met the standards, so you;’ll feel satisfied when you use
					squazzle.
				</p>
				<div className="flex items-center justify-between max-xs:flex-col max-sm:gap-12 max-sm:text-center">
					<span className="w-16">
						<div className="text-4xl font-semibold">5</div>{" "}
						<div>Years of experience</div>
					</span>
					<span className="w-16">
						<div className="text-4xl font-semibold ">250</div>{" "}
						<div>Apartments Listed</div>
					</span>
					<span className="w-16">
						<div className="text-4xl font-semibold">10+</div>{" "}
						<div>Awards gained</div>
					</span>
				</div>
			</aside>
		</section>
	);
}
