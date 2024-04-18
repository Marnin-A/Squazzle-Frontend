import Link from "next/link";
import Image from "next/image";
import { Circle } from "lucide-react";

export default function GalleryCard({
	name,
	location,
	availability,
	type,
	hostingFrom,
	hostingTo,
	price,
	img,
	propertyId,
}: {
	name: string;
	location: string;
	availability: "available" | "not available";
	type: string;
	hostingFrom: string;
	hostingTo: string;
	price: number;
	img: string;
	propertyId: string;
}) {
	return (
		<Link
			href={`/accommodations/${propertyId}`}
			className="flex flex-col items-center justify-between max-w-[287px] shadow-md hover:shadow-xl"
		>
			<div className="p-4 overflow-hidden my-auto w-full">
				{img ? (
					<Image
						src={img}
						alt={name}
						width={255}
						height={201}
						placeholder="empty"
						priority={false}
						className="min-w-[255px] h-auto"
					/>
				) : (
					<Image
						src={"/Mobile-logo.svg"}
						alt={name}
						width={255}
						height={201}
						placeholder="empty"
						priority={false}
						className="min-w-[255px] max-w-[255px] h-auto"
					/>
				)}
			</div>
			<div className="p-4 flex flex-col align-bottom">
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
						{availability === "available" ? "Available" : "Not Available"}
					</span>
					<span className="flex gap-2 items-center text-primary-mid-green">
						<Circle color="#D7D7D7" fill="#D7D7D7" size={12} />

						{type}
					</span>
				</div>
				<p className="py-4">
					Duration: {new Date(hostingFrom).toLocaleDateString()} -{" "}
					{new Date(hostingTo).toLocaleDateString()}
				</p>
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
