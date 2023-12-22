"use client";
import Image from "next/image";
import { cn as classNames } from "@/lib/utils";
import * as React from "react";
import { DotProps } from "react-multi-carousel/lib/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedCard, { featureDetails } from "../landing_page/featuredCard";

export default function CarouselComponent({
	details,
}: {
	details: Array<featureDetails>;
}) {
	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<div className="pb-5">
			<Carousel
				showDots
				ssr
				minimumTouchDrag={10}
				arrows={false}
				swipeable={true}
				responsive={responsive}
				className="flex gap-5 mx-20 p-2 pt-8 pb-16 outline-none"
			>
				{details.map((details) => (
					<FeaturedCard
						key={details.title}
						imageUrl={details.imageUrl}
						title={details.title}
						location={details.location}
						price={details.price}
					/>
				))}
			</Carousel>
		</div>
	);
}
