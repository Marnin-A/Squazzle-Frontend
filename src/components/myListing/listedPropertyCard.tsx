import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ListedPropertyCard() {
	return (
		<Link
			href={"myListing/editProperty?view=overview"}
			className="max-w-[305px] max-h-[264px] w-[305px] h-[264px] bg-off-white flex flex-col items-center justify-between"
		>
			<Image
				src={"/plus-in-circle.svg"}
				alt={"List New Property"}
				width={53.33}
				height={53.33}
				className="w-min h-auto m-auto"
			/>
			<p className="text-primary-[#787878] font-semibold text-center text-[18px] w-full py-2 bg-primary-mid-grey">
				List New Property
			</p>
		</Link>
	);
}
