import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Circle } from "lucide-react";
import Pagination from "./pagination";

export default async function Gallery() {
	const data = [
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
		{
			name: "Primrose View",
			location: "Jos, Nigeria",
			availability: true,
			type: "Duplex",
			Duration: "Fri 18 Nov - Fri 16 Dec",
			price: 65000,
			img: "/accommodation/Primrose-View.png",
			propertyId: "1",
		},
	];
	function handleFetch() {
		return data;
	}
	return (
		<div className="flex flex-col px-20">
			<div className="flex flex-wrap justify-center py-16 gap-11">
				{data.map((property) => (
					<GalleryCard
						key={property.propertyId}
						name={property.name}
						Duration={property.Duration}
						availability={property.availability}
						img={property.img}
						location={property.location}
						price={property.price}
						propertyId={property.propertyId}
						type={property.type}
					/>
				))}
			</div>
			<Pagination
				key={"pagination"}
				firstIndex={1}
				lastIndex={24}
				accommodationTotal={5000}
			/>
		</div>
	);
}
function GalleryCard({
	name,
	location,
	availability,
	type,
	Duration,
	price,
	img,
	propertyId,
}: {
	name: string;
	location: string;
	availability: boolean;
	type: string;
	Duration: string;
	price: number;
	img: string;
	propertyId: string;
}) {
	return (
		<Link
			href={`/accommodations/${propertyId}`}
			className="flex flex-col items-center max-w-[287px] shadow-md hover:shadow-xl"
		>
			<div className="p-4 overflow-hidden w-full">
				<Image
					src={img}
					alt={name}
					width={255}
					height={201}
					placeholder="empty"
					priority={false}
					className="min-w-[255px] h-auto"
				/>
			</div>
			<div className="p-4 flex flex-col">
				<div>
					<h3 className="text-primary-mid-green mb-[6px] text-lg font-semibold">
						{name}
					</h3>
					<hr className="border" />
				</div>
				<p className="my-3">{location}</p>
				<div className="flex gap-4 items-center">
					<span className="flex gap-2 items-center text-error">
						<Circle color="#D7D7D7" fill="#D7D7D7" size={12} />
						{availability ? "Available" : "Not Available"}
					</span>
					<span className="flex gap-2 items-center text-primary-mid-green">
						<Circle color="#D7D7D7" fill="#D7D7D7" size={12} />

						{type}
					</span>
				</div>
				<p className="py-4">Duration: {Duration}</p>
				<p className="text-primary-mid-green">
					<span className="text-primary-green font-semibold">
						{price.toLocaleString("en-US", {
							style: "currency",
							currency: "NGN",
							minimumFractionDigits: 0,
						})}
					</span>
					/per night
				</p>
			</div>
		</Link>
	);
}
