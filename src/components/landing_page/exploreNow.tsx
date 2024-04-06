"use client";
import React from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "next/link";

export default function ExploreNow() {
	const matches = useMediaQuery("(min-width:768px)");

	return (
		<section className="flex items-center justify-center gap-12 p-5 sm:p-16  max-lg:flex-col">
			<div className="flex flex-col gap-9 w-full lg:w-1/2">
				<h2 className="text-4xl font-bold">
					The most trusted Real Estate website
				</h2>
				<p className="text-primary-green block md:hidden">
					We ensure that what you see is what you get. Our displayed property
					have been reviewed and verified
				</p>
				<p className="text-primary-green hidden md:block">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
					vulputate libero et velit interdum, ac aliquet odio mattis.Lorem ipsum
					dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et
					velit interdum, ac aliquet odio mattis.
				</p>
				<Link
					href={"/accomodations"}
					className="w-max p-4 rounded-xl bg-primary-green text-off-white font-semibold hidden md:block"
				>
					Explore Now
				</Link>
			</div>
			<Image
				src={
					matches
						? "/Explore-Now-background.png"
						: "/Explore-Now-background-mobile.png"
				}
				alt={"An ultra modern house"}
				width={matches ? 598 : 349}
				height={571}
				placeholder="empty"
				priority={false}
				className="max-w-1/2 lg:w-auto h-auto md:aspect-square"
			/>
			<button className="w-full p-4 rounded-xl bg-primary-green text-off-white font-semibold block md:hidden">
				Explore Now
			</button>
		</section>
	);
}
