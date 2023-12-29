"use client";

import * as React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FeaturedCard, { featureDetails } from "../landing_page/featuredCard";

export default function CarouselComponent({
	details,
}: {
	details: Array<featureDetails>;
}) {
	const responsive = {
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
				ssr
				showDots
				arrows={false}
				partialVisbile={false}
				responsive={responsive}
				className="flex mx-20 p-2 pt-8 pb-16 outline-none md:flex-col md:pl-[400px] lg:pl-52"
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
