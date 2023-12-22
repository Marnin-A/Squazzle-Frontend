import React from "react";
import Image from "next/image";

export default function ExploreNow() {
	return (
		<section className="flex items-center justify-center p-16 gap-12">
			<div className="flex flex-col gap-9 w-1/2">
				<h2 className="text-4xl font-bold">
					The most trusted Real Estate website
				</h2>
				<p className="text-primary-green">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
					velit interdum, ac aliquet odio mattis.
				</p>
				<button className="w-max p-4 rounded-xl bg-primary-green text-off-white font-semibold">
					Explore Now
				</button>
			</div>
			<Image
				src={"/Explore-Now-background.png"}
				alt={"An ultra modern house"}
				width={598}
				height={571}
				placeholder="empty"
				priority={false}
				className="max-w-1/2 h-auto aspect-square"
			/>
		</section>
	);
}
