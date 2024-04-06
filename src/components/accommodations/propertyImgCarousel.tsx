import React from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/simpleCarousel";
import Image from "next/image";

export default function PropertyImgCarousel(props: {
	images: Array<{ imageId: string; imageUrl: string }>;
}) {
	return (
		<Carousel
			className="w-full flex items-center md:hidden"
			orientation="horizontal"
		>
			<CarouselContent>
				{props.images.map(({ imageId, imageUrl }) => (
					<CarouselItem key={imageId}>
						<Image
							src={imageUrl}
							alt="Mobile Squazzle Logo"
							width={330}
							height={382}
							placeholder="empty"
							priority={false}
							className="w-full h-auto"
						/>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="left-0 rounded-none" />
			<CarouselNext className="right-0 rounded-none" />
		</Carousel>
	);
}
